"use server";

import { signIn, signOut } from "@/auth";

export async function loginWithGoogle() {
  return signIn("google");
}

export async function logout() {
  await signOut();
}
