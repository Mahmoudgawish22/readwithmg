import "../community/communityDisplay.scss"
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import exp from "../../iamges/elaamaart.jpg"
import exp2 from "../../iamges/zelart.jpg"
import exp3 from "../../iamges/animeart.jpg"
class CommunityDisplay extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id='comunitydisplay'>
                <div style={{display:'flex',justifyContent:'space-between', alignItems:'center'}}>
                <h5 id='comtitle'>Community | Trendy Articles:-</h5>
                <button type='button' className='btn btn-dark btn-sm'>Enter Your Community!</button>
                </div>
                <ScrollAnimation animateIn="slideInRight" animateOnce='true'>
                <ul id='articles'>
                    <li className='article'>
                        <a href='#' className='articlelink'>
                            <img className='articleimg' src={exp} alt='productx'/>
                            <div className='articledetails'>
                            <h4 className='articletitle'>بين السعي والنتيجة</h4>
                            <h6 className='articlediscrb'>محمود جاويش</h6>
                            <label className='articlelikes'>100 <i class="fas fa-heart"></i></label>
        </div> 
                        </a>
                    </li>
                    <li className='article'>
                        <a href='#' className='articlelink'>
                            <img className='articleimg' src={exp2} alt='productx'/>
                            <div className='articledetails'>
                            <h4 className='articletitle'>ظل الإبداع</h4>
                            <h6 className='articlediscrb'>محمود جاويش</h6>
                            <label className='articlelikes'>5 <i class="fas fa-heart"></i></label>
                            </div>
                        </a>
                    </li>
                    <li className='article'>
                        <a href='#' className='articlelink'>
                            <img className='articleimg' src={exp3} alt='productx'/>
                            <div className='articledetails'>
                            <h4 className='articletitle'>إنيمي</h4>
                            <h6 className='articlediscrb'>محمود جاويش</h6>
                            <label className='articlelikes'>5 <i class="fas fa-heart"></i></label>
                            </div> 
                        </a>
                    </li>
                </ul>
                </ScrollAnimation>
            </div>
        )
    }
}
export default CommunityDisplay