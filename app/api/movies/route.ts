import clientPromise from "../../lib/mongodb";
import { NextResponse } from 'next/server';


export async function GET(req: any) {
    try {
      const client = await clientPromise;
      const db = client.db("sample_mflix");
    //   switch (req.method) {
    //     case "POST":
    //       let bodyObject = JSON.parse(req.body);
    //       let myPost = await db.collection("movies").insertOne(bodyObject);
    //       res.json(myPost);
    //       break;
    //     case "GET":
            const movies = await db.collection("movies").find({}).limit(40).toArray();
            return NextResponse.json({ status:200, movies:movies });
    //       break;
    //   }
      //const posts = await db.collection("movies").find({}).limit(20).toArray();
     
      //res.json(posts);
    } catch (e:any) {
      console.error(e);
      throw new Error(e).message;
    }
  };
  