import { NextApiRequest, NextApiResponse } from "next";

const Dmkt = async (request: NextApiRequest, response: NextApiResponse) => {
  const {
    query: { utm_source, utm_medium, utm_campaign },
    method,
  } = request;
  console.log(utm_source, utm_medium, utm_campaign, method);

  const protocol = "indomaretpoinku://web"
  const url = "https://indomaretpoinku.com/Tukar-Hadiah-Scandic"
  const deeplink = `${protocol}?url=${url}?utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}`

  // do nothing fancy and simply return a string concatenation
  return response.status(200).json({ protocol: protocol, url: url, utm_source: utm_source, utm_medium: utm_medium, utm_campaign: utm_campaign, deeplink: deeplink });
};

export default Dmkt