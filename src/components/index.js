import { AiOutlineSearch, AiFillHome } from 'react-icons/ai'
import { RiMessengerLine } from "react-icons/ri"
import { BsPlusSquare } from "react-icons/bs"
import { FiHeart } from "react-icons/fi"
import { MdOutlineExplore } from "react-icons/md"

export function Header() {
    return (
        <header className="header">
            <div className="container">

                <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />

                <div className="input-fake">
                    <AiOutlineSearch />
                    <input />
                </div>

                <div>
                    <AiFillHome />
                    <RiMessengerLine />
                    <BsPlusSquare />
                    <MdOutlineExplore />
                    <FiHeart />
                </div>
            </div>
        </header>
    )
}
