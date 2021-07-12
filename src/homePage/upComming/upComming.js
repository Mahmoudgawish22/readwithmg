import "../upComming/upComming.scss"
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import exp from "../../iamges/confetti.svg"
import exp2 from "../../iamges/exam.svg"
class UpComming extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id='upcomming'>
                <div>
                <h5 id='upcommingtitle'>Events On The Table</h5>
                
                </div>
                <ScrollAnimation animateIn="slideInRight" animateOnce='true'>
                <ul id='events'>
                    <li className='event'>
                        <a href='#' className='eventlink'>
                            <img className='eventimg' src={exp} alt='productx'/>
                            <div className='eventdetails'>
                            <h6 className='eventtitle'>Release of a novel</h6>
                            <h6 className='eventstatu'>Comming Soon</h6>
                            </div>
                        </a>
                    </li>
                    <li className='event'>
                        <a href='#' className='eventlink'>
                            <img className='eventimg' src={exp2} alt='productx'/>
                            <div className='eventdetails'>
                            <h6 className='eventtitle'>El-Malaz Quiz</h6>
                            <h6 className='eventstatu'>Open</h6>
                            </div>
                        </a>
                    </li>
                </ul>
                </ScrollAnimation>
            </div>
        )
    }
}
export default UpComming
