import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Contact Form Submitted:", body);

    // TODO: VERIFY BEFORE PUBLISH - integrate with actual email service like Resend or Nodemailer

    return NextResponse.json({ success: true, message: "Pesan berhasil terkirim" });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Terjadi kesalahan dalam memproses formulir" },
      { status: 400 }
    );
  }
}
