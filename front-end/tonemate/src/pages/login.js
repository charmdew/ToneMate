import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { API_URL } from '@/config';

export default function LoginPage() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="h-screen w-screen bg-base-200">
          <div className="text-center">
            <Link href={`${API_URL}/oauth2/authorization/kakao`}>
              <button className="btn">카카오 로그인</button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
