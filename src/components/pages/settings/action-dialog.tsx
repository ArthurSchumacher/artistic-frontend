import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog/dialog";
import { cn } from "@/lib/utils";
import React from "react";

interface ActionDialogProps {
  icon: React.ReactElement;
  color: "info" | "warning" | "danger";
  entity: string;
  form: React.ReactElement;
}

export const ActionDialog = ({ icon, color, entity, form }: ActionDialogProps) => {
  const colorClasses = {
    info: "bg-sky-600",
    warning: "bg-yellow-600",
    danger: "bg-pink-600",
  };

  const titles = {
    info: `Create more ${entity}`,
    warning: `Update some ${entity}`,
    danger: `Delete some ${entity}`,
  };

  const subtitles = {
    info: `This action can be undone. This will permanently create your ${entity} from our servers.`,
    warning: `This action can be undone. This will permanently update your ${entity} from our servers.`,
    danger: `This action cannot be undone. This will permanently delete your ${entity} and remove your data from our servers.`,
  };

  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          "flex h-20 w-full items-center justify-center rounded-md text-white shadow-md hover:opacity-90 transition-colors cursor-pointer",
          colorClasses[color]
        )}
      >
        {icon}
      </DialogTrigger>
      <DialogContent className="bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700">
        <DialogHeader>
          <DialogTitle>{titles[color]}</DialogTitle>
          <DialogDescription>{subtitles[color]}</DialogDescription>
        </DialogHeader>

        {form}
      </DialogContent>
    </Dialog>
  );
};
