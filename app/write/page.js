export default function Write() {
  return (
    <div className="p-20">
      <h4>글작성</h4>
      <form action="/api/post/new" method="post">
        <input name="title" type="text" placeholder="제목" />
        <input name="content" type="text" placeholder="내용" />
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
