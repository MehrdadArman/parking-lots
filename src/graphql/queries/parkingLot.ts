import { graphql } from "@/graphql";
import { ParkingLotsFragment } from "../fragments/parkingLot";

export const GET_All_PARKING_LOTS_QUERY = graphql(
  `
    query getAllParkingLots($offset: Int!, $limit: Int!) {
      getAllParkingLots(offset: $offset, limit: $limit) {
        id
        ...ParkingLotsFields
      }
    }
  `,
  [ParkingLotsFragment]
);
