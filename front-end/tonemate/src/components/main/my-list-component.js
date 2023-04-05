import { useState } from "react";

function MyListComponent() {
  const [total, setTotal] = useState(0);

  return (
    <>
      <div className="flex flex-col lg:flex-row w-full h-18 lg:h-12 justify-start items-center lg:items-start mb-5 fade-in-custom-10s">
        <p className="text-md lg:text-2xl text-white">
          000님은 총 {total}곡의 애창곡을 가지고 있습니다.
        </p>
      </div>
    </>
  );
}

export default MyListComponent;
