import { useContext } from "react";
import { contextApi } from "./contextapi";
const TestContext1 = () => {
    const {cont1}:any = useContext(contextApi);
    return(
        <h2>
            {cont1}
        </h2>
    )

};

export default TestContext1