"use client";

import { useState } from "react";
import { TogglePassword } from "@/types/types";

const useTogglePassword = (): TogglePassword => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleTogglePassword = (): void => {
    setShowPassword(!showPassword);
  };

  return { showPassword, handleTogglePassword };
};

export default useTogglePassword;
