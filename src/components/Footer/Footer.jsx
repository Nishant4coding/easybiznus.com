import { Box, Stack } from "@mui/material";
import styles from './footer.module.css';
import QuickLink from "./Quick";
import About from "./About";
import Help from "./Help";
import Logo from "./Logo";


const Footer = () => {
    return (
        <Stack direction={"row"} className={styles.footer}>
            <Stack direction={'column'} gap={6} className={styles.quickAbout}>
                <QuickLink />
                <About />
            </Stack>
            <Box className={styles.help}>
                <Help />
            </Box>
            <Box sx={{ height: "100%", display:'flex', alignItems:'center'}}>
                <Logo />
            </Box>
        </Stack>
    )
}

export default Footer;