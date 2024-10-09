import { useQuery } from "@apollo/client";

import { GET_All_PARKING_LOTS_QUERY } from "@/graphql/queries";

export const useFetchParkingLots = (offset: number = 0, limit: number = 5) => {
  const { data, loading, error, fetchMore } = useQuery(
    GET_All_PARKING_LOTS_QUERY,
    {
      variables: { offset, limit },
    }
  );

  const fetchMoreParkingLots = (offset: number) => {
    if (!data?.getAllParkingLots) return;
    fetchMore({
      variables: {
        offset: offset, // Update offset to fetch the next batch
        limit,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return previousResult; // If there's no more data, return previous

        return {
          ...previousResult,
          getAllParkingLots: fetchMoreResult.getAllParkingLots,
        };
      },
    });
  };

  return {
    parkingLots: data?.getAllParkingLots || [],
    loading,
    error,
    fetchMoreParkingLots,
  };
};
