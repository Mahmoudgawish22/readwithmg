import '../WformC/formcontrol.scss';
import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import 'motion-css-animation/src/else/orbit.css'
import ama from "../../iamges/blind.svg"
import ScrollAnimation from 'react-animate-on-scroll';
class FormC extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ScrollAnimation animateIn="slideInRight" animateOnce='true'>
            <div id='formc'>
                <img id='formicon' className='characterimg animation orbit delay-05s' src={ama} alt='elAma'/>
                <p id='formContent'>
                    إن الشيء الأسوأ من العمى هو أن تكون الوحيد الذي يرى، تلك الجملة التي اعتمد ذوي الألباب قولها في مثل تلك الحالات، وهنا لا أعتقد أن الأمر بعيد تمامًا، فأنا على دراية تامة بما يحتويه هذا الموقع، ونحو ذلك
                    ينقسم إقرأ مع إم جي إلى ثلاثة أقسام، الأول هو الصفحة الرئيسية، والتي تحتوي على كافة الإتجاهات والتي يمكنك الولوج إليها عن طريق النزول إلى نفس والتحدث معه.
                    <br/>
                    <br/>
                    أما بالنسبة إلى جزء المنتجات، فسهولة يمكنك الذهاب إليه عن طريق ضغط الكلمة في الهيدر، ولكن بالمناسبة عليك النزول إلى نفس لكي تستطيع المرور، أو حتى لرؤية الهيدر الكامل. :D
                    <br/>
                    <br/>
                    وبالنسبة للجزء الأخير وهو المجتمع، فهو شيء يطول شرحه، ولكن يمكن القول بأنك تستطيع قراءة المقالات، وكتابتها كذلك، ومن المؤكد يمكنك التواصل مع القراء والكتاب، فما رأيك بالذهاب إلى نفس؟
                </p>
            </div>
            </ScrollAnimation>
        )
    }
}
export default FormC