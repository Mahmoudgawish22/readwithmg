import "../products/productsDisplay.scss"
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import exp from "../../iamges/malaz.jpg"
import exp2 from "../../iamges/bok.png"
class ProductsDisplay extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id='productsdisplay'>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <h5 id='productstitle'>Products | Trendy Novel and Story:-</h5>
                <a href='/#products' className='btn btn-dark btn-sm'>See More!</a>
                </div>
                <ScrollAnimation animateIn="slideInLeft" animateOnce='true'>
                <ul id='products'>
                    <li className='items'>
                        <a  className='itemslink'>
                            <img className='itemimg' src={exp} alt='productx'/>
                            <div className='itemdetails'>
                            <h4 className='itemtitle'>البحث عن الملاذ</h4>
                            <h6 className='itemdiscrb'>رواية</h6>
                            <label className='itemlikes'>100 <i class="fab fa-opencart"></i></label>
                            </div>
                        </a>
                    </li>
                    <li className='items'>
                        <a  className='itemslink'>
                            <img className='itemimg' src={exp2} alt='productx'/>
                            <div className='itemdetails'>
                            <h4 className='itemtitle'>بوق يوم الثلاثاء</h4>
                            <h6 className='itemdiscrb'>مجموعة قصصية</h6>
                            <label className='itemlikes'>5 <i class="fab fa-opencart"></i></label>
                            </div>
                        </a>
                    </li>
                </ul>
                </ScrollAnimation>
            </div>
        )
    }
}
export default ProductsDisplay