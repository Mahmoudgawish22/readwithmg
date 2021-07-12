import "./productspage.scss"
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Footer from "./welcomePage/Wfooter/footer"
import Header from "./header"
import PSlideshow from "./productsPage/productsSlideshow/productsSlideshow"
import SortProductsBy from "./productsPage/sortby/sortby"
function Products() {
    return (
        <div id='productspage'>
            <Header/>
            <PSlideshow/>
            <SortProductsBy/>
            <Footer/>
        </div>
    )
}
export default Products