import type { NextApiRequest, NextApiResponse } from "next";
import drStrangeProfile from "./../../server/data/dr.strange.json.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  // console.log(drStrangeProfile);
  res.status(200).json(drStrangeProfile);
}
