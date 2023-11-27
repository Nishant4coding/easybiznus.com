import { Switch } from "@mui/material";
import { styled } from "@mui/material/styles";


export const StyledSwitch = styled(Switch)(({ theme, wd, ht, twd, tht }) => ({
    width: wd ? wd : 35,
    height: ht ? ht : 18,
    padding: '1px',
    display: "flex",
    "&:active": {
        "& .MuiSwitch-thumb": {
            width: 17
        }
    },
    "& .MuiSwitch-switchBase": {
        padding: "1px 0px",
        "&.Mui-checked": {
            transform: "translateX(18px)",
            color: "green",
            "& + .MuiSwitch-track": {
                opacity: 1,
                backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff"
            }
        }
    },
    "& .MuiSwitch-thumb": {
        width: twd?twd:16,
        height: tht?tht:16,
        backgroundColor:"#000",
        borderRadius: 10,
        transition: theme.transitions.create(["width"], {
            duration: 200
        })
    },
    "& .MuiSwitch-track": {
        boxShadow: "inset 0px 2px 4px 0px rgb(0,0,0,0.3)",
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor:"#D9D9D9",
        boxSizing: "border-box"
    }
}));