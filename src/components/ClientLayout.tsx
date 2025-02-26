"use client";
import { useState } from "react";
import SideMenu from "@/components/SideMenu";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <SideMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div
        className={`transition-all duration-300 ${
          isMenuOpen ? "md:ml-64" : "md:ml-0"
        }`}
      >
        {children}
      </div>
    </>
  );
}
