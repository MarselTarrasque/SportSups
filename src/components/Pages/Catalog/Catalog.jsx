import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Catalog.css'
import { store } from '../../../data/products';
import CatalogPageCard from '../../ProductCards/CatalogPageCard/CatalogPageCard';

export default function Catalog(){
    //Получение данных fetch запрос
    const [products, setProducts] = React.useState([]); 
    React.useEffect(() => {
        fetch('http://127.0.0.1:8000/api/products') 
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error('Ошибка при получении данных:', error));
    }, []);
    //Получение название производителя
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
    
    //Сортировка
    const [sort, setSort] = React.useState('');
    const handleChange = (event) => {
        setSort(event.target.value);
        console.log(sort);
    };

    //Категории
    const [selectedCategory, setSelectedCategory] = React.useState('');
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        console.log(selectedCategory);
    };

    //Со скидкой
    const [showOnlyDiscounted, setShowOnlyDiscounted] = React.useState(false); 

    //Фильтрация по всем функциям
    const filteredProducts = selectedCategory
    ? products.filter((item) => categoryNames[item.product_category_id-1] === selectedCategory)
    : products; // Фильтрация товаров по категории

    const filteredByDiscount = filteredProducts.filter(
        (item) => !showOnlyDiscounted || item.discount > 0
    ); 

    //Поиск
    const [searchTerm, setSearchTerm] = React.useState(''); 
    const filteredBySearch = filteredByDiscount.filter((item) => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) // Поиск по названию
    );
    //сортировка убывание или возроастание
    const [sortDrop, setSortDrop] = React.useState('Цена по возрастанию'); // Состояние для выбранного метода сортировки
    const handleChangeDrop = (event) => {
        setSortDrop(event.target.value); // Обновляем состояние при выборе значения
    };
    const sortedProducts = filteredBySearch.slice().sort((a, b) => { // Создание копии массива для сортировки
        if (sortDrop === 'Цена по возрастанию') {
          return a.price - b.price; // Сортировка по возрастанию цены
        } else if (sortDrop === 'Цена по убыванию') {
          return b.price - a.price; // Сортировка по убыванию цены
        }
        return 0; // Возврат 0, если метод сортировки не определен
    });
    return(
        <>
            <div className="catalog">
                <div className="container">
                    <div className="catalog__inner-title">
                        <h1 className="catalog-title">Каталог</h1>
                        <div className="catalog__inner">
                            <div className="catalog__category">
                                <p className="category-title">Категория</p>
                                <div className="category-inner">
                                <label><input onChange={handleCategoryChange} className='category-real-radio' value='' type="radio" name='category'/><span className="category-custom-radio"></span>Показать все</label>
                                    <label><input onChange={handleCategoryChange} className='category-real-radio' value='Протеин' type="radio" name='category'/><span className="category-custom-radio"></span>Протеин</label>
                                    <label><input onChange={handleCategoryChange} className='category-real-radio' value='Креатин' type="radio" name='category'/><span className="category-custom-radio"></span>Креатин</label>
                                    <label><input onChange={handleCategoryChange} className='category-real-radio' value='Гейнеры' type="radio" name='category'/><span className="category-custom-radio"></span>Гейнеры</label>
                                    <label><input onChange={handleCategoryChange} className='category-real-radio' value='Аминокислоты' type="radio" name='category'/><span className="category-custom-radio"></span>Аминокислоты</label>
                                    <label><input onChange={handleCategoryChange} className='category-real-radio' value='Восстановители' type="radio" name='category'/><span className="category-custom-radio"></span>Восстановители</label>
                                    <label><input onChange={handleCategoryChange} className='category-real-radio' value='Витамины' type="radio" name='category'/><span className="category-custom-radio"></span>Витамины</label>
                                </div>
                            </div>
                            <div className="catalog__other">
                                <div className="catalog__filter">
                                    <div className="form-group">
                                    <label>
                                        <input
                                            type="checkbox"
                                            onChange={() => setShowOnlyDiscounted(!showOnlyDiscounted)}
                                            checked={showOnlyDiscounted} 
                                            value={false}
                                            name="coding-notes"
                                            className="real-checkbox"
                                            />
                                        <span className="custom-checkbox"></span>Со Скидкой
                                    </label>
                                    </div>
                                    <div className="catalog__search_block">
                                        <img src="./src/assets/imgs/Search.svg" alt="" />
                                        <input 
                                            className='catalog__search' 
                                            type="text" 
                                            name="search" 
                                            id="" 
                                            placeholder='Поиск'
                                            value={searchTerm} // Связываем значение input с состоянием searchTerm
                                            onChange={(e) => setSearchTerm(e.target.value)} // Обновляем состояние при вводе текста
                                        />
                                    </div>
                                    <Box className='sort_box'>
                                        <FormControl className='formcontol_sort'>
                                        <InputLabel className='sort_inputlabel' id="select-label">Сортировка</InputLabel>
                                        <Select
                                            labelId="select-label"
                                            id="demo-simple-select"
                                            value={sort}
                                            label="Сортировка"
                                            onChange={handleChangeDrop}
                                            className='sort_select'
                                            >
                                            <MenuItem className='sort_menuitem' value="Цена по возрастанию">Цена по возрастанию</MenuItem>
                                            <MenuItem className='sort_menuitem' value="Цена по убыванию">Цена по убыванию</MenuItem>
                                            </Select>
                                        </FormControl>   
                                    </Box>
                                </div>
                                <div className="catalog__cards">
                                    {
                                        sortedProducts.map((product) => (
                                            <CatalogPageCard 
                                                key={product.id} 
                                                id={product.id}
                                                img={product.image}
                                                name={product.name} 
                                                rate='4,5'
                                                taste={tastesNames[product.product_taste_id-1]}
                                                fabricator={fabricatorNames[product.product_fabricator_id - 1]}
                                                discount={product.discount}
                                                category={categoryNames[product.product_category_id-1]} 
                                                weight={product.weight + ' г'}
                                                price={product.price}
                                                />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}