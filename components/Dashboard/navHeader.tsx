"use client";
import React from "react";
import { SearchForm } from "@/components/Dashboard/searchform";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell } from "lucide-react";
import { useDashboardData } from "@/hooks/useDashboardData";

export const NavHeader = () => {
  const { users } = useDashboardData();
  return (
    <>
      <Bell width={20} height={20} />
      <SearchForm className="w-full sm:w-auto" />
      <Avatar className="h-8 w-8 rounded-2xl">
        <AvatarImage
          src={
            users && users[0]?.profile_photo
              ? users[0].profile_photo
              : "https://github.com/shadcn.png"
          }
          alt="test"
        />

        <AvatarFallback className="rounded-lg">test</AvatarFallback>
      </Avatar>
    </>
  );
};
