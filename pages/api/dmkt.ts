import { NextApiRequest, NextApiResponse } from "next";

const Dmkt = async (request: NextApiRequest, response: NextApiResponse) => {
  const {
    query: { utm_source, utm_medium, utm_campaign},
    method,
  } = request;
  console.log(utm_source, utm_medium, utm_campaign, method);

  // do nothing fancy and simply return a string concatenation
  return response.status(200).json({ utm_source: utm_source, utm_medium: utm_medium, utm_campaign: utm_campaign });
};

export default Dmkt