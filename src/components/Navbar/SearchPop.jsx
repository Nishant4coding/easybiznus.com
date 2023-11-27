import { Stack, Typography, Box } from "@mui/material";
import Modal from '@mui/material/Modal';
import styles from './nav.module.css';
import { useRouter } from "next/navigation";
import Navbar from '@/components/Navbar/Navbar';
import Link from "next/link";
import Image from "next/image";
import { Shoe5 } from "@/assets/svg";

const overlayStyle = {
    // backdropFilter: "blur(9px)",
    backgroundColor: "rgba(13, 26, 38, 0.3)",
};

const SearchPop = ({ search, searchPop, handleCloseSearch, handleOpenSearch }) => {
    const router = useRouter();

    return (
        <Modal
            open={searchPop}
            onClose={handleCloseSearch}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
                "& .MuiBackdrop-root": overlayStyle,
                display: "flex",
                alignItems: "flex-start",
            }}
        >
            <Stack className={styles.searchPop}>
                <Navbar search={search} handleOpenSearch={handleOpenSearch} />
                <Stack className={styles.suggest} direction={"row"}>
                    <Column1 list={colArray} heading={"IN TREND"} />
                    <Column2 heading={"RECENTLY VIEWED"} />
                </Stack>
            </Stack>
        </Modal>
    )
}

export default SearchPop;

const Column1 = ({ list, heading }) => {

    return (
        <Stack gap={1}>
            <Typography style={{ fontWeight: '600' }}>{heading}</Typography>
            {
                colArray.map((item, index) => (
                    <Link key={index} href="#">{item}</Link>
                ))
            }
        </Stack>
    )
}


const Column2 = ({ list, heading }) => {

    return (
        <Stack style={{ width: '70%', }} gap={3}>
            <Typography style={{ fontWeight: '600' }}>{heading}</Typography>
            <Stack direction={"row"} gap={5} style={{ flexWrap: 'wrap' }}>
                {
                    searchArray.map((item, index) => (
                        <Link href="#" key={index}>
                        <Stack direction={"row"} gap={4} style={{ width: "400px"}}>
                            <Box sx={{width:'150px', height:'100px'}}>
                            <Image alt="dxcfg" src={Shoe5} style={{width:'100%', height:'100%', objectFit:'cover'}}/>
                            </Box>
                            <Stack gap={2}>
                                <Typography sx={{fontSize:'14px', fontWeight:'600'}}>Clide Prm Unisex Sneakers</Typography>
                                <Typography sx={{color:'#F55E53', fontSize:'13px', fontWeight:'600'}}>₹15,990</Typography>
                            </Stack>
                        </Stack>
                        </Link>
                    ))
                }
            </Stack>
        </Stack>
    )
}

const colArray = [
    "Sneakers",
    "Slides",
    "Football Shoes",
    "Crocs"
]


const searchArray = [
    1, 2, 3, 4
]