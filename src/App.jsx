import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Pages/Home/Home';
import Header from './components/Header_Footer/Header/Header';
import Footer from './components/Header_Footer/Footer/Footer';
import Catalog from './components/Pages/Catalog/Catalog';
import SingleCard from './components/Pages/SingleCard/SingleCard';
import Faq from './components/Pages/Faq/Faq';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
export default function App() {
  return (
    
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Catalog' element={<Catalog/>} />
        <Route path='/Catalog/:id' element={<SingleCard/>}/>
        <Route path='/Faq' element={<Faq/>} />
      </Routes>
      <Footer/>
    </>
  )
}
