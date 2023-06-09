import { Card, CardMedia, Typography } from "@mui/material";
import React from "react";

type Props = {
  data: any;
};

export default function ProductSlideItem({ data }: Props) {
  return (
    <>
      <div className="flex flex-col" key={data.id}>
        <Card sx={{ minWidth: 210, mr: 5, borderRadius: "10px" }}>
          <div className="rounded-lg">
            <CardMedia
              sx={{ height: 306 }}
              image={`${data.imageUrl}`}
              title="green iguana"
              className="hover:shadow-xl"
            />
          </div>
        </Card>
        <Typography variant="body1" className="text-center w-full">
          {data.title}
        </Typography>
      </div>
    </>
  );
}
