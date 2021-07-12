import "./homepage.scss"
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import Header from "./header"
import Abovecontent from "./welcomePage/Wabove/abovecontent"
import ProductsDisplay from "./homePage/products/productsDisplay"
import CommunityDisplay from "./homePage/community/communityDisplay"
import AboutDisplay from "./homePage/aboutMG/aboutDisplay"
import UpComming from "./homePage/upComming/upComming"
import Footer from "./welcomePage/Wfooter/footer"
function Home() {
    return (
        <div id='homepage'>
            <Header/>
            <Abovecontent/>  
            <div id='rightleft'>
            <div id='left'>
                <ProductsDisplay/>
                <CommunityDisplay/>
            </div>
            <div id='right'>
            <AboutDisplay/>
            <div id='showless'>
            <UpComming/>
            </div>
            </div>
            </div>
            <Footer/>
        </div>
    );
}
export default Home