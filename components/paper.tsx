import { ArrowLeftIcon, type LucideIcon } from "lucide-react";
import Link from "next/link";

interface PaperProps {
  children: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: string;
  backTitle?: string;
  backRoute?: string;
  buttonName?: string;
  routeRedirection?: string;
  Icon?: LucideIcon;
  customActions?: React.ReactNode;
}

export const Paper = ({
  children,
  title,
  subtitle,
  backTitle = "",
  backRoute = "..",
}: PaperProps) => {
  return (
    <div className="container mx-auto p-4 pt-0 sm:px-8 rounded-xl">
      <div className="flex flex-col mb-4 sm:mb-8">
        {backTitle && (
          <Link
            href={backRoute}
            className="w-max inline-flex items-center justify-center hover:underline sm:text-sm font-medium py-2 sm:px-3"
          >
            <ArrowLeftIcon className="mr-2 w-4" /> <span>{backTitle}</span>
          </Link>
        )}
        <div>
          <div>
            <h1 className="text-xl sm:text-xl font-medium sm:tracking-tight">
              {title}
            </h1>
            <p className="text-muted-foreground">{subtitle}</p>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};
