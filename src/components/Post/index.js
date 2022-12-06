import "./style.css";
import { FiMoreHorizontal } from "react-icons/fi"
import { BsChat } from "react-icons/bs"
import { FiSend } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io"
import { BsBookmark } from "react-icons/bs";
import { IconContext } from "react-icons";


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
                <IconContext.Provider value={{ size: "30px" }}>
                    <section className="engagement-post">



                        <div className="icons-1">
                            <div className="icon"><IoMdHeartEmpty /></div>
                            <div className="icon"><BsChat /></div>
                            <div className="icon"><FiSend /></div>
                        </div>
                        <div className="icon"><BsBookmark /></div>

                    </section>
                </IconContext.Provider>

                <section className="like">
                    <span>61 curtidas</span>
                </section>
                <div className="legend">
                    <p>
                        <span>Malingas</span> Lorem ipsun tudo tudo tudo tudoooooooooo
                    </p>
                </div>
                <div className="time-post">
                    <time>Há 30 minutos</time>
                </div>
            </div>
        </>
    )
}
