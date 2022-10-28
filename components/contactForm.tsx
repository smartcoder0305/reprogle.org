import { useState } from "react";

export default function ContactForm() {
  const [fname, setFName] = useState("John");
  const [lname, setLName] = useState("Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [message, setMessage] = useState("I was hoping to inquire about...");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(
      `Hi ${fname} ${lname}! We'll email you back at ${email} with your message: ${message}`
    );
  };

  return (
    <div className={"mb-7 flex justify-between text-white"}>
      <form className={"flex flex-col"} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            Name <span className="text-red-300">*</span>
          </label>
        </div>
        <div className={"mb-7 flex justify-between space-x-5"}>
          <div className="w-1/2">
            <input
              type="text"
              id="fname"
              name="fname"
              className="text-black"
              onChange={(e) => setFName(e.target.value)}
              placeholder={fname}
              required
            />
            <br />
            <label htmlFor="name" className={"text-sm"}>
              First
            </label>
            <br />
          </div>
          <div className={"w-1/2"}>
            <input
              type="text"
              id="lname"
              name="lname"
              className="text-black"
              onChange={(e) => setLName(e.target.value)}
              placeholder={lname}
              required
            />
            <br />
            <label htmlFor="lname" className={"text-sm"}>
              Last
            </label>
            <br />
          </div>
        </div>
        <div className={"mb-7 w-full"}>
          <label htmlFor="email">
            Email <span className="text-red-300">*</span>
          </label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            className="w-full text-black"
            onChange={(e) => setEmail(e.target.value)}
            placeholder={email}
            required
          />
          <br />
        </div>
        <div className={"mb-4 w-full"}>
          <label htmlFor="message">
            Message <span className="text-red-300">*</span>
          </label>
          <textarea
            name="message"
            id="message"
            className="w-full text-black"
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            placeholder={message}
            required
          ></textarea>
        </div>
        <input
          type="submit"
          value="Submit"
          className={
            "mx-auto rounded-md bg-base-blue-200 px-10 text-white outline outline-2 outline-white"
          }
        />
      </form>
    </div>
  );
}
