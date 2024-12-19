import { Stack, Typography, Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import { IonIcon } from "@ionic/react";
import { closeOutline } from "ionicons/icons";
import Image from "next/image";
import { Logo, OrderPlaced } from "@/assets/svg";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const overlayStyle = {
  backdropFilter: "blur(9px)",
  backgroundColor: "rgba(13, 26, 38, 0.41)",
};

const PlacedPopup = ({ open, handleClose }) => {
  const router = useRouter();

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        handleClose();
        router.push("/orders");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [handleClose, open, router]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        "& .MuiBackdrop-root": overlayStyle,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack
        sx={{
          backgroundColor: "#0D1A26",
          padding: { xs: "20px 30px", md: "30px 180px" }, // Responsive padding
          width: "max-content",
          outline: "none",
          borderRadius: "5px",
          position: "relative",
          alignItems: "center",
        }}
        gap={5}
      >
        <IonIcon
          icon={closeOutline}
          style={{
            position: "absolute",
            right: "5px",
            top: "5px",
            cursor: "pointer",
            color: "#fff",
          }}
          onClick={handleClose}
        />
        <Image src={Logo} alt="Logo" />
        <Image src={OrderPlaced} alt="Order Placed" width={200} />
      </Stack>
    </Modal>
  );
};

export default PlacedPopup;
