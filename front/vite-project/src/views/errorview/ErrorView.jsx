import style from "../CommonView.module.css";
import { errorText } from "../../helpers/texts";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ErrorView = () => {
    const navigate = useNavigate();
    const [seconds, setSeconds] = useState(3)
    
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prev) => prev - 1)
        }, 1000)
        const timeout = setTimeout(() => {
            navigate("/")
        }, 3000)

        return () => {
            clearInterval(interval);
            clearTimeout(timeout)
        }
    }, [navigate])
    
    return (
        <div className={style.container}>
            <h1>{errorText.title}</h1>
            <h3 style={{color: "whitesmoke"}}> Seras redirigido en {seconds} </h3>
        </div>
    )
}

export default ErrorView;