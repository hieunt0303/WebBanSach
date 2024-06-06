import axios from "axios";
import React, { useEffect } from "react";
import moment from "moment";
import { useLocation } from "react-router-dom";

const Thankyou = () => {
    const location = useLocation();
    const queryParam = new URLSearchParams(location.search);
    const id = queryParam.get("id");
    const orderCode = queryParam.get("orderCode");
    const status = queryParam.get("status");

    useEffect(() => {
        console.log(123)
        if(!id || !orderCode || !status || status !== "PAID") return;
        const fetchData = async () => {
            try{
                await axios.post("http://localhost:8080/cart/check-payment",{
                    orderCode
                });

            }catch (error) {
                console.log(error)
            }
        };
        fetchData();
    },[]);

    return(
       <div className="thankyou-you" style={{textAlign: "center", marginTop: "200px", color: "#4caf50"}}><b>Cảm ơn bạn đã mua hàng</b>  </div>
);
}
export default Thankyou;