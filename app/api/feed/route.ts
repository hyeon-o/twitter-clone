import db from "@/lib/db";

/**
 * [POST] 피드 생성
 * @param req
 * @returns
 */
export async function POST(req: Request) {
  const { userId, message } = await req.json();

  if (!userId && !message) {
    return Response.json({ ok: false }, { status: 400 });
  }

  const user = await db.feed.create({
    data: {
      userId,
      message,
    },
  });

  return Response.json({
    ok: true,
  });
}

/**
 * [GET] 피드 조회
 * @param req
 * @returns
 */
export async function GET(req: Request) {
  const feedList = await db.feed.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: true,
    }
  });
  console.log(feedList);
  return Response.json({
    ok: true,
    feedList,
  });
}
