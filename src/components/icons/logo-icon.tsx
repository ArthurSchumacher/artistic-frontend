import { IconSvgProps } from "@/interfaces";

export const Logo: React.FC<IconSvgProps> = ({
  size = 48,
  width,
  height,
  ...props
}) => (
  <svg
    height={size || height}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="-8 -6 40 40"
    className="bg-black text-white rounded-full lucide lucide-triangle-dashed-icon lucide-triangle-dashed"
    width={size || width}
    {...props}
  >
    <path d="M10.17 4.193a2 2 0 0 1 3.666.013" />
    <path d="M14 21h2" />
    <path d="m15.874 7.743 1 1.732" />
    <path d="m18.849 12.952 1 1.732" />
    <path d="M21.824 18.18a2 2 0 0 1-1.835 2.824" />
    <path d="M4.024 21a2 2 0 0 1-1.839-2.839" />
    <path d="m5.136 12.952-1 1.732" />
    <path d="M8 21h2" />
    <path d="m8.102 7.743-1 1.732" />
  </svg>
);