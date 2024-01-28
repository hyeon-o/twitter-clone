import db from "@/lib/db";

/**
 * [GET] 피드 조회
 * @param req
 * @returns
 */
export async function GET(
  req: Request,
  { params }: { params: { id: number } }
) {
  const feed = await db.feed.findUnique({
    where: {
      id: +params.id,
    },
    include: {
      user: true,
    }
  });
  return Response.json({
    ok: true,
    feed,
  });
}
