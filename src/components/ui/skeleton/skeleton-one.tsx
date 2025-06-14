"use client";
interface SkeletonOneProps {
    imgSrc: string;
}

export const SkeletonOne = ({imgSrc}: SkeletonOneProps) => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full  p-5  mx-auto bg-white dark:bg-stone-800 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          <img
            src={imgSrc}
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
          />
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-stone-800 via-white dark:via-stone-800 to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-stone-800 via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};
