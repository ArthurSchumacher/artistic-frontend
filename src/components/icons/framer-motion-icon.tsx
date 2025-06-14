import { IconSvgProps } from "@/interfaces";

export const FramerMotionIcon: React.FC<IconSvgProps> = ({
  size = 32,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size || width}
      height={size || height}
      {...props}
    >
      <path d="M12 12l-8 -8v16l16 -16v16l-4 -4"></path>
      <path d="M20 12l-8 8l-4 -4"></path>
    </svg>
  );
};
