"use client";

import { Eye, EyeOff, GalleryVerticalEnd } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import useTogglePassword from "@/hooks/useTogglePassword";

export function ResetPasswordForm({
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
              href="/"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex size-8 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-6" />
              </div>
              <span className="sr-only">PublishX</span>
            </Link>
            <h1 className="text-xl font-bold">Forgot Password?</h1>
            <FieldDescription>
              Enter your email to get reset password link
            </FieldDescription>
          </div>
          {/* Email */}
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
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
            <Button type="submit">Reset password</Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}
