function Header({ ...props }) {
  return (
    <div {...props}>
      <div className="flex flex-col items-start justify-center">
        <h3
          className={"gradient pb-3 font-body text-base font-normal text-white"}
        >
          {{ ...props }.headertext}
        </h3>
        <h1
          className={
            "my-4 font-heading text-5xl font-extrabold leading-none text-white md:whitespace-normal md:text-6xl lg:whitespace-nowrap lg:text-7xl"
          }
        >
          {{ ...props }.maintext}
        </h1>
        <h1
          className={"font-heading text-xl font-normal text-white md:text-2xl"}
        >
          {{ ...props }.footertext}
        </h1>
      </div>
      <picture className={"xl:h-[45%] xl:w-[45%]"}>
        <source srcSet={{ ...props }.image} type="image/jpg" />
        <img
          src={{ ...props }.image}
          alt={{ ...props }.imagealt}
          className={"rounded-full"}
        />
      </picture>
    </div>
  );
}

export default Header;
