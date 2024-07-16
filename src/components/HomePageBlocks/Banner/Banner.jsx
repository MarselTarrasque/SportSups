import { NavLink } from 'react-router-dom'
import './Banner.css'
export default function Banner(){
    return(
        <>
            <div className="banner">
                <div className="container">
                    <div className="banner__inner">
                        <div className="banner_left-side">
                            <div className="banner__title">Новый <span className="level">уровень</span> <span className="taste">вкуса! </span>Два новых вкуса протеина уже в продаже!</div>
                            <div className="banner__udertitle-text">
                                <p className="undertitle-text undertitle-text-first"><span>Булочка с корицей</span> - классический вкус, который никогда не надоест!</p>
                                <p className="undertitle-text undertitle-text-second"><span>Вишневый чизкейк</span> - нежный и сладкий, как летний десерт!</p>
                            </div>
                            <p className="banner__left-btn">Подробнее</p>
                        </div>
                        <div className="banner_right-side">
                            <NavLink className='banner_item banner_item-first' to='/'><img src="./src/assets/imgs/Banner-bun.png" alt="" /></NavLink>
                            <NavLink className='banner_item banner_item-second' to='/'><img src="./src/assets/imgs/Banner-cheasecake.png" alt="" /></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}