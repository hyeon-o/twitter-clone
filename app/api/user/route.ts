import db from "@/lib/db";

/**
 * [POST] 계정 생성
 * @param req
 * @returns
 */
export async function POST(req: Request) {
  const { email, nickname } = await req.json();

  if (!email && !nickname) {
    return Response.json({ ok: false }, { status: 400 });
  }

  const user = await db.user.create({
    data: {
      email,
      nickname,
    },
  });

  return Response.json({
    ok: true,
  });
}
