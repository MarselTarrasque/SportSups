import './SingleCard.css';
import { useParams } from "react-router-dom";
import { store } from '../../../data/products';
import HomeCardPage from '../../ProductCards/HomePageCard/HomeCardPage';
import ReviewCard from '../../ProductCards/ReviewCard/ReviewCard';
import * as React from 'react';
export default function SingleCard(){
    const [products, setProducts] = React.useState([]); 
    const { id } = useParams(); 
    const product = products.find(item => item.id === parseInt(id)); 
    React.useEffect(() => {
        fetch('http://127.0.0.1:8000/api/products') 
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error('Ошибка при получении данных:', error));
    }, []);
    if (!product) {
        return <div>Продукт не найден</div>;
    }
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
    const typeNames = [
        'Сывороточный',
        'В капсулах',
    ]
    return(
        <>
            <div className="singleproduct">
                <div className="container">
                    <div className="singleproduct__inner">
                        <h1 className="singleproduct-title">{categoryNames[product.product_category_id-1]} {fabricatorNames[product.product_fabricator_id-1]} {product.name}, {product.weight} г, {tastesNames[product.product_taste_id -1]}</h1>
                        <div className="singleproduct__all">
                            <div className="product">
                                <div className="product__info-inner">
                                    <img className="singleproduct-image" src={product.image} alt="" />
                                    <div className="product__info-desc">
                                        <p className="product__info-desc-text">Продукт: {categoryNames[product.product_category_id-1]}</p>
                                        <p className="product__info-desc-text">Вес: {product.weight}</p>
                                        <p className="product__info-desc-text">Производитель: {fabricatorNames[product.product_fabricator_id-1]}</p>
                                        <p className="product__info-desc-text">Вкус: {tastesNames[product.product_taste_id -1]}</p>
                                        <p className="product__info-desc-text">Тип: {typeNames[product.product_type_id-1]}</p>
                                        <p className="product__info-desc-text">Артикул: {product.id}</p>
                                    </div>
                                </div>
                                <div className="product__buy">
                                    <div className="prices">
                                        <p className='singleproduct-price'>{product.discount? Math.round(product.price-((product.price*product.discount)/100)) + '₽':''}</p>
                                        <p className={product.discount ? 'singleproduct-old_price': 'singleproduct-price_main'}>{product.price} ₽</p>
                                    </div>
                                    <div className="product-btns">
                                        <a href="#" className="product__buy-btn">Купить</a>
                                        <div className="product__cart-btn">
                                            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="path-1-inside-1_134_9" fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.51258 24.4749C10.6931 24.4749 11.6501 25.4319 11.6501 26.6124C11.6501 27.7929 10.6931 28.7499 9.51258 28.7499C8.33208 28.7499 7.3751 27.7929 7.3751 26.6124C7.3751 25.4319 8.33208 24.4749 9.51258 24.4749ZM22.3371 24.4749C23.5176 24.4749 24.4745 25.4319 24.4745 26.6124C24.4745 27.7929 23.5176 28.7499 22.3371 28.7499C21.1566 28.7499 20.1996 27.7929 20.1996 26.6124C20.1996 25.4319 21.1566 24.4749 22.3371 24.4749ZM1.67499 0.250107H4.52497C5.1742 0.250107 5.7338 0.687351 5.90017 1.30138L5.93339 1.45842L6.62441 5.95007H27.3248C28.1795 5.95007 28.8281 6.69203 28.7429 7.51805L28.7159 7.68418L26.3618 18.2774C25.9461 20.1483 24.3407 21.5029 22.4484 21.6171L22.1887 21.625H9.82C7.7944 21.625 6.05964 20.2062 5.64024 18.2476L5.59474 18L3.30244 3.10009H1.67499C0.88799 3.10009 0.25 2.4621 0.25 1.6751C0.25 0.944311 0.800103 0.342008 1.50881 0.259694L1.67499 0.250107H4.52497H1.67499ZM25.5482 8.80005H7.06268L8.41139 17.5667C8.51011 18.2083 9.02736 18.695 9.65954 18.766L9.81981 18.775H22.1885C22.8007 18.775 23.3376 18.3852 23.5345 17.818L23.5795 17.6591L25.5482 8.80005Z"/></mask><path fill-rule="evenodd" clip-rule="evenodd" d="M9.51258 24.4749C10.6931 24.4749 11.6501 25.4319 11.6501 26.6124C11.6501 27.7929 10.6931 28.7499 9.51258 28.7499C8.33208 28.7499 7.3751 27.7929 7.3751 26.6124C7.3751 25.4319 8.33208 24.4749 9.51258 24.4749ZM22.3371 24.4749C23.5176 24.4749 24.4745 25.4319 24.4745 26.6124C24.4745 27.7929 23.5176 28.7499 22.3371 28.7499C21.1566 28.7499 20.1996 27.7929 20.1996 26.6124C20.1996 25.4319 21.1566 24.4749 22.3371 24.4749ZM1.67499 0.250107H4.52497C5.1742 0.250107 5.7338 0.687351 5.90017 1.30138L5.93339 1.45842L6.62441 5.95007H27.3248C28.1795 5.95007 28.8281 6.69203 28.7429 7.51805L28.7159 7.68418L26.3618 18.2774C25.9461 20.1483 24.3407 21.5029 22.4484 21.6171L22.1887 21.625H9.82C7.7944 21.625 6.05964 20.2062 5.64024 18.2476L5.59474 18L3.30244 3.10009H1.67499C0.88799 3.10009 0.25 2.4621 0.25 1.6751C0.25 0.944311 0.800103 0.342008 1.50881 0.259694L1.67499 0.250107H4.52497H1.67499ZM25.5482 8.80005H7.06268L8.41139 17.5667C8.51011 18.2083 9.02736 18.695 9.65954 18.766L9.81981 18.775H22.1885C22.8007 18.775 23.3376 18.3852 23.5345 17.818L23.5795 17.6591L25.5482 8.80005Z" fill="white"/><path d="M5.90017 1.30138L6.38934 1.19789L6.38644 1.18416L6.38277 1.17062L5.90017 1.30138ZM5.93339 1.45842L6.42758 1.38239L6.42545 1.36859L6.42256 1.35493L5.93339 1.45842ZM6.62441 5.95007L6.13023 6.0261L6.19545 6.45007H6.62441V5.95007ZM28.7429 7.51805L29.2364 7.59821L29.2387 7.58384L29.2402 7.56936L28.7429 7.51805ZM28.7159 7.68418L29.204 7.79265L29.2071 7.77857L29.2094 7.76434L28.7159 7.68418ZM26.3618 18.2774L26.8499 18.3858L26.8499 18.3858L26.3618 18.2774ZM22.4484 21.6171L22.4635 22.1169L22.471 22.1167L22.4785 22.1162L22.4484 21.6171ZM22.1887 21.625V22.125H22.1962L22.2037 22.1247L22.1887 21.625ZM5.64024 18.2476L5.14848 18.338L5.1498 18.3452L5.15133 18.3523L5.64024 18.2476ZM5.59474 18L5.10056 18.0761L5.10166 18.0832L5.10298 18.0904L5.59474 18ZM3.30244 3.10009L3.79663 3.02406L3.7314 2.60009H3.30244V3.10009ZM1.50881 0.259694L1.48001 -0.239476L1.46553 -0.238641L1.45112 -0.236967L1.50881 0.259694ZM1.67499 0.250107V-0.249893H1.66058L1.64619 -0.249063L1.67499 0.250107ZM25.5482 8.80005L26.0363 8.90851L26.1715 8.30005H25.5482V8.80005ZM7.06268 8.80005V8.30005H6.47987L6.56849 8.87608L7.06268 8.80005ZM8.41139 17.5667L7.9172 17.6427L8.41139 17.5667ZM9.65954 18.766L9.60369 19.2629L9.61763 19.2645L9.63164 19.2652L9.65954 18.766ZM9.81981 18.775L9.7919 19.2742L9.80584 19.275H9.81981V18.775ZM23.5345 17.818L24.0068 17.982L24.0116 17.9683L24.0155 17.9544L23.5345 17.818ZM23.5795 17.6591L24.0606 17.7955L24.0645 17.7816L24.0676 17.7676L23.5795 17.6591ZM9.51258 24.9749C10.4169 24.9749 11.1501 25.7081 11.1501 26.6124H12.1501C12.1501 25.1558 10.9692 23.9749 9.51258 23.9749V24.9749ZM11.1501 26.6124C11.1501 27.5168 10.4169 28.2499 9.51258 28.2499V29.2499C10.9692 29.2499 12.1501 28.0691 12.1501 26.6124H11.1501ZM9.51258 28.2499C8.60822 28.2499 7.8751 27.5168 7.8751 26.6124H6.8751C6.8751 28.0691 8.05594 29.2499 9.51258 29.2499V28.2499ZM7.8751 26.6124C7.8751 25.7081 8.60822 24.9749 9.51258 24.9749V23.9749C8.05594 23.9749 6.8751 25.1558 6.8751 26.6124H7.8751ZM22.3371 24.9749C23.2414 24.9749 23.9745 25.7081 23.9745 26.6124H24.9745C24.9745 25.1558 23.7937 23.9749 22.3371 23.9749V24.9749ZM23.9745 26.6124C23.9745 27.5168 23.2414 28.2499 22.3371 28.2499V29.2499C23.7937 29.2499 24.9745 28.0691 24.9745 26.6124H23.9745ZM22.3371 28.2499C21.4327 28.2499 20.6996 27.5168 20.6996 26.6124H19.6996C19.6996 28.0691 20.8804 29.2499 22.3371 29.2499V28.2499ZM20.6996 26.6124C20.6996 25.7081 21.4327 24.9749 22.3371 24.9749V23.9749C20.8804 23.9749 19.6996 25.1558 19.6996 26.6124H20.6996ZM1.67499 0.750107H4.52497V-0.249893H1.67499V0.750107ZM4.52497 0.750107C4.94619 0.750107 5.30966 1.03387 5.41757 1.43214L6.38277 1.17062C6.15794 0.340828 5.40222 -0.249893 4.52497 -0.249893V0.750107ZM5.41099 1.40487L5.44422 1.56191L6.42256 1.35493L6.38934 1.19789L5.41099 1.40487ZM5.4392 1.53445L6.13023 6.0261L7.1186 5.87404L6.42758 1.38239L5.4392 1.53445ZM6.62441 6.45007H27.3248V5.45007H6.62441V6.45007ZM27.3248 6.45007C27.8789 6.45007 28.3007 6.93149 28.2455 7.46674L29.2402 7.56936C29.3554 6.45257 28.48 5.45007 27.3248 5.45007V6.45007ZM28.2493 7.43789L28.2223 7.60402L29.2094 7.76434L29.2364 7.59821L28.2493 7.43789ZM28.2278 7.57572L25.8737 18.1689L26.8499 18.3858L29.204 7.79265L28.2278 7.57572ZM25.8737 18.1689C25.5066 19.8209 24.089 21.0172 22.4183 21.118L22.4785 22.1162C24.5924 21.9886 26.3855 20.4757 26.8499 18.3858L25.8737 18.1689ZM22.4333 21.1174L22.1736 21.1252L22.2037 22.1247L22.4635 22.1169L22.4333 21.1174ZM22.1887 21.125H9.82V22.125H22.1887V21.125ZM9.82 21.125C8.03142 21.125 6.49944 19.8721 6.12916 18.1429L5.15133 18.3523C5.61984 20.5402 7.55738 22.125 9.82 22.125V21.125ZM6.13201 18.1572L6.08651 17.9096L5.10298 18.0904L5.14848 18.338L6.13201 18.1572ZM6.08893 17.924L3.79663 3.02406L2.80826 3.17612L5.10056 18.0761L6.08893 17.924ZM3.30244 2.60009H1.67499V3.60009H3.30244V2.60009ZM1.67499 2.60009C1.16413 2.60009 0.75 2.18595 0.75 1.6751H-0.25C-0.25 2.73824 0.611847 3.60009 1.67499 3.60009V2.60009ZM0.75 1.6751C0.75 1.20108 1.10698 0.809726 1.56649 0.756355L1.45112 -0.236967C0.493223 -0.125709 -0.25 0.687541 -0.25 1.6751H0.75ZM1.5376 0.758864L1.70379 0.749277L1.64619 -0.249063L1.48001 -0.239476L1.5376 0.758864ZM1.67499 0.750107H4.52497V-0.249893H1.67499V0.750107ZM4.52497 -0.249893H1.67499V0.750107H4.52497V-0.249893ZM25.5482 8.30005H7.06268V9.30005H25.5482V8.30005ZM6.56849 8.87608L7.9172 17.6427L8.90557 17.4906L7.55686 8.72402L6.56849 8.87608ZM7.9172 17.6427C8.05059 18.5097 8.74936 19.1669 9.60369 19.2629L9.7154 18.2691C9.30536 18.2231 8.96962 17.907 8.90557 17.4906L7.9172 17.6427ZM9.63164 19.2652L9.7919 19.2742L9.84771 18.2758L9.68745 18.2668L9.63164 19.2652ZM9.81981 19.275H22.1885V18.275H9.81981V19.275ZM22.1885 19.275C23.0157 19.275 23.7408 18.7484 24.0068 17.982L23.0621 17.6541C22.9344 18.022 22.5857 18.275 22.1885 18.275V19.275ZM24.0155 17.9544L24.0606 17.7955L23.0985 17.5227L23.0534 17.6817L24.0155 17.9544ZM24.0676 17.7676L26.0363 8.90851L25.0601 8.69158L23.0914 17.5506L24.0676 17.7676Z" fill="#4AAAFF" mask="url(#path-1-inside-1_134_9)"/></svg>
                                        </div>
                                    </div>
                                    <div className="delivery">
                                        <div className="delivery-svg">
                                            <svg width="27" height="33" viewBox="0 0 27 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.64551 18.0789V9.39473C6.64551 8.08668 7.72869 7.02631 9.06486 7.02631C10.401 7.02631 11.4842 8.08668 11.4842 9.39473V18.0789" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M26.0003 17.2895V22.4211C26.0003 27.4352 21.8481 31.5 16.7262 31.5H15.9197C10.7977 31.5 6.64551 27.4352 6.64551 22.4211V17.2895" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.4844 20.4474V18.9519V16.5C11.4844 15.192 12.5676 14.1316 13.9037 14.1316C15.2399 14.1316 16.3231 15.192 16.3231 16.5V19.012V20.4474" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.3228 20.4474V18.9519V16.5C16.3228 15.192 17.4059 14.1316 18.7421 14.1316C20.0783 14.1316 21.1615 15.192 21.1615 16.5V19.012V20.4474" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21.1611 20.4474V18.9519V16.5C21.1611 15.192 22.2443 14.1316 23.5805 14.1316C24.9167 14.1316 25.9998 15.192 25.9998 16.5V19.012V20.4474" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.129 9.39474C17.129 8.56491 16.9982 7.76499 16.7558 7.01364C16.4845 6.17331 16.0736 5.39375 15.5496 4.70108C14.0805 2.75899 11.7227 1.5 9.06452 1.5C6.40635 1.5 4.04855 2.75899 2.57941 4.70108C2.05543 5.39375 1.64448 6.17331 1.37327 7.01364C1.13078 7.76499 1 8.56491 1 9.39474" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>
                                        </div>
                                        <p className="delivery-text">Доставка по клику</p>
                                        <div className="delivery__info">
                                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 15.5H11V9.5H9V15.5ZM10 0.5C4.475 0.5 0 4.975 0 10.5C0 16.025 4.475 20.5 10 20.5C15.525 20.5 20 16.025 20 10.5C20 4.975 15.525 0.5 10 0.5ZM10 18.5C5.59 18.5 2 14.91 2 10.5C2 6.09 5.59 2.5 10 2.5C14.41 2.5 18 6.09 18 10.5C18 14.91 14.41 18.5 10 18.5ZM9 7.5H11V5.5H9V7.5Z" fill="black" fill-opacity="0.3"/></svg>
                                        </div>
                                    </div>
                                    <p className="deliveryonlyonline">Оплата только онлайн</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="popularproducts">
                <div className="container">
                    <div className="popularproducts__inner">
                        <h1 className="popularproducts-title">Интересные предложения</h1>
                        <div className="popularproducts-items">
                            {
                                products.slice(0, 4).map(item => <HomeCardPage key={item.id} id={item.id} img={item.image} name={item.name} discount={item.discount} category={categoryNames[item.product_category_id-1]} weight={item.weight} rate={item.rate} price={item.price}/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="reviews">
                <div className="container">
                    <div className="reviews__inner">
                        <h1 className='reviews-title'>Отзывы</h1>
                        <div className="reviews-cards">
                            <ReviewCard/>
                            <ReviewCard/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="description">
                <div className="container">
                    <div className="description__inner">
                        <h1 className="desc-title">
                            Описание
                        </h1>
                        <p className="descriprion-text">{product.description}</p>
                    </div>
                </div>
            </div>
            <div className="deliverybenefit">
                <div className="container">
                    <div className="deliverybenefit__inner">
                        <h1 className="deliverybenefit-title">Доставка с выгодой</h1>
                        <p className="deliverybenefit-text">Подпишитесь и получайте промокоды, акции и подборки товаров на свою почту.</p>
                        <div className="form-input">
                            <input className='catalog__search' type="text" id="" placeholder='Введите e-mail'></input>
                            <button className="follow">Подписаться</button>
                        </div>
                        <p className="bottom-text">Нажимая «Подписаться» вы соглашаетесь с Условиями использования сайта и Политикой обработки персональных данных.</p>
                    </div>
                </div>
            </div>
        </>
    )
}