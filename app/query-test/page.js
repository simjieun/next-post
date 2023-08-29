import { dehydrate, Hydrate } from "@tanstack/react-query";
import getQueryClient from "../getQueryClient";
import View from "./view";

export async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}

export default async function HydratedPosts() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["posts"], getData);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <View />
    </Hydrate>
  );
}
