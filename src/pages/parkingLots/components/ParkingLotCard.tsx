import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// types
import { FragmentOf } from "@/graphql";

import { ThumbsDown, ThumbsUp } from "lucide-react";
import { ParkingLotsFragment } from "@/graphql/fragments/parkingLot";
import { SummaryViewT } from "@/typing/ParkingLots";

type ParkingLotCardProps = {
  lot: FragmentOf<typeof ParkingLotsFragment> | null;
  handleOnSelectLot: (lot: SummaryViewT) => void;
};

const ParkingLotCard = ({ lot, handleOnSelectLot }: ParkingLotCardProps) => {
  if (!lot) {
    return (
      <div className="justify-center flex flex-col h-screen items-center">
        <span>lot is empty</span>
      </div>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{lot.name}</CardTitle>
        <CardDescription>{lot.status}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-hidden rounded-md mb-5">
          <img
            className="h-auto w-full object-cover transition-all hover:scale-105"
            src={lot.image ?? "https://via.placeholder.com/150"}
            alt="Placeholder"
          />
        </div>

        <div>
          <span className=" text text-primary font-bold">{lot.address}</span>
        </div>
      </CardContent>

      <CardFooter className="gap-4">
        <Button
          variant={"destructive"}
          className=" w-full"
          onClick={() => handleOnSelectLot({ ...lot, type: "bad" })}
        >
          <ThumbsDown className="mr-2 h-4 w-4" />
          Bad
        </Button>
        <Button
          variant={"success"}
          className=" w-full"
          onClick={() => handleOnSelectLot({ ...lot, type: "good" })}
        >
          Good
          <ThumbsUp className="ml-2 h-4 w-4 " />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default React.memo(ParkingLotCard);
