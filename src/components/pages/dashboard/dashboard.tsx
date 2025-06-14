export const Dashboard = () => {
  return (
    <div className="flex flex-1">
      <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border p-2 md:p-10 bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700">
        <div className="flex gap-2">
          {[...new Array(4)].map((i, idx) => (
            <div
              key={"first-array-demo-1" + idx}
              className="h-20 w-full animate-pulse rounded-lg bg-stone-200 dark:bg-stone-900"
            ></div>
          ))}
        </div>
        <div className="flex flex-1 gap-2">
          {[...new Array(2)].map((i, idx) => (
            <div
              key={"second-array-demo-1" + idx}
              className="h-full w-full animate-pulse rounded-lg bg-stone-200 dark:bg-stone-900"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};