import axios from "@/Utility/axiosInstance";
import BASE_URL from "@/Utility/baseUrl";


const loadRazorpay = () => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
    });
};

export const RazorCheckout = async (pricingData, id, userDetails) => {
    const { firstName, phoneNumber } = userDetails;
    try {
        await loadRazorpay();

        const userEmail = localStorage.getItem("username");
        const response = await axios.post(`${BASE_URL}/transaction/initiate`, { amount: pricingData.subTotal + pricingData.tax });
        const order = response.data.order;

        if (!window.Razorpay) {
            throw new Error("Razorpay SDK not loaded");
        }

        const options = {
            key:  "rzp_test_SgOKOkoyuPBdtO",
            amount: order.amount,
            currency: order.currency,
            name: order?.name,
            description: order?.description,
            order_id: order.id,
            prefill: {
                name: firstName,
                email: userEmail,
                contact: phoneNumber,
            },
            theme: {
                color: "#121212",
            },
            handler: function (response) {
                console.log({ response });
                const paymentData = {
                    ...order,
                    ...response,
                    cartId: id,
                    creditsUsed: 10000,
                };

                fetch(`${BASE_URL}/order/createOrder`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(paymentData),
                })
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error("Network response was not ok");
                        }
                        return response.json();
                    })
                    .then((data) => {
                        console.log(data);
                    })
                    .catch((error) => {
                        console.error("There was a problem with the fetch operation:", error);
                    });

                console.log("Payment successful!");
                console.log(response);
                console.log(userDetails);
            },
            modal: {
                ondismiss: function() {
                    console.log("Transaction cancelled");
                }
            }
        };

        const rzp = new window.Razorpay(options); // Create Razorpay instance
        rzp.open();

    } catch (error) {
        console.log("Something went wrong:", error);
    }
};