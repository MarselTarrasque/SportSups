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
    const [sort, setSort] = React.useState('');
    const handleChange = (event) => {
        setSort(event.target.value);
    };
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
                                    <label><input className='category-real-radio' value='Protein' type="radio" name='category'/><span className="category-custom-radio"></span>Протеин</label>
                                    <label><input className='category-real-radio' value='Creatine' type="radio" name='category'/><span className="category-custom-radio"></span>Креатин</label>
                                    <label><input className='category-real-radio' value='Gainer' type="radio" name='category'/><span className="category-custom-radio"></span>Гейнеры</label>
                                    <label><input className='category-real-radio' value='AminoAcids' type="radio" name='category'/><span className="category-custom-radio"></span>Аминокислоты</label>
                                    <label><input className='category-real-radio' value='Restorers' type="radio" name='category'/><span className="category-custom-radio"></span>Восстановители</label>
                                    <label><input className='category-real-radio' value='Vitamins' type="radio" name='category'/><span className="category-custom-radio"></span>Витамины</label>
                                </div>
                            </div>
                            <div className="catalog__other">
                                <div className="catalog__filter">
                                    <div className="form-group">
                                        <label><input type="checkbox" name="coding-notes" className="real-checkbox"/><span class="custom-checkbox"></span>Со Скидкой</label>
                                    </div>
                                    <div className="catalog__search_block">
                                        <img src="./src/assets/imgs/Search.svg" alt="" />
                                        <input className='catalog__search' type="text" name="search" id="" placeholder='Поиск'></input>
                                    </div>
                                    <Box className='sort_box'>
                                        <FormControl className='formcontol_sort'>
                                        <InputLabel className='sort_inputlabel' id="select-label">Сортировка</InputLabel>
                                        <Select
                                            labelId="select-label"
                                            id="demo-simple-select"
                                            value={sort}
                                            label="Сортировка"
                                            onChange={handleChange}
                                            className='sort_select'
                                            >
                                            <MenuItem className='sort_menuitem' value="Цена по возрастанию">Цена по возрастанию</MenuItem>
                                            <MenuItem className='sort_menuitem' value="Цена по убыванию">Цена по убыванию</MenuItem>
                                            <MenuItem className='sort_menuitem' value="По популярности">По популярности</MenuItem>
                                            <MenuItem className='sort_menuitem' value="По рейтингу">По рейтингу</MenuItem>
                                            </Select>
                                        </FormControl>   
                                    </Box>
                                </div>
                                <div className="catalog__cards">
                                    {
                                        store.map(item => <CatalogPageCard id={item.id} img={item.img} name={item.name} rate={item.rate} taste={item.taste} fabricator={item.fabricator} discount={item.discount} type={item.type} weight={item.weight} price={item.price}/>)
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