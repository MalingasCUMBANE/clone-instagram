import { AiOutlineSearch, AiFillHome } from 'react-icons/ai';
import { RiMessengerLine } from "react-icons/ri";
import { BsPlusSquare } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { MdOutlineExplore } from "react-icons/md";
import { IconContext } from 'react-icons';
import './../components/Header/style.css';

export function Header() {

    return (
        <header className="header">
            <div className="container">

                <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />

                <div className="input-fake">

                    <IconContext.Provider value={{ color: '#8e8e8e' }}>
                        <AiOutlineSearch />
                    </IconContext.Provider>

                    <input placeholder='pesquisar' />
                </div>
                <div className='menu-icons'>
                    <IconContext.Provider value={{ size: '26px' }}>
                        <AiFillHome />
                        <RiMessengerLine />
                        <BsPlusSquare />
                        <MdOutlineExplore />
                        <FiHeart />
                    </IconContext.Provider>
                    <img className='img-user' src='https://github.com/MalingasCUMBANE.png' />
                </div>
            </div>
        </header>
    )
}
