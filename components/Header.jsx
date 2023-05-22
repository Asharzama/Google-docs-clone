import React from "react";
import { IconButton } from "@material-tailwind/react";
import DescriptionIcon from "@mui/icons-material/Description";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import Image from "next/image";
import { signOut } from "next-auth/react";

const Header = () => {
  return (
    <header className="sticky top-0 flex items-center z-50 px-4 py-2 shadow-md bg-white">
      <IconButton
        color="gray"
        variant="text"
        className="hidden md:inline-flex h-20 w-20 border-0"
      >
        <MenuIcon />
      </IconButton>
      <DescriptionIcon color="primary" />
      <h1 className="hidden md:inline-flex ml-2 text-gray-700">Docs</h1>
      <div className="mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:shadow-md">
        <SearchIcon color="action" />
        <input
          type="text"
          placeholder="Search"
          className="flex-grow px-5 bg-transparent outline-none"
        />
      </div>
      <IconButton
        color="gray"
        variant="text"
        className="hidden md:inline-flex ml-5 md:ml-20 h-20 w-20 border-0"
      >
        <AppsIcon />
      </IconButton>
      <Image
        src="/image/user.png"
        alt=""
        height={48}
        width={48}
        className="rounded-full ml-2 cursor-pointer"
        onClick={() => signOut()}
      />
    </header>
  );
};

export default Header;
