import style from "../CommonView.module.css";
import { homeText } from "../../helpers/texts";
import imagenHome from "../../assets/imagenHome.png"

const HomeView = () => {
    return (
        <div className={style.container}>
            <h1>{homeText.title}</h1>
            <hr/>
            <p>{homeText.body}</p>
            <img src={imagenHome} alt="tattoo" style={{color: "whitesmoke"}}/>
        </div>
    )
}

export default HomeView;