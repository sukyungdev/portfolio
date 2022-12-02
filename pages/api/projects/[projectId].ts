// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { projects } from '../../../data/project';

import type { NextApiRequest, NextApiResponse } from 'next';

type Data = any;

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { projectId }: any = req.query;
  const project = projects.find((item) => item.id === parseInt(projectId));
  res.status(200).json(project);
}
