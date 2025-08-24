"use server";

import { connectDB } from "../../lib/mongodb";
import Message from "../../models/Message";

export async function saveMessage(formData) {
  try {
    await connectDB();

    const newMsg = await Message.create({
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    });

    return { success: true, data: newMsg };
  } catch (error) {
    console.error("❌ Error saving message:", error);
    return { success: false, error: "Failed to save message" };
  }
}
