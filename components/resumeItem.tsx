function ResumeItem({ ...props }) {
  return (
    <div className={"mb-7 block lg:flex lg:justify-between lg:space-x-5"}>
      <div className={"flex flex-col lg:w-1/3 lg:space-y-2"}>
        <h1 className={"font-bold"}>{{ ...props }.timeRange}</h1>
        <h2>{{ ...props }.company}</h2>
      </div>
      <div className={"flex flex-col lg:w-3/4 lg:space-y-2"}>
        <h1 className={"text_gradient text-2xl font-extrabold"}>
          {{ ...props }.title}
        </h1>
        <p>{{ ...props }.description}</p>
      </div>
    </div>
  );
}

export default ResumeItem;
