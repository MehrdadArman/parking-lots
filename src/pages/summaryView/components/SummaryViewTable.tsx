import { DataTable } from "@/components/tables/DataTable";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ReactNode } from "react";
import { summaryViewColumns } from "./SummaryViewColumns";

// types
import { SummaryViewT } from "@/typing/ParkingLots";

type SummaryViewTablePropsT = {
  data: SummaryViewT[];
};

const SummaryViewTable = ({ data }: SummaryViewTablePropsT): ReactNode => {
  return (
    <Card className="w-100">
      <CardHeader>
        <CardTitle>Summary view</CardTitle>
        <CardDescription>list of summary</CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable
          data={data}
          columns={summaryViewColumns}
          filterInputKey={"name"}
        />
      </CardContent>
    </Card>
  );
};

export default SummaryViewTable;
