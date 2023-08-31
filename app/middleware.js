import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request) {
  console.log(request.nextUrl); //유저가 요청중인 URL 출력해줌
  console.log(request.cookies); //유저가 보낸 쿠키 출력해줌
  console.log(request.headers); //유저의 headers 정보 출력해줌
  NextResponse.next(); //통과
  NextResponse.redirect(); //다른페이지 이동
  NextResponse.rewrite(); //다른 페이지 이동인데 브라우저 주소창에 뜨는 URL을 변경하지 않고 이동해줌

  // 1. 특정 페이지 접속하는 놈들 기록하기
  //   if (request.nextUrl.pathname == '/list') {
  // URL 뒤에 query string이라든지 그런걸 유저 맘대로 붙일 수 있기 때문에 URL을 검사할 땐 등호보다는 .startsWith() 사용하는게 좋음
  if (request.nextUrl.pathname.startsWith("/list")) {
    console.log(new Date().toLocaleString());
    console.log(request.headers.get("sec-ch-ua-platform"));
    return NextResponse.next();
  }

  // 2. 로그인 안된 유저는 /write 페이지 접속 못하게 막자
  if (request.nextUrl.pathname.startsWith("/write")) {
    const session = await getToken({ req: request });
    console.log("세션", session);
    if (session == null) {
      return NextResponse.redirect(new URL("/api/auth/signin", request.url));
    }
  }

  // 3. 특정페이지 접속시 쿠키를 만들어보자
  request.cookies.get("쿠키이름"); //출력
  request.cookies.has("쿠키이름"); //존재확인
  request.cookies.delete("쿠키이름"); //삭제

  const response = NextResponse.next();
  response.cookies.set({
    name: "mode",
    value: "dark",
    maxAge: 3600,
    httpOnly: true,
  });

  //유저가 /register 페이지 방문시 visited=true 라는 쿠키를 생성
  if (request.nextUrl.pathname.startsWith("/register")) {
    if (request.cookies.has("visited") == false) {
      const response = NextResponse.next();
      response.cookies.set({
        name: "visited",
        value: "true",
        maxAge: 3600,
      });
      return response;
    }
    return NextResponse.next();
  }

  return response; //쿠키생성
}
