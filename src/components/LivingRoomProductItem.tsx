import {
  Alert,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Rating,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

type Props = {
  data?: any;
  key?: number;
};

export default function LivingRoomProductItem({ data, key }: Props) {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };

  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleAddToCart = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <Grid item xs={6} md={6} lg={4} sx={{ mt: 2, mb: 4 }} key={key}>
        <Card className="w-80 lg:w-full mr-4">
          <div className="relative">
            <CardMedia
              image={`${data.imgUrl}`}
              title="green iguana"
              className="h-52 2xl:h-96"
            />
          </div>
          <CardContent>
            <div className="flex items-center justify-between w-full">
              <Typography variant="body1" color="text.secondary">
                {data.title}
              </Typography>
              <img src={`${data.brand}`} className="w-16" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <Typography variant="inherit" fontWeight={600} color="red">
                  {data.description}
                </Typography>
                <Stack spacing={1} direction={"row"}>
                  <Rating
                    name="half-rating-read"
                    color="black"
                    defaultValue={3}
                    precision={1}
                    readOnly
                  />
                  <span>({data.stars})</span>
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
                  onClick={handleAddToCart}
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
                <IconButton
                  color="default"
                  aria-label="upload picture"
                  component="label"
                  onClick={handleLike}
                >
                  {like ? (
                    <FavoriteIcon color="error" />
                  ) : (
                    <FavoriteBorderIcon />
                  )}
                </IconButton>
              </Stack>
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={openSnackbar}
        onClose={handleCloseSnackbar}
        key={data.id}
        sx={{ zIndex: 9999, mt: 10 }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Add to cart successfully!
        </Alert>
      </Snackbar>
    </>
  );
}
