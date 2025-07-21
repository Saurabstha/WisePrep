"use client";

import Image from "next/image";
import { useState } from "react";
import { redirect } from "next/navigation";
import { signOut } from "@/lib/actions/auth.action";
import Link from "next/link";

const ClientProfileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLogout = async () => {
    await signOut();
    redirect("/sign-in");
  };

  return (
    <div className="ml-auto relative">
      <Image
        src="/profile.svg"
        alt="Profile"
        width={32}
        height={32}
        className="ml-auto rounded-2xl cursor-pointer"
        onClick={toggleMenu} // Toggle dropdown on click
      />

      {isMenuOpen && (
        <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg w-40">
          <ul className="text-sm text-gray-200 space-y-0">
            {/* Profile option */}
            <li>
              <Link
                href="/profile"
                className="block px-4 text-black hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Profile
              </Link>
            </li>
            {/* Logout option */}
            <li>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ClientProfileMenu;
