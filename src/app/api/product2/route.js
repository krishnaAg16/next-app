import { NextResponse } from "next/server";

// export default async function handler(req, res) {
//     // Get the list of users from the database
//     const users = await db.getUsers();
  
//     // Send the list of users back to the client
//     res.json(users);
//   }

  export async function GET(request) {
    // Do whatever you want
    return NextResponse.json({ message: "Hello World" }, { status: 200 });
  }