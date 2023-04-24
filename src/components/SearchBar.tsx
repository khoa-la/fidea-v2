import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";

export default function SearchBar() {
  return (
    <div>
      <TextField
        sx={{
          borderRadius: "30px",
          [`& fieldset`]: {
            borderRadius: "9999px",
          },
          height: 48,
          // width: 440,
          // minWidth: 250,
        }}
        className="xl:w-[500px] 2xl:w-[500px] bg-white "
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <PhotoCameraOutlinedIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}
