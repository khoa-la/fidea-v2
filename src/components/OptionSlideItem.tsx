import { Card, CardMedia } from "@mui/material";
import React from "react";

type Props = {
  data: any;
};

export default function OptionSlideItem({ data }: Props) {
  return (
    <div className="flex flex-col pr-3">
      <Card className="w-24 h-24 rounded-xl">
        <div className="rounded-lg">
          <CardMedia
            image={`${data.imgUrl}`}
            title="green iguana"
            className="hover:shadow-xl h-64"
          />
        </div>
      </Card>
      <p className="text-center w-full">{data.description}</p>
    </div>
  );
}
