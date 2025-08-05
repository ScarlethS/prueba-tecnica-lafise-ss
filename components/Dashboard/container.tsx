import React from "react";

interface ContainerProps {
  color?: string;
  title?: string;
  width?: string;
  height?: string;
  children?: React.ReactNode;
}

export const Container = ({
  color,
  title,
  width,
  height,
  children,
}: ContainerProps) => {
  return (
    <div
      className={`${color} ${width} ${height} container mx-auto p-4 pt-0 rounded-xl mb-4`}
    >
      {title && (
        <h2 className="text-[20px] leading-[24px] font-medium mb-4">{title}</h2>
      )}
      <div className="flex flex-row items-center justify-between gap-4">
        {children}
      </div>
    </div>
  );
};
