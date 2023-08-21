import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if (req.method === "POST") {
    if (req.body.title == "") {
      return res.status(500).json("제목써라");
    }
    try {
      let db = (await connectDB).db("forum");
      let result = await db.collection("post").insertOne(req.body);
      return res.status(200).redirect("/list");
    } catch (error) {
      console.error(error);
    }
  }
}
