import { Icon, IconProps } from "@tabler/icons-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type Feature = {
    id: number;
    label: string;
    description: string;
    icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
}