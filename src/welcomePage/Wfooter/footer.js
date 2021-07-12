import '../Wfooter/footer.scss';
import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import logo from "../../iamges/books2.svg";
import ScrollAnimation from 'react-animate-on-scroll';
class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ScrollAnimation animateIn="slideInUp" animateOnce='true'>
            <div id='footer'>
                <div className='footercontent'>
                <div id='footerlogo'>
                <h3 id="logo">Read With MG</h3> 
                <img src={logo} alt='logo-pen'/>
                </div>
                <p className='icondiscrb'>
                    موقع إقرأ مع إم جي، هو موقع جديد متعلق بالكتابة، والذي تم تطويره من خلال كاتبه "م/ محمود جاويش".
                    <br/>
                    صُمم الموقع كاملًا باستخدام تكنولوجيا الـMern Stack
                    <br/>
                    كما أن الـSVG مصدرها FlatIcon.com
                    <br/>
                    <br/>
                    للتواصل واتساب: 01008383020
                    <br/>
                    <br/>
                    2021
                </p>
                </div>
            </div>
            </ScrollAnimation>
        )
    }
}
export default Footer