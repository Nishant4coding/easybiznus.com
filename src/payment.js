// import React from "react";
// import { Box, Stack } from "@chakra-ui/react";
// import Card from "./Card";
// import axios from "axios";

// const Home = () => {

//   const checkoutHandler = async (amount) => {
//     const {
//       data: { key },
//     } = await axios.get("http://www.localhost:4000/api/order/getkey");

//     const {
//       data: { orders },
//     } = await axios.post(
//       "http://localhost:4000/api/order/createOrder",
//       {
//         cartId: "1a7c1abb-b9c3-44bb-a287-941dbcfc6795",
//       },
//       {
//         headers: {
//           // Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA3MmQyMmI2LTI0NzktNDdjNi05MDMxLWY4NGE0ZjdjNDFmOSIsImVtYWlsIjoicm9oYTEyMUBnbWFpbC5jb20iLCJyb2xlIjoid2hvbGVzYWxlciIsImlhdCI6MTcwNTc0Njc1MX0.1hhR-vi4B3jSvgNXAstiiGUUgRSDOIls7mr2y19Vo5A,
//           Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBjOTVmN2Y3LTU1NGUtNDEzZC1iY2ExLTA3YzYxYmFjNTc1NCIsImVtYWlsIjoiZG9ncmEucm9oYW4yNkBnbWFpbC5jb20iLCJyb2xlIjoibWFudWZhY3R1cmVyIiwiaWF0IjoxNzA2MDMyMzg1fQ.-dNV-sFIaU02VBLkNxaVySaIjTd0xX9v39Bj6OM5Ke8,
//           // Add any other headers if needed
//         },
//       }
//     );

//     console.log({ key, orders });
//     const options = {
//       key,
//       amount: orders.amount,
//       currency: "INR",
//       name: "6 Pack Programmer",
//       description: "Tutorial of RazorPay",
//       image: "https://avatars.githubusercontent.com/u/25058652?v=4",
//       order_id: orders.id,
//       callback_url: "http://localhost:4000/api/order/paymentverification",
//       prefill: {
//         name: "Gaurav Kumar",
//         email: "gaurav.kumar@example.com",
//         contact: "9999999999",
//       },
//       handler: async function (response) {
//         // Handle success
//         console.log("Payment success:", response);
//         const res = await axios.post(
//           "http://localhost:4000/api/order/paymentverification",
//           {
//             ...response,
//           },
//           {
//             headers: {
//               Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA3MmQyMmI2LTI0NzktNDdjNi05MDMxLWY4NGE0ZjdjNDFmOSIsImVtYWlsIjoicm9oYTEyMUBnbWFpbC5jb20iLCJyb2xlIjoid2hvbGVzYWxlciIsImlhdCI6MTcwNTc0Njc1MX0.1hhR-vi4B3jSvgNXAstiiGUUgRSDOIls7mr2y19Vo5A,
//               // Add any other headers if needed
//             },
//           }
//         );
//         // response
//         console.log({ res: res.data });
//       },
//       notes: {
//         address: "Razorpay Corporate Office",
//       },
//       theme: {
//         color: "#121212",
//       },
//     };
//     console.log({ orders });
//     const razor = new window.Razorpay(options);
//     console.log({ razor });
//     razor.open();
//   };

//   const config = {
//     auth: {
//       username: "rzp_test_32hsbEKriO6ai4",
//       password: "SC6d7z4FcgX2wJj49obRRT4M",
//     },
//   };

//   const account = {
//     name: "Gaurav Kumar",
//     email: "gaurav.kumar@example.com",
//     tnc_accepted: true,
//     account_details: {
//       business_name: "Acme Corporation",
//       business_type: "individual",
//     },
//     bank_account: {
//       bank_account: "HDFC0CAGSBK",
//       beneficiary_name: "Gaurav Kumar",
//       account_type: "current",
//       account_number: 304030434,
//     },
//   };
//   const create = async () => {
//     try {
//       const response = await axios.post(
//         "https://api.razorpay.com/v1/accounts",
//         account,
//         config
//       );
//       console.log({ res: response.data });
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   return (
//     <Box>
//       <Stack
//         h={"100vh"}
//         alignItems="center"
//         justifyContent="center"
//         direction={["column", "row"]}
//       >
//         <Card
//           amount={5000}
//           img={
//             "https://cdn.shopify.com/s/files/1/1684/4603/products/MacBookPro13_Mid2012_NonRetina_Silver.png"
//           }
//           checkoutHandler={checkoutHandler}
//         />
//         <Card
//           amount={3000}
//           img={
//             "http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"
//           }
//           checkoutHandler={checkoutHandler}
//         />

//         <button>Create</button>
//       </Stack>
//     </Box>
//   );
// };

// export default Home;