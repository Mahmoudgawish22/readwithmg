import '../Wdiscrb/discrb.scss';
import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import 'motion-css-animation/src/else/orbit.css'
import Arkan from "../../iamges/cowboy.svg"
import novels from "../../iamges/newopen-book.svg"
import story from "../../iamges/newebook.svg"
import article from "../../iamges/PaperAndPencil2.svg"
import ScrollAnimation from 'react-animate-on-scroll';
class Discrb extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ScrollAnimation animateIn="slideInLeft" animateOnce='true'>
            <div id='discrb' >
                <img className='discrbicon characterimg animation orbit delay-05s' src={Arkan} alt='arkan'/>
                <div id='discrbcontent'>
                    <p id='discrbtitle'>
                        مرحبًا بك مجددًا صديقي العزيز، في هذا القسم سنجيب عن السؤال المهم..لماذا إقرأ مع إم جي؟
                    </p>
                    <p id='discrbsubcontent'>
                        في عالمنا الحالي، تطرق كل شيء نحو التكنولوجيا، من محال تجارية، إلى أعمال من المنزل، وكذلك القراءة، والقراءة في عالمنا لم تتقدم في طريقة تقديمها بالشكل الذي يسمح لها بالمحافظة على مكانها المرموق بين أسهم التطوير المرتفعة كل يوم، ولذلك نسعى في هذا المكان، إلى تقديم تلك الوجبة بشكل مختلف ومميز.
                    </p>
                </div>
                <div id='props'>
                    <div className='prop'>
                        <img className='discbicon' src={novels} alt='novels'/>
                        <p className='icondiscrb'>
                            لدينا ما يقرب من خمس روايات ممتعة يمكنك شراءها أو قراءة ملخصها
                            </p>
                    </div>
                    <div className='prop'>
                        <img className='discbicon' src={story} alt='novels'/>
                        <p className='icondiscrb'>
                            لدينا ما يقرب من عشر قصص ممتعة يمكنك قراءتها
                            </p>
                    </div>
                    <div className='prop'>
                        <img className='discbicon' src={article} alt='novels'/>
                        <p className='icondiscrb'>
                            يمكنك كتابة وقراءة المقالات التي تريد في مجتمعنا الخاص بالكتاب.
                            </p>
                    </div>
                </div>
            </div>
            </ScrollAnimation>
        )
    }
}
export default Discrb