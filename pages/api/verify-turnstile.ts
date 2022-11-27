import { NextApiRequest, NextApiResponse } from "next";

const endpoint = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const secret = `${process.env.NEXT_PUBLIC_TURNSTILE_SECRET}`;

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const body = `secret=${encodeURIComponent(
    secret
  )}&response=${encodeURIComponent(request.body.token)}`;

  const result = await fetch(endpoint, {
    method: "POST",
    body,
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
  });

  const data = await result.json();
  response.json(data);
}
