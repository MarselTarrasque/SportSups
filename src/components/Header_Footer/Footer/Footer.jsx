import { NavLink } from 'react-router-dom'
import './Footer.css'
export default function Footer(){
    return(
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer__inner">
                        <div className="footer__top-side">
                            <div className="footer__logo">
                                <NavLink to='/'><img src="./src/assets/imgs/SportSupsLogoWhite.svg" alt=""/></NavLink>
                            </div>
                            <div className="footer__nav">
                                <div className="footer__nav-col">
                                    <NavLink className='footer__nav-link' to='/'>Главная</NavLink>
                                    <NavLink className='footer__nav-link' to='/Catalog'>Каталог</NavLink>
                                </div>
                                <div className="footer__nav-col">
                                    <NavLink className='footer__nav-link' to='/Faq'>Вопросы</NavLink>
                                </div>
                            </div>
                            <div className="footer__contacts">
                                <p className="footer__contacts-text">Сотрудничество: sportsups@contact.ru</p>
                                <p className="footer__contacts-text">Поддержка: sportsups@support.ru</p>
                                <p className="footer__contacts-text">Телефон: +7(952)812</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom-side">
                    <div className="container">
                        <p className="footer__text">Политика в отношении обработки <NavLink className='footer__text footer__text-link' to='/PersonalData'>персональных данных</NavLink></p>
                    </div>
                </div>
            </footer>
        </>
    )
}