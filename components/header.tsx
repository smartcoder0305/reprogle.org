function Header({ ...props }) {
  return (
    <div {...props}>
      <div className="flex flex-col items-start justify-center">
        <h3
          className={"gradient pb-3 font-body text-base font-normal text-white"}
        >
          Hello, my name is
        </h3>
        <h1
          className={
            "my-4 font-heading text-5xl font-extrabold leading-none text-white md:whitespace-normal md:text-6xl lg:whitespace-nowrap lg:text-7xl"
          }
        >
          Nate Reprogle
        </h1>
        <h1
          className={"font-heading text-xl font-normal text-white md:text-2xl"}
        >
          IT Enthusiast
        </h1>
      </div>
      <picture className={"xl:h-1/2 xl:w-1/2"}>
        <source srcSet="/Profile.jpg" type="image/jpg" />
        <img
          src={"/Profile.jpg"}
          alt="Nate Reprogle"
          className={"rounded-full"}
        />
      </picture>
    </div>
  );
}

export default Header;
