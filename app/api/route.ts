// 서브도메인 배포 시 헬스체크를 위한 api routes 입니다.
export async function GET(request: Request) {
  return new Response('New API Routes', {
    status: 200,
  });
}
