import { graphql } from "@/graphql";

export const ParkingLotsFragment = graphql(
  `
    fragment ParkingLotsFields on Lot @_unmask {
      id
      name
      address
      image
      status
    }
  `
);
