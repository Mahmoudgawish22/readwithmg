import "../productsallansort/productssorted.scss"
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import exp from "../../iamges/malaz.jpg"
import exp2 from "../../iamges/bok.png"
import exp3 from "../../iamges/arkan.jpg"
import exp4 from "../../iamges/a3ma.png"
import ama from "../../iamges/blind.svg"
function Products(props) {
    if (props.choose==0) {
    return (
        <div id='products0'>
            <label style={{fontSize:'80px'}}><i style={{color:'#10131a'}} class="fas fa-bed"></i></label>
            <h3 style={{fontFamily:'monospace',direction:'ltr'}}>Wake me up by choosing one of our sorting methods Zzz..</h3>
        </div>
    )
} else if (props.choose==1) {
    return (
        <div id='products1'>
            <div className='sortingMethod'>
            <img id='sortingguide' src={ama} alt='elAma'/>
            <h3 style={{color:'#10131a'}}>
                    إليك كل المنتجات..
            </h3>
            </div>
                <ul className='sortedProducts'>
                    <li className='sortedItems novel'>
                        <a href='#' className='itemslink'>
                            <img className='sorteditemimg' src={exp} alt='productx'/>
                            <div className='sorteditemdetails'>
                            <h4 className='sorteditemtitle'>البحث عن الملاذ</h4>
                            <h6 className='sorteditemdiscrb'>رواية</h6>
                            <label className='sorteditemlikes'>100 <i class="fab fa-opencart"></i></label>
                            </div>
                        </a>
                    </li>
                    <li className='sortedItems story'>
                        <a href='#' className='itemslink'>
                            <img className='sorteditemimg' src={exp2} alt='productx'/>
                            <div className='sorteditemdetails'>
                            <h4 className='sorteditemtitle'>بوق يوم الثلاثاء</h4>
                            <h6 className='sorteditemdiscrb'>مجموعة قصصية</h6>
                            <label className='sorteditemlikes'>100 <i class="fab fa-opencart"></i></label>
                            </div>
                        </a>
                    </li>
                    <li className='sortedItems novel'>
                        <a href='#' className='itemslink'>
                            <img className='sorteditemimg' src={exp3} alt='productx'/>
                            <div className='sorteditemdetails'>
                            <h4 className='sorteditemtitle'>أركان</h4>
                            <h6 className='sorteditemdiscrb'>رواية</h6>
                            <label className='sorteditemlikes'>100 <i class="fab fa-opencart"></i></label>
                            </div>
                        </a>
                    </li>
                    <li className='sortedItems story'>
                        <a href='#' className='itemslink'>
                            <img className='sorteditemimg' src={exp4} alt='productx'/>
                            <div className='sorteditemdetails'>
                            <h4 className='sorteditemtitle'>الأعمى وقصص أخرى</h4>
                            <h6 className='sorteditemdiscrb'>مجموعة قصصية</h6>
                            <label className='sorteditemlikes'>100 <i class="fab fa-opencart"></i></label>
                            </div>
                        </a>
                    </li>
                </ul>
        </div>
    )
} else if (props.choose==2) {
    return (
        <div id='products1'>
            <div className='sortingMethod'>
            <img id='sortingguide' src={ama} alt='elAma'/>
            <h3 style={{color:'#10131a'}}>
                    إليك المنتجات الروائية..
            </h3>
            </div>
                <ul className='sortedProducts'>
                    <li className='sortedItems novel'>
                        <a href='#' className='itemslink'>
                            <img className='sorteditemimg' src={exp} alt='productx'/>
                            <div className='sorteditemdetails'>
                            <h4 className='sorteditemtitle'>البحث عن الملاذ</h4>
                            <h6 className='sorteditemdiscrb'>رواية</h6>
                            <label className='sorteditemlikes'>100 <i class="fab fa-opencart"></i></label>
                            </div>
                        </a>
                    </li>
                    <li className='sortedItems novel'>
                        <a href='#' className='itemslink'>
                            <img className='sorteditemimg' src={exp3} alt='productx'/>
                            <div className='sorteditemdetails'>
                            <h4 className='sorteditemtitle'>أركان</h4>
                            <h6 className='sorteditemdiscrb'>رواية</h6>
                            <label className='sorteditemlikes'>100 <i class="fab fa-opencart"></i></label>
                            </div>
                        </a>
                    </li>
                </ul>
        </div>
    )
} else {
    return (
        <div id='products1'>
            <div className='sortingMethod'>
            <img id='sortingguide' src={ama} alt='elAma'/>
            <h3 style={{color:'#10131a'}}>
                    إليك المنتجات القصصية..
            </h3>
            </div>
                <ul className='sortedProducts'>
                    <li className='sortedItems story'>
                        <a href='#' className='itemslink'>
                            <img className='sorteditemimg' src={exp2} alt='productx'/>
                            <div className='sorteditemdetails'>
                            <h4 className='sorteditemtitle'>بوق يوم الثلاثاء</h4>
                            <h6 className='sorteditemdiscrb'>مجموعة قصصية</h6>
                            <label className='sorteditemlikes'>100 <i class="fab fa-opencart"></i></label>
                            </div>
                        </a>
                    </li>
                    <li className='sortedItems story'>
                        <a href='#' className='itemslink'>
                            <img className='sorteditemimg' src={exp4} alt='productx'/>
                            <div className='sorteditemdetails'>
                            <h4 className='sorteditemtitle'>الأعمى وقصص أخرى</h4>
                            <h6 className='sorteditemdiscrb'>مجموعة قصصية</h6>
                            <label className='sorteditemlikes'>100 <i class="fab fa-opencart"></i></label>
                            </div>
                        </a>
                    </li>
                </ul>
        </div>
    )
}
}
export default Products