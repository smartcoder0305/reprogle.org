function Body({ ...props }) {
  return (
    <div {...props}>
      <div className="flex flex-col items-start justify-center">
        <h3 className={"gradient font-body text-base font-normal text-white"}>
          Hello, my name is
        </h3>
        <h1
          className={
            "my-4 font-heading text-5xl font-extrabold leading-none text-white md:whitespace-nowrap md:text-6xl lg:text-7xl xl:whitespace-nowrap"
          }
        >
          Nate Reprogle
        </h1>
        <h1
          className={"font-heading text-xl font-normal text-white md:text-3xl"}
        >
          IT Enthusiast
        </h1>
      </div>
      <picture>
        <source srcSet="/Profile.jpg" type="image/jpg" />
        <img
          src={"/Profile.jpg"}
          alt="Nate Reprogle"
          className={"rounded-full xl:scale-75"}
        />
      </picture>
    </div>
  );
}

export default Body;
