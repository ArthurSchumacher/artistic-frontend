"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown/dropdown-menu";
import { Button } from "@/components/ui/form/button";
import { Checkbox } from "@/components/ui/form/checkbox";
import { truncateText } from "@/lib/truncate-text";
import { MinimalFeature } from "@/types/feature/get-feature";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

export const featuresColumns: ColumnDef<MinimalFeature>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "label",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Label
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div>
          {truncateText(row.getValue("label"), 4)}
        </div>
      );
    },
  },
  {
    accessorKey: "description",
    header: () => <div className="text-right">Quote</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium">
          {truncateText(row.getValue("description"), 6)}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const feature = row.original;

      return (
        <div className="flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() =>
                  navigator.clipboard.writeText(feature.id.toString())
                }
              >
                Copy feature ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View feature</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
