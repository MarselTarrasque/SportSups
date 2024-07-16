import { store } from "../../../data/products"
import HomeCardPage from "../../ProductCards/HomePageCard/HomeCardPage"
import './NewProducts.css'
export default function NewProducts(){
    return(
        <>
            <div className="newproducts">
                <div className="container">
                    <div className="newproducts__inner">
                        <h1 className="newproducts-title">Новинки</h1>
                        <div className="newproducts-items">
                            {
                                store.slice(0, 4).map(item => <HomeCardPage img={item.img} name={item.name} discount={item.discount} category={item.category} weight={item.weight} rate={item.rate} price={item.price}/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}