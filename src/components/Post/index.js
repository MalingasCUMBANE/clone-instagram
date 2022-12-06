import "./style.css";
import { FiMoreHorizontal } from "react-icons/fi"
import { BsChat } from "react-icons/bs"
import { FiSend } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io"
import { BsBookmark } from "react-icons/bs";


export function Post() {
    return (
        <>
            <header>
                <div className="infos-post">
                    <img src="https://github.com/MalingasCUMBANE.png" />
                    <p>Malingas Cumbane</p>
                </div>
                <FiMoreHorizontal />
            </header>

            <div className="img-post">
                <img src="https://github.com/MalingasCUMBANE.png" />
            </div>

            <div className="footer-post">
                <section className="engagement-post">

                    <div>
                        <div className="icon"><IoMdHeartEmpty /></div>
                        <div className="icon"><BsChat /></div>
                        <div className="icon"><FiSend /></div>
                    </div>
                    <div className="icon"><BsBookmark /></div>

                </section>
            </div>
        </>
    )
}
