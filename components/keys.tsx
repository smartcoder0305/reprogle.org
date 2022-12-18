"use client";
import { useState } from "react";

export default function Keys({ ...props }) {
  const expandArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );

  const shrinkArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.5 15.75l7.5-7.5 7.5 7.5"
      />
    </svg>
  );
  const [expand, setExpand] = useState(false);

  return (
    <div {...props}>
      <div className={"flex flex-col space-y-4 pb-10"}>
        <h3 className={"text-xl md:text-2xl"}>PGP Key</h3>
        <p>Below is my PGP key I use for code signing on GitHub.</p>
        <div
          className={
            "w-full break-words rounded-[0.25rem] bg-slate-800 py-2 px-4 md:w-fit"
          }
        >
          <code>
            -----BEGIN PGP PUBLIC KEY BLOCK-----
            <br className={"hidden md:block"} />
            mDMEYugSJRYJKwYBBAHaRw8BAQdAKcublhX5k/SKdVEK7D7UQenuyFxdFOcNlDTT
            <br className={"hidden md:block"} />
            FYOqRu+0OU5hdGUgUmVwcm9nbGUgKFl1YmlLZXkgR1BHIEtleSkgPG5hdGUucmVw
            <br className={"hidden md:block"} />
            cm9nbGVAZ21haWwuY29tPoiTBBMWCgA7FiEEMaXPkdww2zH5XKH1BvXgR5QOnRIF
            <br className={"hidden md:block"} />
            AmLoEiUCGwMFCwkIBwICIgIGFQoJCAsCBBYCAwECHgcCF4AACgkQBvXgR5QOnRIX
            <br className={"hidden md:block"} />
            cQD+JfjCXbHiow+OG+b93FE1PkdPnoNiaPxu7RqKB4kbZr4BAMqdv+NaKr6VZxoe
            <br className={"hidden md:block"} />
            /QdzkwevUYf50+PjcQqOAt2sz8IIuDgEYugSJRIKKwYBBAGXVQEFAQEHQPnsyKC6
            <br className={"hidden md:block"} />
            ri7QCkwiHpA/sBpyO6Xv6ysWL+J5wUaG/GwAAwEIB4h4BBgWCgAgFiEEMaXPkdww
            <br className={"hidden md:block"} />
            2zH5XKH1BvXgR5QOnRIFAmLoEiUCGwwACgkQBvXgR5QOnRK+rwEAzKcbv4GBrP9C
            <br className={"hidden md:block"} />
            iS0zAwt8VrcYXRKpniNk/o8Wl5ac4b4A/1iZfIuzelWbO2W1ehd0vqMQ1fmdGlq7
            <br className={"hidden md:block"} />
            8fW3L6xyXysA =Daxa
            <br />
            -----END PGP PUBLIC KEY BLOCK-----
          </code>
        </div>
        <p>
          As a{" "}
          <a
            href="https://reprogle.org/natereprogle_pgp.gpg"
            className={"underline"}
          >
            raw file
          </a>
          :
        </p>
        <div
          className={"w-fit break-all rounded-[0.25rem] bg-slate-800 py-2 px-4"}
        >
          <code>
            curl https://reprogle.org/natereprogle_pgp.gpg | gpg --import
          </code>
        </div>
      </div>
      <div className={"flex flex-col space-y-4 border-t pb-8"}>
        <h3 className={"mt-2 text-xl md:text-2xl"}>SSH Key</h3>
        <p>
          Below is my SSH key. I don&apos;t normally use it, but it&apos;s here
          if needed.
        </p>
        <div
          className={
            "w-full break-all rounded-[0.25rem] bg-slate-800 py-2 px-4 md:w-fit"
          }
        >
          <code>
            ssh-ed25519
            <br className={"block md:hidden"} />{" "}
            AAAAC3NzaC1lZDI1NTE5AAAAIHXj4naNfNjrKvj1Gm0WBAICOrmh3YEQe1h5KHmkFMMf
          </code>
        </div>
        <p>
          It has a fingerprint of{" "}
          <code className={"break-all rounded-sm bg-slate-800 p-[2px]"}>
            SHA256:+Anww30dTyHENrG1+bkuJcZlhvIGGl+7j1x2VmUfdsg
          </code>
          .
        </p>

        <div className={"flex flex-col space-y-1"}>
          <p>
            As a{" "}
            <a
              href="https://reprogle.org/natereprogle_ssh.pub"
              className={"underline"}
            >
              raw file
            </a>
            :
          </p>
          <code
            className={
              "w-fit break-all rounded-[0.25rem] bg-slate-800 py-2 px-4"
            }
          >
            curl https://reprogle.org/natereprogle_ssh.pub &gt;&gt;
            ~/.ssh/authorized_keys
          </code>
        </div>
      </div>
      <div className={"flex flex-col space-y-2"}>
        <h3 className={"text-md mt-2 md:text-lg"}>RSA Key</h3>
        <p>
          I also have an RSA Key I use for my private servers and services,
          however it has been used on GitHub on occasion, so it may be good to
          have it here just in case!
        </p>
        <br />
        <div
          className="flex w-fit cursor-pointer py-2 pr-4 lg:py-0"
          onClick={() => setExpand((expand) => !expand)}
        >
          {/* Show a differnet arrow and text based off the state of setExpand */}
          {expand ? (
            <>
              {shrinkArrow}
              <span className={"pl-1"}>
                Click to collapse
              </span>
            </>
          ) : (
            <>
              {expandArrow}
              <span className={"pl-1"}>
                Click to expand
              </span>
            </>
          )}
        </div>
        {expand && (
          <div className={"flex flex-col space-y-2"}>
            <div
              className={
                "w-full break-all rounded-[0.25rem] bg-slate-800 py-2 px-4 lg:w-[80%]"
              }
            >
              <code className={"break-all"}>
                ssh-rsa
                AAAAB3NzaC1yc2EAAAADAQABAAACAQDwA/XYgPDUwKvS4nxb/qMd35uzIXqMuJSn0M57Y2cGrlaY90zlu/xBXKc2p+Tcs9VQnP4Zh+nrr01FZB707H0iwK3VS5VUGO6d42hw3QOWpCzRU9anOr4zUNlvesEYhv04wW5OJW/IAtnGZAWQ1QXYHYYAGb4Lac/OcLIxRj2HU9mnhyO4puhL/iSyyRD8rP8Kjnc9U+a0eFnbBp8vqVXEYaKwjHFVr5OGGyyE1o3bTTtfP8C9mCvlbgZFaFQEbPhFdKGF5lRcjSlKF5E1lqp+JehqaKLTCamzfQuFTxCHydmtdKF0ceTuLqCeBNeKMNf+rEQ76jKXIVTxLWOFfiBLauBJMMxuemWpaPCbM5m+W0tN7bkx617KzuaB3DPYASepj8jL7zpLX/9R+ODbgBgdcde46X91zHJsmy9HCFkMNKCQv41FOl51O8+uFW2pR8Xv9gn2SOsPAQgIDXg4ACuJefTYzHo4ZF5isKGsGgwC+rpM7GVIkzS/r8c/foH2KRf9s0+T9aiqjVpAd3Q7hecbPfn+sWzPcpmyZ3WJiS/TPVd4ErSQSH3DO7fA2Hs+pwcvHIYrcmuhCqsRasJxI5tCZ3+vgPTo+ENoyh9wIDNek4i9aBRsVwZg4WBjIP+uX7UCEiiWOAUps/x8XmNDKQVhy1FGs9sxaH7TqYOhqwRHEQ==
              </code>
            </div>
            <p className={"pb-4"}>
              It has a fingerprint of{" "}
              <code className={"break-all rounded-sm bg-slate-800 p-[2px]"}>
                MD5:96:46:4b:a8:eb:0b:90:f3:f5:a7:8c:b2:3c:d3:d3:ba
              </code>
              .
            </p>
            <div className={"flex flex-col space-y-1"}>
              <p>
                As a{" "}
                <a
                  href="https://reprogle.org/natereprogle_rsa.pub"
                  className={"underline"}
                >
                  raw file
                </a>
                :
              </p>
              <code
                className={
                  "w-fit break-all rounded-[0.25rem] bg-slate-800 py-2 px-4"
                }
              >
                curl https://reprogle.org/natereprogle_rsa.pub &gt;&gt;
                ~/.ssh/authorized_keys
              </code>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
