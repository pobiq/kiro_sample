export async function POST(req: Request) {
  const body = await req.json();

  console.log("신청 데이터:", body);

  // TODO:
  // 1. DB 저장 (Prisma)
  // 2. 이메일 전송 (nodemailer)

  return Response.json({ ok: true });
}