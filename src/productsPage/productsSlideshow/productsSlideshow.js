import "../productsSlideshow/productsSlideshow.scss"
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import firstSlide from '../../iamges/products.jpg'
import secondSlide from '../../iamges/pexels-photo-2397414.jpeg'
import fourthSlide from '../../iamges/pexels-johannes-plenio-2080960.jpg'
import ReusableHeader from "../../productsPage/reusableHeader/reusableHeader"
import productLogo from "../../iamges/book.svg"
import 'motion-css-animation/src/slide/slide-in-right.css';
import 'motion-css-animation/src/fade/fade-in-right.css';
class PSlideshow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: 0
        }
        this.handleSlideshow = this.handleSlideshow.bind(this);
    }
    handleSlideshow() {
        this.setState(states=>{
            if (states.temp==0) {
                return {temp:1}
            } else if (states.temp==1) {
                return {temp:2}
            } else if (states.temp==2) {
                return {temp:0}
            }
        })
    }
    componentDidMount() {
       var SlideShow = setInterval(this.handleSlideshow,5000)
    }
    render() {
        return (
            <div id='pslideshow'>
                {this.state.temp==0? 
                <div id='pslide1' className='pslide' style={{backgroundImage:`url(${secondSlide})`}}>
                <ReusableHeader text='Products' img={productLogo} disc='اكتشف كل ما هو غريب خارج عن العادة، وكل ماهو معتاد ولكن مقدم بصورة خيالية تتطرق للتفاصيل.'/>
                <div className='dots'>
                <i class="fas fa-dot-circle"></i>
                <i class="far fa-dot-circle"></i>
                <i class="far fa-dot-circle"></i>
                </div>
                </div>
            : this.state.temp==1?
            <div id='pslide2' className='pslide' style={{backgroundImage:`url(${firstSlide})`}}>
                <ReusableHeader text='Products' img={productLogo} disc='فضاء من الإبداع، حيث يمكنك التعرض إلى كل ما ترغب به من روايات وقصص كُتبت خصيصًا من أجلك.'/>
                <div className='dots'>
                <i class="far fa-dot-circle"></i>
                <i class="fas fa-dot-circle"></i>
                <i class="far fa-dot-circle"></i>
                </div>
                </div>
                : 
                <div id='pslide3' className='pslide' style={{backgroundImage:`url(${fourthSlide})`}}>
                <ReusableHeader text='Products' img={productLogo} disc='يعيش الناس حياتهم بناءً على الامال، فإذا ما فقدوها اضمحلوا، والاحلام لا تتجدد إلا بفهم ماهية الأشياء من حولك، فتتعلم، وتبصر الشغف لأحلام جديدة كذلك.'/>
                <div className='dots'>
                <i class="far fa-dot-circle"></i>
                <i class="far fa-dot-circle"></i>
                <i class="fas fa-dot-circle"></i>
                </div>
                </div>
                }
            </div>
        
        )
    }
}
export default PSlideshow