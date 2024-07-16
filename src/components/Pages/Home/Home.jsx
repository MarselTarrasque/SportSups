import AboutUs from '../../HomePageBlocks/AboutUs/AboutUs'
import Banner from '../../HomePageBlocks/Banner/Banner'
import Contacts from '../../HomePageBlocks/Contacts/Contacts'
import NewProducts from '../../HomePageBlocks/NewProducts/NewProducts'
import Popular from '../../HomePageBlocks/Popular/Popular'
import Sell from '../../HomePageBlocks/Sell/Sell'
import './Home.css'
export default function Home(){
    return(
        <>
            <Banner/>
            <NewProducts/>
            <Popular/>
            <Sell/>
            <AboutUs/>
            <Contacts/>
        </>
    )
}