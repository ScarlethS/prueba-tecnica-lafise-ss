"use client";
import * as React from "react";
import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  ArrowLeftRight,
} from "lucide-react";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";
import logo from "../public/logo.png";
import ExchangeRate from "./Dashboard/exchangeRate";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  projects: [
    {
      name: "Tablero",
      url: "/",
      icon: "/Tablero.png",
    },
    {
      name: "Transferir",
      url: "/transaction",
      icon: ArrowLeftRight,
    },
    {
      name: "Pagar",
      url: " ",
      icon: "/pagar.png",
    },
    {
      name: "Mis transacciones",
      url: "/history",
      icon: "/mistransacciones.png",
    },
    {
      name: "Gestionar",
      url: "",
      icon: "/gestiones.png",
    },
    {
      name: "Cheques",
      url: "",
      icon: "/cheque.png",
    },
    {
      name: "Paganet",
      url: "",
      icon: "/paganet.png",
    },
    {
      name: "Administrar",
      url: "",
      icon: "/mistransacciones.png",
    },
    {
      name: "Ahorro automatico",
      url: "",
      icon: "/ahorro.png",
    },
    {
      name: "Configuración",
      url: "",
      icon: "/config.png",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar();
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center group-data-[state=closed]/collapsible:hidden h-[110px]">
          {state === "expanded" && (
            <Image src={logo} alt="Team Logo" width={290} height={81} />
          )}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
        <div className="group-data-[state=closed]/collapsible:hidden">
          {state === "expanded" && (
            <>
              <ExchangeRate />
              <div className="gap-y-2 py-6">
                <div className="w-[85%] mx-auto border-t-1 pt-5 border-gray-200">
                  {" "}
                </div>
                <p className="text-xs text-center">
                  IP del Servidor: 190.432.574.23
                </p>
                <p className="text-xs text-center">
                  Último acceso: 2021/11/21 13:32:11
                </p>
              </div>
            </>
          )}
        </div>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
