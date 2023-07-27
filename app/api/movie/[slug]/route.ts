import { ObjectId } from "mongodb";
import clientPromise from "../../../lib/mongodb";
import { NextResponse } from 'next/server';


export async function GET(req: any , { params, }: { params: { slug: string } },) {
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
            const  slug  = params.slug;  
            console.log(JSON.stringify(slug + "slug comes here"));
            const movie = await db.collection("movies").find({ _id : new ObjectId(slug) }).limit(1).toArray();
            return NextResponse.json({ status:200, movies:movie });
    //       break;
    //   }
      //const posts = await db.collection("movies").find({}).limit(20).toArray();
     
      //res.json(posts);
    } catch (e:any) {
      console.error(e);
      throw new Error(e).message;
    }
  };
  