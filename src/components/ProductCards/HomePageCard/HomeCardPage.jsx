import { Link, NavLink } from 'react-router-dom'
import './HomeCardPage.css'
export default function HomeCardPage(props){
    
    return(
        <>
            <div className="homepagecard">
                <div className="homepagecard__inner">
                    <img src={props.img} alt=""/>
                    <h1 className="homepagecard__inner-title">{props.name}</h1>
                    <div className="homepagecard_desc">
                        <p className="homepagecard_desc-type">{props.category}</p>
                        <p className='homepagecard_desc-dot'>•</p>
                        <p className="homepagecard_desc-weight">{props.weight} г.</p>
                    </div>
                    <div className="homepagecard_rate">
                        <div className="homepagecard_rate-stars">
                            <img src="./src/assets/imgs/stars.svg" alt="" />
                        </div>
                        <p className="homepagecard_rate-number">{props.rate}</p>
                    </div>
                    <div className="homepagecard-price_block">
                        <p className='homepagecard-disc_price'>{props.discount? Math.round(props.price-((props.price*props.discount)/100)) + '₽':''}</p>
                        <p className={props.discount ? 'homepagecard-old_price': 'homepagecard-price_main'}>{props.price} ₽</p>
                    </div>
                    <div className="homepagecard-btns">
                        <Link className='homepagecard-more-btn' to='/'>Подробнее</Link>
                        <a href="#" className="homepagecard-cart"><img src="/src/assets/imgs/cardcart.svg" alt=""/></a>
                    </div>
                </div>
            </div>
        </>
    )
}