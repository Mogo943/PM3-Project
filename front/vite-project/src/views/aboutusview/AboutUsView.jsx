import style from "../CommonView.module.css";
import { aboutUsText } from "../../helpers/texts"

const AboutUsView = () => {
    return (
        <div className={style.container}>
            <h1>{aboutUsText.title}</h1>
            <hr/>
            <p>{aboutUsText.body}</p>
        </div>
    )
}

export default AboutUsView