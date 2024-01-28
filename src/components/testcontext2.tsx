import { useContext } from "react";
import { contextApi } from './contextapi';

const TestContext2 = () => {
    let {setCont1}:any = useContext(contextApi);
    const zzz= ()=>{
        setCont1(13)
    }
    return(
        <button onClick={zzz}>bezan begaaa</button>
    )
};

export default TestContext2