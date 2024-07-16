import './Popular.css';
import { store } from '../../../data/products';
import HomeCardPage from '../../ProductCards/HomePageCard/HomeCardPage';

export default function Popular(){
    return(
        <>
            <div className="popularproducts">
                <div className="container">
                    <div className="popularproducts__inner">
                        <h1 className="popularproducts-title">Популярные товары</h1>
                        <div className="popularproducts-items">
                            {
                                store.sort((a, b) => b.reviews - a.reviews).slice(0, 4).map(item => <HomeCardPage img={item.img} reviews={item.reviews} name={item.name} discount={item.discount} category={item.category} weight={item.weight} rate={item.rate} price={item.price}/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}