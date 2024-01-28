import db from "@/lib/db";

/**
 * [GET] 계정 조회
 * @param req
 * @returns
 */
export async function GET(
  req: Request,
  { params }: { params: { id: number } }
) {
  const user = await db.user.findUnique({
    where: {
      id: +params.id,
    },
  });
  return Response.json({
    ok: true,
    user,
  });
}
