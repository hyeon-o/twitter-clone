import db from "@/lib/db";

/**
 * [POST] 계정 로그인
 * @param req
 * @returns
 */
export async function POST(req: Request) {

  const { email } = await req.json();

  const user = await db.user.findUnique({
    where: {
      email,
    },
  });

  console.log(user);

  if (!user) {
    return Response.json({
      ok: false,
    });
  }

  return Response.json({
    ok: true,
    user,
  });
}