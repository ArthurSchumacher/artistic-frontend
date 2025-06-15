// components/ui/dialog/data-dialog.tsx
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog/dialog";
import { cn } from "@/lib/utils";
import { title } from "@/components/primitives";
import { DataTable } from "@/components/ui/table/data-table";
import { ReactNode } from "react";

interface DataDialogProps<TData> {
  triggerIcon: ReactNode;
  dialogTitle: string;
  dialogDescription: string;
  data: TData[];
  columns: any;
  filterBy?: string;
}

export const DataDialog = <TData,>({
  triggerIcon,
  dialogTitle,
  dialogDescription,
  data,
  columns,
  filterBy = "label",
}: DataDialogProps<TData>) => {
  return (
    <Dialog>
      <DialogTrigger className="p-2 rounded-lg cursor-pointer bg-stone-950 text-stone-50">
        {triggerIcon}
      </DialogTrigger>
      <DialogContent className="w-full max-w-sm md:max-w-2xl lg:max-w-3xl max-h-[80vh] p-6 overflow-x-scroll sm:overflow-x-hidden">
        <DialogHeader>
          <DialogTitle className={cn(title({ size: "sm" }), "font-light")}>
            {dialogTitle}
          </DialogTitle>
          <DialogDescription>{dialogDescription}</DialogDescription>
        </DialogHeader>
        <DataTable columns={columns} data={data} filterBy={filterBy} />
      </DialogContent>
    </Dialog>
  );
};
