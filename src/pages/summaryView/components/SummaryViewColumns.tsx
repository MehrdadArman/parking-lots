import { SummaryViewT } from "@/typing/ParkingLots";
import { ColumnDef } from "@tanstack/react-table";

export const summaryViewColumns: ColumnDef<SummaryViewT>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      return (
        <div className="min-w-[150px]">
          <img
            className="h-20 w-20 object-cover rounded transition-all hover:scale-105"
            src={row.getValue("image") ?? "https://via.placeholder.com/150"}
            alt={row.getValue("name")}
          />
        </div>
      );
    },
    enableColumnFilter: false,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="min-w-[150px]">{row.getValue("name")}</div>
    ),
  },

  {
    accessorKey: "address",
    header: "Address",
    cell: ({ row }) => (
      <div className="min-w-[150px]">{row.getValue("address")}</div>
    ),
  },

  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => {
      const type = row.getValue("type");
      return (
        <div className="min-w-[150px]">
          {type === "good" ? (
            <span className="px-2 py-1 bg-green-500 text-white rounded min-w-30">
              Good
            </span>
          ) : (
            <span className="px-2 py-1 bg-red-500 text-white rounded min-w-30">
              Bad
            </span>
          )}
        </div>
      );
    },
  },
];
