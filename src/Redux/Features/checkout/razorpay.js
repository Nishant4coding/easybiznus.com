import axiosToken from "@/Utility/axiosInstance";
import BASE_URL from "@/Utility/baseUrl";
import toast from "react-hot-toast";

const loadRazorpay = () => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
};

export const RazorCheckout = async (
  pricingData,
  id,
  userDetails,
  cb = () => {}
) => {
  const token = localStorage.getItem("token");
  const { firstName, phoneNumber } = userDetails;
  try {
    await loadRazorpay();

    const userEmail = localStorage.getItem("username");
    const response = await axiosToken.post(`${BASE_URL}/transaction/initiate`, {
      amount: pricingData?.subTotal + pricingData?.tax,
    });
    const order = response?.data?.order;

    if (!window.Razorpay) {
      throw new Error("Razorpay SDK not loaded");
    }

    const options = {
      key: "rzp_test_SgOKOkoyuPBdtO",
      amount: order?.amount,
      currency: order?.currency,
      name: order?.name,
      description: order?.description,
      order_id: order?.id,
      prefill: {
        name: firstName,
        email: userEmail,
        contact: phoneNumber,
      },
      theme: {
        color: "#121212",
      },
      handler: function (response) {
        const paymentData = {
          // ...order,
          // ...response,
          cartId: id,
          ...response,
          // creditsUsed: 10000,
        };

        axiosToken
          .post(`${BASE_URL}/order/createOrder`, paymentData)
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            toast.error(
              "Something went wrong while creating order. Please try again later."
            );
          });

        console.log("Payment successful!");
        console.log(response);
        cb();
      },
      modal: {
        ondismiss: function () {
          console.log("Transaction cancelled");
        },
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (error) {
    console.log("Something went wrong:", error);
  }
};
