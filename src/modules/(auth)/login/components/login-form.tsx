"use client";

import { Eye, EyeOff, GalleryVerticalEnd } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import useTogglePassword from "@/hooks/useTogglePassword";
import { loginWithGoogle } from "../actions/auth-actions";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { showPassword, handleTogglePassword } = useTogglePassword();

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form>
        <FieldGroup>
          <div className="flex flex-col items-center gap-2 text-center">
            <Link
              href="#"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex size-8 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-6" />
              </div>
              <span className="sr-only">PublishX</span>
            </Link>
            <h1 className="text-xl font-bold">Welcome to PublishX</h1>
            <FieldDescription>
              Don&apos;t have an account? <Link href="/signup">Sign up</Link>
            </FieldDescription>
          </div>
          {/* Email */}
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </Field>
          {/* Password */}
          <Field>
            <div className="flex justify-between items-center">
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Link href={"/forgot-password"} className="text-sm underline">
                Forgot Password?
              </Link>
            </div>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                required
              />
              {showPassword ? (
                <EyeOff
                  className="absolute top-2 right-2 cursor-pointer"
                  size={20}
                  onClick={handleTogglePassword}
                />
              ) : (
                <Eye
                  className="absolute top-2 right-2 cursor-pointer"
                  size={20}
                  onClick={handleTogglePassword}
                />
              )}
            </div>
          </Field>
          <Field>
            <Button type="submit">Login</Button>
          </Field>
        </FieldGroup>
      </form>
      <FieldSeparator>Or</FieldSeparator>
      <form>
        <Field
        // className="grid gap-4 sm:grid-cols-2"
        >
          <Button variant="outline" type="submit" formAction={loginWithGoogle}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                fill="currentColor"
              />
            </svg>
            Google
          </Button>
          {/* <Button variant="outline" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="currentColor"
            >
              <path d="M20.447 20.452h-3.558v-5.569c0-1.327-.028-3.036-1.849-3.036-1.85 0-2.132 1.444-2.132 2.939v5.666H9.351V9h3.415v1.561h.049c.476-.899 1.637-1.849 3.369-1.849 3.601 0 4.265 2.37 4.265 5.456v6.284zm-16.451-12.42c-1.144 0-2.072-.929-2.072-2.072s.928-2.072 2.072-2.072c1.143 0 2.072.929 2.072 2.072-.001 1.143-.929 2.072-2.072 2.072zm1.779 12.42H2.219V9h3.557v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.225 0z" />
            </svg>
            LinkedIn
          </Button> */}
        </Field>
      </form>

      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our{" "}
        <Link href="#">Terms of Service</Link> and{" "}
        <Link href="#">Privacy Policy</Link>.
      </FieldDescription>
    </div>
  );
}
