import type { VercelRequest, VercelResponse } from '@vercel/node';
import cookie from 'cookie';

const testAccount = "test@eventflo.com";
const testPassword = "J5LuxfsbKIje";
const testToken = "XLbC1JFx+F+aQwdATiJIQSnWqzvC+AgRDkPiuqrFSjE=";

export default async function (req: VercelRequest, res: VercelResponse) {
  if (req.headers.token === testToken) {
    res.status(200).json({});
    return;
  }

  const { account, password } = JSON.parse(req.body);

  const isAcc = account === testAccount;
  const isPwd = password === testPassword;

  if (!isAcc) {
    res.status(500).json({
      code: 1001,
      message: 'The user does not exist.',
    });
    return;
  }

  if (!isPwd) {
    res.status(500).json({
      code: 1002,
      message: 'password error.',
    });
    return;
  }

  res.setHeader(
    'Set-Cookie',
    cookie.serialize('token', testToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7, // 1 week
      sameSite: 'strict',
      path: '/',
    }),
  );

  res.status(200).json({});
}
