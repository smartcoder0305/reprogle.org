import Header from "../components/header";
import Body from "../components/body";

export default function Home() {
  return (
    <div className={"relative overflow-hidden"}>
      <Header
        className={
          "my-10 space-x-36 px-5 md:mx-auto md:flex md:max-w-screen-md md:justify-between md:space-x-20 lg:max-w-screen-lg xl:max-w-screen-xl"
        }
        headertext="Hello, my name is"
        maintext="Nate Reprogle"
        footertext="IT Enthusiast"
        image="/Profile.jpg"
        imagealt="Nate Reprogle"
      />
      <Body
        className={
          "my-5 px-5 text-white md:mx-auto md:flex md:max-w-screen-md md:flex-col md:justify-evenly md:space-y-2 lg:max-w-screen-lg xl:max-w-screen-xl"
        }
      />
    </div>
  );
};