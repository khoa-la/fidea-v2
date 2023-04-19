import React from "react";
import { productFilterSlides } from "../constants";
import ProductSlideItem from "./ProductSlideItem";
import { Card, CardMedia, Typography } from "@mui/material";

export default function ProductSlide() {
  return (
    <>
      <h2 className="text-center py-4 text-xl font-light">SHOP BY CATEGORY</h2>
      <div className="w-full flex flex-nowrap overflow-hidden overflow-x-scroll">
        {productFilterSlides?.map((data, index) => (
          <ProductSlideItem data={data} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <div className="bg-[#EDE9DC] p-8 flex rounded-3xl items-center justify-center">
          <div className="flex flex-col">
            <Card className="w-32 h-32 mr-3 rounded-xl">
              <div className="rounded-lg">
                <CardMedia
                  sx={{ height: 306 }}
                  image={`/assets/items/color-1.png`}
                  title="green iguana"
                  className="hover:shadow-xl"
                />
              </div>
            </Card>
            <Typography
              variant="body1"
              sx={{ textAlign: "center", width: 110 }}
            >
              Grey
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}
