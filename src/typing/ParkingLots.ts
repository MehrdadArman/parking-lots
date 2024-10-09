import { ParkingLotsFragment } from "@/graphql/fragments/parkingLot";

import { FragmentOf } from "gql.tada";

type SummaryViewTypeT = "good" | "bad";

export type SummaryViewT = FragmentOf<typeof ParkingLotsFragment> & {
  type: SummaryViewTypeT;
};
