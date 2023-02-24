import Layout from "../componants/Layout";
import OrderModel from "../componants/OrderModal"

export default function success() {
    return(
        <Layout>
            <OrderModel opened = {true} paymentMethod={1} />
        </Layout>
    )
};
