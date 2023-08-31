"use client";

//reset은 페이지를 다시 로드하는 함수
export default function Error({ error, reset }) {
  return (
    <div>
      <h4>에러가 발생했습니다.</h4>
      <p>{error.message}</p>
      <button onClick={reset}>다시 시도</button>
    </div>
  );
}
