import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { productItems } from "../constants";

export default function Product() {
  const [page, setPage] = useState(productItems[0].metadata.page);
  const [datas, setDatas] = useState(productItems[page - 1].data);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  useEffect(() => {
    setDatas(productItems[page - 1].data);
  }, [page, datas]);
  return (
    <>
      <h2 className="text-center py-4 text-3xl">Popular Products</h2>
      <Box
        component={"div"}
        className="hidden md:flex my-1 justify-between items-center h-[1350px] lg:h-[950px] 2xl:h-[1250px]"
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {datas?.map((data, index) => (
            <ProductItem data={data} key={index} />
          ))}
        </Grid>
      </Box>
      <Stack spacing={2} className="hidden md:flex items-center pb-2">
        <Pagination
          count={productItems.length}
          page={page}
          onChange={handleChange}
          className="hidden md:flex"
        />
      </Stack>
      <div className="w-full md:hidden flex flex-nowrap overflow-hidden overflow-x-scroll">
        {datas?.map((data, index) => (
          <ProductItem data={data} key={index} />
        ))}
      </div>
    </>
  );
}
