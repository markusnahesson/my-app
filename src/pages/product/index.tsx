import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const { push } = useRouter();
    useEffect(() => {
        if(!isLogin){
            push('/auth/login');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <div>
            <h1>Product Page 1</h1>
        </div>
    )
};


export default ProductPage;