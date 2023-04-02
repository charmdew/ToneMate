import Head from "next/head";
import Layout from "@/components/layout";
import TitleContainer from "@/components/content/title-container";
import MainContainer from "@/components/content/main-container";

import { useRef, useState, useEffect } from "react";

export default function VocalColor() {

  const [stream, setStream] = useState(null);
  const [audioCtx, setAudioCtx] = useState(null);
  const [analyser, setAnalyser] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => {
        const audioCtx = new AudioContext();
        const source = audioCtx.createMediaStreamSource(stream);
        const analyser = audioCtx.createAnalyser();
        analyser.fftSize = 256;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        source.connect(analyser);
        setStream(stream);
        setAudioCtx(audioCtx);
        setAnalyser(analyser);

        function draw() {
          requestAnimationFrame(draw);
          analyser.getByteFrequencyData(dataArray);
          const canvasCtx = canvasRef.current.getContext('2d');
          const WIDTH = canvasRef.current.width;
          const HEIGHT = canvasRef.current.height;
          canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
          const barWidth = (WIDTH / bufferLength) * 2.5;
          let x = 0;
          for (let i = 0; i < bufferLength; i++) {
            const barHeight = dataArray[i];
            canvasCtx.fillStyle = "white";
            canvasCtx.fillRect(x, HEIGHT - barHeight / 2, barWidth, barHeight);
            x += barWidth + 1;
          }
        }

        draw();
      })
      .catch((error) => {
        console.error('Error accessing microphone:', error);
      });
  }, []);

  function startRecording() {
    if (!audioCtx || !stream) return;

    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();
    const chunks = [];

    mediaRecorder.addEventListener('dataavailable', (event) => {
      chunks.push(event.data);
    });

    mediaRecorder.addEventListener('stop', () => {
      const blob = new Blob(chunks, { type: 'audio/wav' });
      const audioURL = window.URL.createObjectURL(blob);
      const audio = new Audio(audioURL);
      audio.play();
    });

    setTimeout(() => {
      mediaRecorder.stop();
    }, 10000);
  }


  return (
    <>
      <Head>
        <title>음색검사</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <TitleContainer>
            <p className="text-xl lg:text-4xl text-white">음색검사</p>
          </TitleContainer>
          <MainContainer>
            {/* 음색 검사 주의사항 및 방법 */}
            <div className="w-full h-44 lg:h-60 bg-white">1</div>
            {/* 읽어야할 문구 */}
            <div className="flex w-full h-44 lg:h-60 justify-center items-center bg-transparent">
              <canvas ref={canvasRef} className="flex w-2/3 h-5/6"></canvas>
            </div>
            {/* 녹음 버튼 및 오디오 비주얼라이제이션 */}
            <div className="w-full h-44 lg:h-60 bg-white">
              <div>
                <button onClick={startRecording}>
                  Record
                </button>
                {/* <button onClick={handleStopRecording} disabled={!isRecording}>
                  Stop
                </button> */}
              </div>
            </div>
          </MainContainer>
        </Layout>
      </main>
    </>
  );
}
