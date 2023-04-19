import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React from "react";

type Props = {
  data: any;
};

export default function ProductSliderItem({ data }: Props) {
  return (
    <Grid item xs={6} md={4} lg={4} sx={{ mt: 2, mb: 4 }}>
      <Card className="w-80 2xl:w-[800px] mr-4">
        <div className="relative">
          <CardMedia
            image={`${data.imgUrl}`}
            title="green iguana"
            className="h-52 2xl:h-96"
          />
          <div className="absolute w-[53px] h-[75px] bg-[#FACF19] top-0 left-0 text-center items-center flex flex-col justify-center">
            <div className="text-center items-center">
              <svg
                width="12"
                height="22"
                viewBox="0 0 12 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 14H0L7 0V8H12L5 22V14Z" fill="black" />
              </svg>
            </div>
            <div className="font-bold">{data.discount}%</div>
          </div>
          <div className="absolute w-[53px] h-[75px] bottom-0 right-0 text-center items-center flex flex-col justify-center">
            <div className="text-center items-center">
              <svg
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5455 27.6928L7.27273 23.5109C6.81212 23.2443 6.45479 22.8869 6.20073 22.4389C5.9457 21.99 5.81818 21.4988 5.81818 20.9655V12.6382C5.81818 12.1049 5.9457 11.6137 6.20073 11.1648C6.45479 10.7168 6.81212 10.3594 7.27273 10.0928L14.5455 5.91094C15.0061 5.64427 15.4909 5.51094 16 5.51094C16.5091 5.51094 16.9939 5.64427 17.4545 5.91094L24.7273 10.0928C25.1879 10.3594 25.5457 10.7168 25.8007 11.1648C26.0548 11.6137 26.1818 12.1049 26.1818 12.6382V20.9655C26.1818 21.4988 26.0548 21.99 25.8007 22.4389C25.5457 22.8869 25.1879 23.2443 24.7273 23.5109L17.4545 27.6928C16.9939 27.9594 16.5091 28.0928 16 28.0928C15.4909 28.0928 15.0061 27.9594 14.5455 27.6928ZM14.5455 24.3473V17.6564L8.72727 14.3109V21.0018L14.5455 24.3473ZM17.4545 24.3473L23.2727 21.0018V14.3109L17.4545 17.6564V24.3473ZM0 7.98366V5.07457C0 3.86245 0.424242 2.83215 1.27273 1.98366C2.12121 1.13518 3.15152 0.710938 4.36364 0.710938H7.27273V3.62003H4.36364C3.95152 3.62003 3.6063 3.75918 3.328 4.03748C3.04873 4.31676 2.90909 4.66245 2.90909 5.07457V7.98366H0ZM4.36364 32.7109C3.15152 32.7109 2.12121 32.2867 1.27273 31.4382C0.424242 30.5897 0 29.5594 0 28.3473V25.4382H2.90909V28.3473C2.90909 28.7594 3.04873 29.1046 3.328 29.3829C3.6063 29.6622 3.95152 29.8018 4.36364 29.8018H7.27273V32.7109H4.36364ZM24.7273 32.7109V29.8018H27.6364C28.0485 29.8018 28.3937 29.6622 28.672 29.3829C28.9513 29.1046 29.0909 28.7594 29.0909 28.3473V25.4382H32V28.3473C32 29.5594 31.5758 30.5897 30.7273 31.4382C29.8788 32.2867 28.8485 32.7109 27.6364 32.7109H24.7273ZM29.0909 7.98366V5.07457C29.0909 4.66245 28.9513 4.31676 28.672 4.03748C28.3937 3.75918 28.0485 3.62003 27.6364 3.62003H24.7273V0.710938H27.6364C28.8485 0.710938 29.8788 1.13518 30.7273 1.98366C31.5758 2.83215 32 3.86245 32 5.07457V7.98366H29.0909ZM16 15.1109L21.8182 11.7655L16 8.42003L10.1818 11.7655L16 15.1109Z"
                  fill="#2D264B"
                />
              </svg>
            </div>
          </div>
        </div>
        <CardContent>
          <CardMedia
            sx={{ height: 52 }}
            image={`/assets/items/setting-1.jpg`}
            title="green iguana"
          />
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <Typography variant="body1" color="text.secondary">
                Madrid
              </Typography>
              <Typography variant="inherit" fontWeight={600} color="red">
                $200.99
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontStyle: "italic" }}
                color="black"
              >
                Black, Metal
              </Typography>
              <Stack spacing={1}>
                <Rating
                  name="half-rating-read"
                  color="black"
                  defaultValue={3}
                  precision={1}
                  readOnly
                />
              </Stack>
            </div>
            <Stack
              direction={"column"}
              justifyContent="center"
              alignItems="center"
            >
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.3338 12.0001V8.00008C21.3338 5.05456 18.946 2.66675 16.0005 2.66675C13.055 2.66675 10.6672 5.05456 10.6672 8.00008V12.0001M4.78985 13.8027L3.98985 22.336C3.76239 24.7623 3.64866 25.9754 4.05125 26.9124C4.40491 27.7356 5.02467 28.4162 5.8112 28.8451C6.70655 29.3334 7.925 29.3334 10.3619 29.3334H21.6391C24.076 29.3334 25.2945 29.3334 26.1898 28.8451C26.9764 28.4162 27.5961 27.7356 27.9498 26.9124C28.3524 25.9754 28.2386 24.7623 28.0112 22.336L27.2112 13.8027C27.0191 11.7539 26.9231 10.7295 26.4623 9.95497C26.0565 9.27286 25.457 8.7269 24.74 8.38654C23.9258 8.00008 22.8969 8.00008 20.8391 8.00008L11.1619 8.00008C9.1041 8.00008 8.07519 8.00008 7.26107 8.38654C6.54407 8.72689 5.94452 9.27286 5.53873 9.95496C5.07797 10.7295 4.98193 11.7539 4.78985 13.8027Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </IconButton>
              <FavoriteBorderIcon />
            </Stack>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
}
