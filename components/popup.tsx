import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function Popup({ ...props }) {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(props.redirectTime);

  useEffect(() => {
    if (timeLeft === 0) {
      router.push(props.redirectLink);
    }

    const intervalUpdate = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(intervalUpdate);
  }, [props.redirectLink, router, timeLeft]);

  return (
    <div
      className={
        "fixed top-0 left-0 flex min-h-screen w-full items-center justify-center bg-[rgb(0,0,0,0.2)] text-left text-black backdrop-blur-sm"
      }
      onClick={() => props.setTrigger(false)}
    >
      <div className="relative m-[32px] flex max-w-screen-sm flex-col rounded-xl bg-white p-[32px] lg:max-w-screen-md xl:max-w-screen-lg">
        <button
          className="absolute right-[14px] top-[10px] text-lg font-bold text-black"
          onClick={() => props.setTrigger(false)}
        >
          X
        </button>
        <div className={"flex items-baseline space-x-1"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002"
            />
          </svg>
          <h2 className={"pb-4 font-heading text-4xl font-semibold"}>
            Hold up!
          </h2>
        </div>
        <p className={"pb-4"}>
          You&apos;re about to nagivate away from <strong>reprogle.org</strong>.
          In this case, you&apos;re heading to{" "}
          <strong>{props.redirectTitle}</strong>. {props.message}
        </p>
        <p>
          If you aren&apos;t automatically redirected in {timeLeft}
          {timeLeft !== 1 ? " seconds" : " second"},{" "}
          <Link
            href={props.redirectLink}
            className={"text-blue-500 underline underline-offset-2"}
          >
            click or tap here.
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Popup;
