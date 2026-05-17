"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useUserStore } from "@/store/userStore";
import { Menu, X, Bell, User } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const { user } = useUserStore();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Queue", href: "/queue" },
    { name: "Support", href: "/support" },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-cbe-blue rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">CBE</span>
          </div>
          <span className="font-bold text-lg text-cbe-blue hidden sm:block">Digital Banking</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-cbe-blue",
                pathname === link.href ? "text-cbe-blue" : "text-gray-500"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="text-gray-500 hover:text-cbe-blue">
                <Bell className="h-5 w-5" />
              </Button>
              <Link href="/profile">
                <Button variant="outline" className="rounded-full gap-2 border-cbe-blue text-cbe-blue hover:bg-cbe-blue hover:text-white">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">{user.fullName.split(" ")[0]}</span>
                </Button>
              </Link>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-3">
              <Link href="/login">
                <Button variant="ghost" className="hover:text-cbe-blue">Login</Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-cbe-blue hover:bg-cbe-blueHover text-white">Register</Button>
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "block text-sm font-medium transition-colors hover:text-cbe-blue",
                pathname === link.href ? "text-cbe-blue" : "text-gray-500"
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          {!user && (
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
              <Link href="/login" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full border-cbe-blue text-cbe-blue">Login</Button>
              </Link>
              <Link href="/signup" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-cbe-blue text-white">Register</Button>
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
