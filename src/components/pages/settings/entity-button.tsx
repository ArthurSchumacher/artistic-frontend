import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer/drawer";
import { Button } from "@/components/ui/form/button";
import { EntityCounter } from "../dashboard/entity-counter";
import { cn } from "@/lib/utils";
import { ActionDialog } from "./action-dialog";
import { FilePenLine, Minus, Plus } from "lucide-react";
import React from "react";

interface EntityButtonProps {
  entity_label: string;
  entity_counter: number;
  className?: string;
  handleCreate: React.ReactElement;
  handleUpdate: React.ReactElement;
  handleDelete: React.ReactElement;
}

export const EntityButton = ({
  entity_label,
  entity_counter,
  className,
  handleCreate,
  handleUpdate,
  handleDelete,
}: EntityButtonProps) => {
  return (
    <Drawer>
      <DrawerTrigger
        className={cn(
          "h-20 w-full rounded-lg flex items-center justify-around bg-stone-100 dark:bg-stone-900 cursor-pointer",
          className
        )}
      >
        <EntityCounter
          entity_label={entity_label}
          entity_count={entity_counter}
        />
      </DrawerTrigger>
      <DrawerContent className="bg-stone-50 dark:bg-stone-800">
        <DrawerHeader>
          <DrawerTitle>Create, Update or Delete</DrawerTitle>
        </DrawerHeader>

        <div className="flex w-full items-center gap-4 justify-between p-4">
          <ActionDialog
            icon={<Plus />}
            color="info"
            entity={entity_label}
            form={handleCreate}
          />
          <ActionDialog
            icon={<FilePenLine />}
            color="warning"
            entity={entity_label}
            form={handleUpdate}
          />
          <ActionDialog
            icon={<Minus />}
            color="danger"
            entity={entity_label}
            form={handleDelete}
          />
        </div>

        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
