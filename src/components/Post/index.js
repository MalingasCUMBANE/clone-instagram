import { useEffect, useState } from "react";
import "./style.css";
import { FiMoreHorizontal, FiSend } from "react-icons/fi"
import { BsChat, BsEmojiSmile, BsBookmark } from "react-icons/bs"
import { IoMdHeartEmpty } from "react-icons/io"
import { IconContext } from "react-icons";



export function Post() {


    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/MalingasCUMBANE/followers').then((response) => {
            return response.json()
        }).then((result) => setPost(result)).catch((error) => {
            throw new Error(error)
        })
    }, [])



    return (
        <>
            <div>

                <header className="header-post">

                    <div className="infos-post">
                        <img className="img-header-post" src={`https://github.com/MalingasCUMBANE.png`} />
                        <p>Malingas CumbaneAAA</p>
                    </div>
                    <FiMoreHorizontal />
                </header>

                {post.map((item, key) => (
                    <div className="img-post">

                        <img src={`https://github.com/${item.login}.png`} />

                    </div>
                ))}

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
                            <span>BBBBMalingas</span> Lorem ipsun tudo tudo tudo tudoooooooooo
                        </p>
                    </div>
                    <div className="time-post">
                        <time>Há 30 minutos</time>
                    </div>
                    <div className="comment">
                        <div className="fake-comment">
                            <IconContext.Provider value={{ size: "25px" }}>
                                <div className="icon">
                                    <BsEmojiSmile />
                                </div>

                            </IconContext.Provider>
                            <input placeholder="Adicione um comentário..." />

                        </div>
                        <button>Publicar</button>

                    </div>
                </div>
            </div>
        </>
    )
}
