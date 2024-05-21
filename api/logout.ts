import type { VercelRequest, VercelResponse } from '@vercel/node';
import cookie from 'cookie';

export default async function (req: VercelRequest, res: VercelResponse) {
  res.setHeader(
    'Set-Cookie',
    cookie.serialize('token', '', {
      httpOnly: true,
      expires: new Date(0),
      sameSite: 'strict',
      path: '/',
    }),
  );

  res.status(200).json({});
}
