import { Stack } from "@mui/material";
import styles from './order.module.css';
import Card from "../CardE/Card";
import { Shoe3, Shoe4 } from "@/assets/svg/index";

const Container = ()=>{
    return(
        <Stack className={styles.container}>
            {
                cardArray.map((item,index)=>(
                    <Card data={item} key={index}/>
                ))
            }
        </Stack>
    )
}

export default Container;

const cardArray=[
    {
        id:"OD123456789",
        image:Shoe3,
        title:"Nike Kiger 9",
        color:"Orange",
        price:"12,795",
        status:0,
        date:"July 19"
    },
    {
        id:"OD123456123",
        image:Shoe4,
        title:"Nike Pegasus 40 Premium",
        color:"White",
        price:"12,795",
        status:1,
        date:"July 19"
    },
    {
        id:"OD123456124",
        image:Shoe4,
        title:"Nike Pegasus 40 Premium",
        color:"White",
        price:"12,795",
        status:1,
        date:"July 19"
    },
    {
        id:"OD123456125",
        image:Shoe4,
        title:"Nike Pegasus 40 Premium",
        color:"White",
        price:"12,795",
        status:1,
        date:"July 19"
    },
    {
        id:"OD123456126",
        image:Shoe4,
        title:"Nike Pegasus 40 Premium",
        color:"White",
        price:"12,795",
        status:1,
        date:"July 19"
    },
    {
        id:"OD123456127",
        image:Shoe4,
        title:"Nike Pegasus 40 Premium",
        color:"White",
        price:"12,795",
        status:1,
        date:"July 19"
    }
]