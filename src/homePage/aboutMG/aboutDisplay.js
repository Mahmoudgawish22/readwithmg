import "../aboutMG/aboutDisplay.scss"
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import exp from "../../iamges/DSC_0796.jpg"
class AboutDisplay extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id='aboutdisplay'>
                <div style={{display:'flex',justifyContent:'flex-end'}}>
                {/*<h2 id='abouttitle'>About Manager</h2>*/}
                <button type='button' className='btn btn-dark btn-sm'>See Portfolio!</button>
                </div>
                <ScrollAnimation animateIn='slideInLeft' animateOnce='true'>
                    <div id='aboutbody'>
                    <img src={exp} alt='logoforportfolio' id='portfolioimg'/>
                    <p id='portfoliocontext'>
                        محمود صلاح جاويش، كاتب شاب، ومهندس، من مواليد 12/4/1996، دسوق محافظة كفر الشيخ، حاصل على بكالريوس هندسة الكمبيوتر من جامعة الأهرام الكندية...
                    </p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}
export default AboutDisplay