import ContactForm from "../../components/contactForm";
import Header from "../../components/header";

export default function Contact() {
  return (
    <div className={"relative overflow-hidden"}>
      <Header
        className={
          "my-10 space-x-36 px-4 md:mx-auto md:flex md:max-w-screen-md md:justify-between md:space-x-20 lg:max-w-screen-lg xl:max-w-screen-xl"
        }
        headertext="Feel free to"
        maintext="Contact Me"
        footertext=""
        image="/Contact.jpg"
        imagealt="Hands typing on a laptop keyboard"
      />
      <div
        className={
          "my-20 px-4 text-white md:mx-auto md:flex md:max-w-screen-md md:justify-between md:px-5 lg:max-w-screen-lg xl:max-w-screen-xl"
        }
      >
        <div className={"mb-5 flex w-full flex-col space-y-4 md:w-1/2 md:pr-5"}>
          <h1
            className={
              "font-heading text-2xl text-white md:text-3xl lg:text-4xl"
            }
          >
            Send Me a Message
          </h1>
          <p
            className={
              "max-w-screen-sm font-body text-sm text-white md:max-w-screen-sm md:text-base lg:max-w-screen-md lg:text-lg xl:max-w-screen-lg"
            }
          >
            Whether you wish to just chat or need to reach me, simply fill out
            this form and I&apos;ll get back to you soon.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};