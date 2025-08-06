import React from "react";

interface ContainerProps {
  color?: string;
  title?: string;
  children?: React.ReactNode;
}

export const Container = ({ color, title, children }: ContainerProps) => {
  return (
    <div
      className={`${color} container w-full h-auto xl:max-w-[1112.07px] xl:max-h-[256.46px] pt-0 rounded-xl`}
    >
      {title && (
        <h2 className="text-[20px] leading-[24px] font-medium mb-4">{title}</h2>
      )}
      <div className="flex flex-col items-center justify-center gap-4 xl:flex-row xl:items-center xl:justify-between">
        {children}
      </div>
    </div>
  );
};
