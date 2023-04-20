import React from "react";

type BannerItem = {
  id: number;
  title: string;
  imgUrl: string;
};

type Props = {
  datas: BannerItem[];
};

export default function Banner3({ datas }: Props) {
  return (
    <>
      <h2 className="text-center py-4 text-xl font-light">
        Want Something More?
      </h2>
      <div className="w-full pb-3 flex flex-col md:flex-row items-center justify-center">
        {datas?.map((data) => (
          <div className={`flex flex-col md:mr-3`} key={data.id}>
            <img src={`${data.imgUrl}`} />
            <button className="text-white text-2xl md:text-base bg-[#235D55] rounded-full px-6 py-5 my-6 mx-12 md:mx-2">
              {data.title}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
