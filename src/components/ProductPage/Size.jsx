import {
    Box,
    ToggleButton,
    ToggleButtonGroup,
    Typography
} from "@mui/material";
import styles from "./product.module.css";

const Size = ({
  sizeArray,
  colorArray,
  selectedSize,
  setSelectedSize,
  selectedColor,
  setSelectedColor,
}) => {
  return (
    <Box className={styles.size}>
      <Typography
        className={styles.heading}
        style={{ marginLeft: "2px", marginBottom: "0px", fontSize: "12px" }}
      >
        Select Size
      </Typography>
      <ToggleButtonGroup
        value={selectedSize}
        exclusive
        onChange={(event, newSize) => setSelectedSize(newSize)}
        aria-label="size selection"
        sx={{ flexWrap: "wrap" }}
      >
        {sizeArray.map((item, index) => (
          <ToggleButton
            key={index}
            value={item?.size}
            className={
              item.available ? styles.sizebox : styles.unavailablesizebox
            }
            disabled={!item.available}
          >
            {item?.size}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <Typography
        className={styles.heading}
        style={{
          marginLeft: "2px",
          marginBottom: "0px",
          marginTop: "20px",
          fontSize: "12px",
        }}
      >
        Select Color
      </Typography>
      <ToggleButtonGroup
        value={selectedColor}
        exclusive
        onChange={(event, newColor) => setSelectedColor(newColor)}
        aria-label="color selection"
        sx={{ flexWrap: "wrap" }}
      >
        {colorArray.map((item, index) => (
          <ToggleButton
            key={index}
            value={item?.color}
            sx={{
              fontSize: "12px",
              fontWeight: "400",
              border: "1px solid #0D1A26",
              fontWeight: "900",
              cursor: "pointer",
            }}
          >
            {item.color}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
};

export default Size;
