import { dbConnect } from "@/db";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        await dbConnect();
        const {code} = await req.json();
        
    } catch (error) {
        
    }
}