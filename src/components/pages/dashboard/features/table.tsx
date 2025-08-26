"use client";

import { DataTable } from "@/components/ui/table/data-table";
import { featuresColumns } from "./columns";
import { features, homeFeatures, securityFeatures } from "@/data/features";
import { MinimalFeature } from "@/types/feature/get-feature";

export const FeaturesTable = () => {
  const minimalFeatures: MinimalFeature[] = [
    ...features,
    ...homeFeatures,
    ...securityFeatures,
  ].map(({ id, label, description }) => ({ id, label, description }));

  return (
    <DataTable
      columns={featuresColumns}
      data={minimalFeatures}
      filterBy="label"
    />
  );
};
