import db from "@/lib/db";

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { likedCnt } = await req.json();

  const feed = await db.feed.update({
    where: {
      id: +params.id,
    },
    data: {
      liked: likedCnt,
    },
  });
  console.log(feed);

  return Response.json({
    ok: true,
  });
}
