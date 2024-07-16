import { NavLink } from 'react-router-dom'
import './Header.css'
export default function Header() {
    return(
        <>
            <header className="header">
                <div className="container">
                    <div className="header__inner">
                        <div className="header__logo">
                        <NavLink to='/'><img src="./src/assets/imgs/SportSupsLogoBlack.svg" alt="" /></NavLink>
                        </div>
                        <div className="header__nav">
                            <NavLink to='/' className="header__nav-link">Главная</NavLink>
                            <NavLink to='/Catalog' className="header__nav-link">Каталог</NavLink>
                            <NavLink to='/Faq' className="header__nav-link">Вопросы</NavLink>
                        </div>
                        <div className="header__btns"> 
                            <a href="#" className="header__btns-btn"><img src="./src/assets/imgs/Cart.svg" alt="" /></a>
                            <a href="#" className="header__btns-btn"><img src="./src/assets/imgs/Account.svg" alt="" /></a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}