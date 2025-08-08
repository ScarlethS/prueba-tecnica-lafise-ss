"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function NavProjects({
  projects,
}: {
  projects: {
    name: string;
    url: string;
    icon: string | LucideIcon;
  }[];
}) {
  const pathname = usePathname();
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden pt-2">
      <SidebarMenu>
        {projects.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton
              asChild
              isActive={
                item.url.length > 1
                  ? pathname.includes(item.url)
                  : pathname === item.url
              }
            >
              <a
                href={item.url}
                className="flex items-center gap-2 py-6 font-medium text-[#272727]"
              >
                {typeof item.icon === "string" ? (
                  <Image
                    src={item.icon}
                    alt={`${item.name} icon`}
                    width={24}
                    height={24}
                    className="size-6"
                  />
                ) : (
                  <item.icon className="size-6" />
                )}

                <span>{item.name}</span>
                <ChevronRight className="ml-auto mr-0" />
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
