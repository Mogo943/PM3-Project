import style from "../CommonView.module.css";
import { contactText } from "../../helpers/texts";

const ContactUsView = () => {
    return (
        <div className={style.container}>
            <h1>{contactText.title}</h1>
            <hr/>
            <p>{contactText.body}</p>
        </div>
    )
}

export default ContactUsView;