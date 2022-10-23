// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import pages from "../../public/pages.json";

type Data = {
  id: number;
  pageTitle: string;
  description: string;
  slug: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json(pages);
}
