// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { projects } from '../../../data/project';

import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json(projects);
}
