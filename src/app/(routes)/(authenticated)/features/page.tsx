import { ActionDialog } from "@/components/pages/dashboard/action-dialog";
import { FeatureCreateForm } from "@/components/pages/dashboard/features/forms/create-form";
import { FeatureDeleteForm } from "@/components/pages/dashboard/features/forms/delete-form";
import { FeatureUpdateForm } from "@/components/pages/dashboard/features/forms/update-form";
import { FeaturesTable } from "@/components/pages/dashboard/features/table";
import { BadgePlusIcon, SquarePenIcon, TrashIcon } from "lucide-react";

export default async function FeaturesPage() {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-2">
        <div className="w-full rounded-lg flex items-center justify-between gap-4 p-4 bg-stone-100 dark:bg-stone-900">
          <ActionDialog
            icon={<BadgePlusIcon />}
            color="info"
            entity="Feature"
            form={<FeatureCreateForm />}
          />
          <ActionDialog
            icon={<SquarePenIcon />}
            color="warning"
            entity="Feature"
            form={<FeatureUpdateForm />}
          />
          <ActionDialog
            icon={<TrashIcon />}
            color="danger"
            entity="Feature"
            form={<FeatureDeleteForm />}
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row sm:flex-1 gap-2">
        <div className="w-full rounded-lg flex items-center justify-around pt-0 p-4 bg-stone-100 dark:bg-stone-900">
          <FeaturesTable />
        </div>
      </div>
    </>
  );
}
