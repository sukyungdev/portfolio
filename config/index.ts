const dev = process.env.NODE_ENV !== 'production';

export const server = dev
  ? 'http://localhost:3000/api/projects'
  : 'https://sukyungdev-portfolio.vercel.app/api/projects';
