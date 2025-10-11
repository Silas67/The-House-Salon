import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"


export async function POST (req){
    try {
        const body = await req.json();
        const {name, email, phone, service, date, time, message} = body;

        if(!name || !email || !phone || !service || !date || !time || !message){
            return NextResponse.json(
                {error:"All required fields must be filled"},
                {status: 400}
            )
        }

        const booking = await prisma.booking.create({
            data: {name, email, phone, service, date:new Date(date), time, message},
        });
        return NextResponse.json(booking, {status:201});
        
    } catch (error) {
        console.error(error);
        return NextResponse.json({error: "Something Dey Sup", details: error.message}, {status: 500})
    }
}

export async function GET(){
    try {
        const bookings = await prisma.booking.findMany({
            orderBy: {createdAt: "desc"}
        });
        return NextResponse.json(bookings);
    } catch (error) {
        return NextResponse.json({error: "Omo The ting no gree fetch oo"}, {status: 500})
    }
}