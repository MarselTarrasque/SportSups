import './Sell.css';
import { store } from '../../../data/products';
import HomeCardPage from '../../ProductCards/HomePageCard/HomeCardPage';

export default function Sell(){
    return(
        <>
        <div className="sellproducts">
                <div className="container">
                    <div className="sellproducts__inner">
                        <h1 className="sellproducts-title">Акции</h1>
                        <div className="sellproducts-items">
                            {
                                store.filter(item => item.discount > 0).slice(0, 4).map(item => <HomeCardPage img={item.img} name={item.name} discount={item.discount} category={item.category} weight={item.weight} rate={item.rate} price={item.price}/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}