import { JSX } from "react";

export type HomeFeature = {
    id: number;
    label: string;
    description: string;
    skeleton: JSX.Element;
    className: string;
}