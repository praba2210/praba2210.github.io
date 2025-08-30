import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }
    // Here you could add email sending or database logic
    console.log("Contact form submitted:", { name, email, message });
    return NextResponse.json({ success: true, message: "Message received!" });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
