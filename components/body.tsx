'use client';

import ResumeItem from "./resumeItem";

type Job = {
  timeRange: string;
  company: string;
  title: string;
  description: string;
};

export default function Body({ ...props }) {
  return (
    <div {...props}>
      {/* About me */}
      <div className={"mb-14"}>
        <h3>About me</h3>
        <p
          className={
            "text_gradient pb-2 pt-1 font-heading text-3xl font-bold md:text-4xl xl:text-5xl"
          }
        >
          I am an IT enthusiast with a career in Contact Center Engineering
          based in Arkansas. I&apos;ve carried many titles over my career, with
          skills including management, logistics & excellent customer service.
        </p>
      </div>

      {/* Who I am */}
      <div className={"block pb-10 lg:flex lg:justify-between"}>
        <h2
          className={
            "pb-5 font-heading text-2xl font-bold md:text-3xl xl:text-4xl"
          }
        >
          Who I am
        </h2>
        <p className={"leading-7 lg:w-1/2"}>
          I excel in fast-paced customer focused environments where service is
          the main goal. While many say they&apos;re good at multitasking, I
          pride myself in being able to handle multiple tasks efficiently and
          accurately. I&apos;m also very passionate about driving positive
          change in the workforce as well as the world we live in. <br />
          <br />I started working in the food industry while going to college
          full time. After 3 years, I moved full-time to transportation and
          logistics while continuing my studies. Within 6 months, and not much
          experience to my name, I moved into a management position where I
          exceeded even my own expectations. After graduating, I moved into IT
          as a Contact Center Engineer on my company&apos;s Unified
          Communications Engineering team. <br />
          <br />
          While my career is in Contact Center, I have experience with system
          administration and cloud solutions. Hosting my own servers and
          services, both on premise and in the cloud, writing my own website
          from scratch, and many other projects I&apos;ve worked on have given
          me the opportunity to learn many valuable skills that definitely
          broaden my portfolio and horizons.
        </p>
      </div>

      {/* Skill & Experience */}
      <div className={"block lg:flex lg:justify-between"}>
        {/* Skills */}
        <div className={"mb-8 lg:w-[47%]"}>
          <h2
            className={
              "mb-5 font-heading text-2xl font-bold md:text-3xl xl:text-4xl"
            }
          >
            Skills
          </h2>
          <div>
            <p className={"gradient mb-5 w-full pb-6"}>
              Bachelors in Business Administration, majoring in Business
              Information Systems. Certificate of Proficiency, Business Analysis
            </p>{" "}
            <br />
            <p className={"gradient mb-5 w-full pb-6"}>
              Experience in web development frameworks such as React, NextJS,
              and TailwindCSS (This site uses all of those!)
            </p>{" "}
            <br />
            <p className={"gradient mb-5 w-full pb-6"}>
              Experience with container orchestration using Docker
            </p>{" "}
            <br />
            <p className={"gradient mb-5 w-full pb-6"}>
              Experience with Google Cloud Platform and AWS
            </p>{" "}
            <br />
            <p className={"gradient mb-5 w-full pb-6"}>
              Ability to grasp new concepts quickly, and easily teachable. It
              may not be a &quot;skill&quot;, but it&apos;s a nice trait!
            </p>{" "}
            <br />
          </div>
        </div>

        {/* My Experience */}
        <div className={"lg:w-1/2"}>
          <h2
            className={
              "mb-5 font-heading text-2xl font-bold md:text-3xl xl:text-4xl"
            }
          >
            My Experience
          </h2>
          <div>
            <ResumeItem
              timeRange={"July 2021 - Present"}
              company={"J.B. Hunt Transport, Inc."}
              title={"Contact Center Specialist"}
              description={
                "Working with business leaders, design and maintain complex, enterprise-wide Contact Center routing solutions. Work with leading edge CC technologies to ensure the needs and expectations of both the business and our customers are not only met, but also exceeded."
              }
            />
            <ResumeItem
              timeRange={"December 2019 - July 2021"}
              company={"J.B. Hunt Transport, Inc."}
              title={"Transportation Manager"}
              description={
                "Manage a fleet of approx. 30 drivers. Dispatch, manage pay, and discuss safety with the fleet. Ensure drivers are DOT compliant and following FMCSA regulations. Handled other duties as assigned."
              }
            />
            <ResumeItem
              timeRange={"July 2019 - December 2019"}
              company={"J.B. Hunt Transport, Inc."}
              title={"Customer Experience Representative"}
              description={
                "Managed customer relations and priced freight upon request. Worked with truckload division to book freight as well as managed capacity for market areas, among other duties assigned."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}