import { Card, CardMedia } from "@mui/material";
import React from "react";

type Props = {
  data: any;
};

export default function TipSlideItem({ data }: Props) {
  return (
    <div className="flex flex-col pr-3">
      <Card className="rounded-xl min-w-[210px] md:min-w-[300px] mr-3">
        <div className="rounded-lg relative flex flex-col items-center justify-center">
          <CardMedia
            image={`${data.imgUrl}`}
            title="green iguana"
            className="hover:shadow-xl h-96 w-full"
          />
          <div className="absolute w-full h-[75px] text-center items-center flex flex-col justify-center">
            <h3 className="text-center text-white text-base md:text-lg font-bold items-center">
              {data.title}
            </h3>
          </div>
        </div>
      </Card>
    </div>
  );
}
