import type { NextPage } from "next";
import Header from "../../components/header";
import Keys from "../../components/keys";

const KeyPage: NextPage = () => {
  return (
    <div className={"relative overflow-hidden"}>
      <Header
        className={
          "my-10 space-x-36 px-5 md:mx-auto md:flex md:max-w-screen-md md:justify-between md:space-x-20 lg:max-w-screen-lg xl:max-w-screen-xl"
        }
        maintext="PGP & SSH Keys"
        footertext="For use with GitHub and secure messaging"
        image="/Keys.jpg"
        imagealt="Stock photo of lock with binary surrounding it"
      />
      <Keys
        className={
          "my-5 px-5 text-white md:mx-auto md:flex md:max-w-screen-md md:flex-col md:justify-evenly md:space-y-2 lg:max-w-screen-lg xl:max-w-screen-xl"
        }
      />
    </div>
  );
};

export default KeyPage;
