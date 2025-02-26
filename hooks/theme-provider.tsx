"use client";

import { ThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes";

export default function NextThemesProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableColorScheme
      disableTransitionOnChange={false}
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
}
