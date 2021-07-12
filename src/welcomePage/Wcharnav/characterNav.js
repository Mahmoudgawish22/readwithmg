import "../Wcharnav/characterNav.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import 'motion-css-animation/src/else/orbit.css'
import Arkan from "../../iamges/cowboy.svg"
import nafs from "../../iamges/call-center.svg"
import ama from "../../iamges/blind.svg"
import ScrollAnimation from 'react-animate-on-scroll';

class CharNav extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ScrollAnimation animateIn="slideInRight" animateOnce='true'>
            <div id='char' class=''>
            <div className='character ' style={{justifyContent:'flex-end'}}>
                    <p className='breif box'>
                    2 <br/>
                        أما أنا فأدعى الأعمى، البطل المفضل للكاتب على الإطلاق، وكما أعتبر المسؤول عن إرشادك لأقسام الموقع، وما الذي يمكنك فعله معنا.
                        </p>
                    <img className='characterimg animation orbit delay-05s' src={ama} alt='arkan'/>
                </div>
                <div className='character'>
                    <img className='characterimg animation orbit delay-05s' src={Arkan} alt='arkan'/>
                    <p className='breif'>
                        1 <br/>
                        مرحبًا بك في إقرأ مع إم جي، معك أركان، وأنا بطل الرواية الأخيرة للكاتب، وكما أعتبر المسؤول الأول عن تعريف حضراتكم بالموقع وخصائصه.
                        </p>
                </div>
                <div className='character' style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <img className='characterimg' src={nafs} alt='arkan'/>
                    <p className='breif'>
                        وأخيرًا أنا أدعى نفس، بطل رواية البحث عن الملاذ، أعلم أنك لا تعرفني بعد، ولهذا أنا المسؤول عن إرشادك للإنضمام إلى مجتمعنا، فأهلًا بك.
                        </p>
                </div>
            </div>
            </ScrollAnimation>

        )
    }
}
export default CharNav