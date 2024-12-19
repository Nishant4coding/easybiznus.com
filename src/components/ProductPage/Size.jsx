import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useEffect, useMemo } from "react";
import styles from "./product.module.css";

const Size = ({
  sizeArray,
  colorArray,
  selectedSize,
  setSelectedSize,
  selectedColor,
  setSelectedColor,
  sellerVariants,
}) => {
  const availableSizes = useMemo(() => {
    return sizeArray.map((size) => ({
      ...size,
      available: sellerVariants.some(
        (variant) =>
          variant.size === size.size &&
          (!selectedColor || variant.color === selectedColor)
      ),
    }));
  }, [selectedColor, sizeArray, sellerVariants]);

  const availableColors = useMemo(() => {
    return colorArray.map((color) => ({
      ...color,
      available: sellerVariants.some(
        (variant) =>
          variant.size === selectedSize && variant.color === color.color
      ),
    }));
  }, [selectedSize, colorArray, sellerVariants]);

  useEffect(() => {
    if (
      availableColors.length > 0 &&
      !availableColors.some((c) => c.color === selectedColor && c.available)
    ) {
      const firstAvailableColor = availableColors.find((c) => c.available);
      if (firstAvailableColor) {
        setSelectedColor(firstAvailableColor.color);
      }
    }
  }, [availableColors, selectedColor, setSelectedColor]);
  return (
    <Box className={styles.size}>
      {/* Size Selection */}
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
      >
        {availableSizes.map((item, index) => (
          <ToggleButton
            key={index}
            value={item?.size}
            sx={{
              fontSize: "12px",
              gap: "5px",
              fontWeight: "400",
              border: "1px solid #0D1A26",
              fontWeight: "900",
              cursor: "pointer",
              margin: "5px",
            }}
            // disabled={!item.available}
          >
            {item?.size}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

      {/* Color Selection */}
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
        {availableColors.map((item, index) => (
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
            disabled={!item.available}
          >
            {item.color}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
};

export default Size;
