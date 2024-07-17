import { store } from "../../../data/products"
import HomeCardPage from "../../ProductCards/HomePageCard/HomeCardPage"
import './NewProducts.css'
import * as React from 'react';

export default function NewProducts(){
    const [products, setProducts] = React.useState([]); 
    React.useEffect(() => {
        fetch('http://127.0.0.1:8000/api/products') 
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error('Ошибка при получении данных:', error));
    }, []);
    const fabricatorNames = [
        'Maxler', 
        'Optimum Nutrition',
        'GeneticLab Nutrition',
        'Syntrax',
        'Rline',
        'Mutant',
        'Ultimate',
        'Universal Nutrition',
    ];
    const categoryNames =[
        'Протеин',
        'Креатин',
        'Гейнеры',
        'Аминокислоты',
        'Восстановители',
        'Витамины',
    ]
    const tastesNames = [
        'Молочный шоколад', 'Без вкуса', 'Клубника', 'Банан', 'Карамель', 'Ванильное мороженое', 'Шоколадно-арахисов', 'Чизкейк', 'Капучино', 'Клубника-банан', 'Клубничный крем', 'Темный шоколад', 'Соленая карамель'
    ]
    return(
        <>
            <div className="newproducts">
                <div className="container">
                    <div className="newproducts__inner">
                        <h1 className="newproducts-title">Новинки</h1>
                        <div className="newproducts-items">
                            {
                                products.slice(0, 4).map(item => <HomeCardPage key={item.id} id={item.id} img={item.image} name={item.name} discount={item.discount} category={categoryNames[item.product_category_id-1]} weight={item.weight} rate={item.rate} price={item.price}/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}