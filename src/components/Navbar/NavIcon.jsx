import { Box, Badge } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { Avatar, Cart, Heart } from '@/assets/svg/index';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { useRouter } from 'next/navigation';

const theme = createTheme({
    palette: {
        primary: {
            main: "#F55E53"
        }
    }
})


const NavIcon = ({handleOpen, userMenu}) => {
    const router=useRouter();

    return (
        <Box sx={{height:'100%', display: "flex", gap: "25px", alignItems: "center",}}>
            {
                iconArray.map((icon, index) => (
                    <Box sx={{height:'100%', width:'fit-content', cursor:"pointer", padding:"0 10px",}} key={index} onClick={()=>{
                        icon.path?router.push(icon.path):null;
                        if(index===2&&userMenu===false){
                            handleOpen();
                        }
                    }}>
                        {icon.number ?
                            <ThemeProvider theme={theme}>
                                <Badge badgeContent={icon.number} color="primary" sx={{
                                    '& .MuiBadge-badge': {
                                        minWidth:"auto",
                                        height:"auto",
                                        padding:"2px 3px 0 3px",
                                        fontSize:"9px"
                                    },
                                }}>
                                    <Image src={icon.title} alt={"cart"} width={15}></Image>
                                </Badge>
                            </ThemeProvider> :
                            <Image src={icon.title} alt={"cart"} width={15}></Image>
                        }
                    </Box>
                ))
            }
        </Box>
    )
}

export default NavIcon;

const iconArray = [
    {
        title: Heart,
        path: "/wishlist",
        number: 0
    },
    {
        title: Cart,
        path: "/cart",
        number: 1
    },
    {
        title: Avatar,
        number: 0
    }
]