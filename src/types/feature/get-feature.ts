import { Icon, IconProps } from "@tabler/icons-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { JSX } from "react";

export type Feature = {
    id: number;
    label: string;
    description: string;
    icon?: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
    skeleton?: JSX.Element;
    className?: string;
}

export type MinimalFeature = {
    id: number;
    label: string;
    description: string;
};
