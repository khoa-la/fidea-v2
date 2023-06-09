import { Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  data: any;
};

export default function RoomSlideItem({ data }: Props) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="flex flex-col"
        key={data.id}
        onClick={() => navigate(`${data.url}`)}
      >
        <Card className="rounded-xl min-w-[210px] md:min-w-[300px] mr-3">
          <div className="rounded-lg">
            <CardMedia
              image={`${data.imgUrl}`}
              title="green iguana"
              className="hover:shadow-xl h-72 md:h-80"
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
