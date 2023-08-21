"use client";

import Link from "next/link";
import DetailLink from "./DetailLink";

export default function ListItem({ result }) {
  return result.map((post, index) => (
    <div className="list-item" key={index}>
      <Link href={`/detail/${post._id}`}>
        <h4>{post.title}</h4>
      </Link>
      <Link href={`/edit/${post._id}`}>✍️</Link>
      <DetailLink />
      <span onClick={() => fetch("/api/post/delete", { method: "DELETE", body: post._id })}>
        🗑️
      </span>
      <p>1월 1일</p>
    </div>
  ));
}
