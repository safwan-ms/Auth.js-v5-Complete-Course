"use server";

import { connectDB } from "@/lib/db";
import { User } from "@/models/User";
import { hash } from "bcryptjs";
import { redirect } from "next/navigation";

const register = async (formData: FormData) => {
  const firstName = formData.get("firstname");
  const lastName = formData.get("lastname");
  const email = formData.get("email");
  const password = formData.get("password");

  if (
    typeof firstName !== "string" ||
    typeof lastName !== "string" ||
    typeof email !== "string" ||
    typeof password !== "string"
  ) {
    throw new Error("Invalid form data");
  }

  await connectDB();

  if (!firstName || !lastName || !email || !password) {
    throw new Error("Please fill all the fields");
  }

  await connectDB();

  //existing User
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("User already exists");

  const hashedPassword = await hash(password, 10);

  await User.create({ firstName, lastName, email, password: hashedPassword });
  console.log("User created successfully🥂");
  redirect("/login");
};
export { register };
