import "../sortby/sortby.scss"
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import firstSlide from '../../iamges/products.jpg'
import secondSlide from '../../iamges/pexels-photo-2397414.jpeg'
import fourthSlide from '../../iamges/pexels-johannes-plenio-2080960.jpg'
import Products from "../productsallansort/productssorted"
class SortProductsBy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choose: 0
        }
        this.handlClick = this.handlClick.bind(this);
    }
    handlClick(str) {
        if (str === 'kol') {
            document.getElementById('btn1').style.backgroundImage=`url(${firstSlide})`;
            document.getElementById('btn2').style.backgroundImage='none'
            document.getElementById('btn3').style.backgroundImage='none';

            document.getElementById('btn1').style.order='1'
            document.getElementById('btn2').style.order='2'
            document.getElementById('btn3').style.order='0'

            document.getElementById('btn1').style.transform='scale(1.2)';
            document.getElementById('btn2').style.transform='scale(1)';
            document.getElementById('btn3').style.transform='scale(1)';

            document.getElementById('btn1').style.zIndex='1'
            document.getElementById('btn2').style.zIndex='0'
            document.getElementById('btn3').style.zIndex='0'  

            this.setState({choose:1})

        } else if (str=='nov') {
            document.getElementById('btn2').style.backgroundImage=`url(${secondSlide})`;
            document.getElementById('btn1').style.backgroundImage='none';
            document.getElementById('btn3').style.backgroundImage='none';

            document.getElementById('btn1').style.order='0'
            document.getElementById('btn2').style.order='1'
            document.getElementById('btn3').style.order='2'

            document.getElementById('btn2').style.transform='scale(1.2)';
            document.getElementById('btn1').style.transform='scale(1)';
            document.getElementById('btn3').style.transform='scale(1)';

            document.getElementById('btn2').style.zIndex='1'
            document.getElementById('btn1').style.zIndex='0'
            document.getElementById('btn3').style.zIndex='0'

            this.setState({choose:2});

        }
        else {
            document.getElementById('btn3').style.backgroundImage=`url(${fourthSlide})`;
            document.getElementById('btn1').style.backgroundImage='none';
            document.getElementById('btn2').style.backgroundImage='none';

            document.getElementById('btn1').style.order='0'
            document.getElementById('btn2').style.order='2'
            document.getElementById('btn3').style.order='1'

            document.getElementById('btn3').style.transform='scale(1.2)';
            document.getElementById('btn1').style.transform='scale(1)';
            document.getElementById('btn2').style.transform='scale(1)';

            document.getElementById('btn2').style.zIndex='0'
            document.getElementById('btn1').style.zIndex='0'
            document.getElementById('btn3').style.zIndex='1'

            this.setState({choose:3});
            
        }
    }
    render() {
        return (
            <div id='sortingoption'>
                <ScrollAnimation animateIn='slideInUp' animateOnce='true'>
                <h1 id='sorttitle'>
                    ماذا تريد أن تتصفح من المنتجات؟
                </h1>
                <div id='options'>
                    <button id='btn1' onClick={()=>this.handlClick('kol')} type='button' className='sortingbtn'>
                        الكل
                    </button>
                    <button id='btn2' onClick={()=>this.handlClick('nov')} type='button' className='sortingbtn'>
                        رواية
                    </button>
                    <button id='btn3' onClick={()=>this.handlClick('stor')} type='button' className='sortingbtn'>
                        قصة
                    </button>
                </div>
                </ScrollAnimation>
                <Products choose={this.state.choose}/>
            </div>
        )
    }
}
export default SortProductsBy