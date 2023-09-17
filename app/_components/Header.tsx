"use client";

import { UserButton, useUser, OrganizationSwitcher } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface NavbarProps {
  title: string;
}

const Navbar = ({ title }: NavbarProps) => {
  const { isSignedIn } = useUser();
  const router = useRouter();

  return (
    <nav className="navbar bg-base-100 h-12">
      <div className="flex-1">
        <Link
          about="Back to home."
          href="/"
          className="btn btn-ghost normal-case text-xl"
        >
          <span className="hidden md:inline-flex">{title}</span>
        </Link>
      </div>

      {isSignedIn ? (
        <UserButton afterSignOutUrl="/" userProfileMode="modal" />
      ) : (
        <button
          className="btn btn-primary"
          onClick={() => void router.push("/sign-in")}
        >
          Sign In
        </button>
      )}
    </nav>
  );
};

export default Navbar;
