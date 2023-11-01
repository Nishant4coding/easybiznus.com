import { Stack, Typography } from "@mui/material";

const Summary = ({width}) => {
    return (
        <Stack style={{ width: width?width:'70%' }}>
            <Typography style={{ fontSize: '22px', margin: '30px 0 10px 0 ' }}>Order Summary</Typography>
            {
                priceArray.map((item) => (
                    <Stack key={item.title} direction={"row"} style={{ justifyContent: 'space-between', margin:'3px 0' }}>
                        <Typography style={{ fontSize: '14px', fontWeight: 500 }}>{item.title}</Typography>
                        <Typography style={{ fontSize: '14px', fontWeight: 500 }}>{item.price}</Typography>
                    </Stack>
                ))
            }
            <Stack direction={"row"} style={{ justifyContent: 'space-between', margin:'5px 0'  }}>
                <Typography style={{ fontSize: '14px', fontWeight: 500 }}>Grand Total</Typography>
                <Typography style={{ fontSize: '14px', fontWeight: 600 }}>₹12,815</Typography>
            </Stack>
        </Stack>
    )
}

export default Summary;

const priceArray = [
    {
        title: 'Item(s) Subtotal',
        price: '₹ 12,795'
    },
    {
        title: 'Shipping Cost',
        price: '₹ 30'
    },
    {
        title: 'Total',
        price: '₹ 12,825'
    },
    {
        title: 'Discount',
        price: '₹ 15'
    },




]