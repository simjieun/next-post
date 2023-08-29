"use client";
import { useQueryClient } from "@tanstack/react-query";

export default function View() {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData(["posts"]);
  console.log("data", data);
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data?.map((posts) => (
          <li key={posts.id}>{posts.title}</li>
        ))}
      </ul>
    </div>
  );
}
