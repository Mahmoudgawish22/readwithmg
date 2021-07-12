import "../Wabove/abovecontent.scss";
import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import one from '../../iamges/1281229876.svg'
import two from '../../iamges/1410828541.svg'
import three from '../../iamges/1489798288.svg'
import four from '../../iamges/1509784321.svg'
import five from '../../iamges/1521986151.svg'
import six from '../../iamges/book.svg'
import seven from '../../iamges/book_red.svg'
import eight from '../../iamges/book2.svg'
import nine from '../../iamges/book3.svg'
import ten from '../../iamges/Book-3.svg'
import eleven from '../../iamges/books.svg'
import twilve from '../../iamges/books1.svg'
import thirteen from '../../iamges/books2.svg'
import fourteen from '../../iamges/book-stack.svg'
import fiveteen from '../../iamges/carlitos-Simple-Pencil.svg'
import sixteen from '../../iamges/Clipboard-check.svg'
import seventeen from '../../iamges/ee_Book_Flow.svg'
import nineteen from '../../iamges/freehand-book.svg'
import twinty from '../../iamges/open-book.svg'
import twintyone from '../../iamges/open-book1.svg'
import twintytwo from '../../iamges/PaperAndPencil2.svg'
import twintythree from '../../iamges/pencil_pen-publicdomainvectors.svg'
import twintyfour from '../../iamges/publicdomainq-0005842ngphrq.svg'
import twintyfive from '../../iamges/publicdomainq-reading.svg'
import twintysix from '../../iamges/raseone-quill-3.svg'
import twintyseven from '../../iamges/storytelling.svg'
import twintyeight from '../../iamges/newbook.svg'
import thirtyseven from '../../iamges/newguidebook.svg'
import thirtyeight from '../../iamges/newhomework.svg'
import 'motion-css-animation/src/else/float.css';

class AboveContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animatedright: [one,two,three,four,five,six,seven,eight,nine,ten,twintyone,twintytwo,twintythree,twintyfour,
              twintyeight],
            animatedleft: [eleven,twilve,thirteen,fourteen,fiveteen,sixteen,seventeen,nineteen,twinty,twintyfive,twintysix,twintyseven,
            thirtyseven,thirtyeight],
            index: Math.floor(Math.random()*36),
      quote: [
        {text: 'أهم شيء هو ألا تتوقف عن السؤال.', author: 'ألبرت آينشتاين'},
        {text: "أنا لست موهوب ، أنا فضولي.", author: 'ألبرت آينشتاين'},
        {text: "إن لم تختبر الفشل فهذا يعني بأنك لم تختبر شيئا جديدا في حياتك.", author: 'وودي آلن'},
        {text: "إذا لم تنجح في البداية، حاول، حاول مجدد!ا", author: 'و. ي. هيكسون'},
        {text: "يجب أن نكون مثالاً للتغير الذي ننشده في العالم من حولنا", author: 'مهاتما غاندي'},
        {text: "سقوط الإنسان ليس فشلاً .. و لكن الفشل أن يبقى حيث سقط.", author: 'توماس إديسون'},
        {text: "اسلم طريقة للبدء هي التوقف عن الحديث والبدء بالعمل.", author: 'والت ديزني'},
        {text: "وقتك محدود، فلا تهدره في أن تعيش حياة شخص آخر.. تحلَ بالشجاعة لأن تتبع قلبك وحدسك؛ فكليهما يعرفان بطريقةٍ ما بالفعل ما تريد حقًا أن تكون عليه. كل ما عداهما ثانوي.", author: 'ستيف جوبز'},
        {text: "لقد تعلمت أنه لا يمكن أن تحصل على كل شيء وتفعل كل شيء في الوقت ذاته.", author: 'أوبرا وينفري'},
        {text: "فيما مضى كنت أحاول تغيّر العالم، أما الآن، وقد لامستني الحكمة، فلا أحاول أن أغير شيء سوى نفسي.", author: 'جلال الدين الرومي'},
        {text: "أزهر من جديد، أثبت لهم أن الذبول خرافة.", author: 'شمس التبريزي'},
        {text: "إرفع كلماتك ولا ترفع صوتك؛ فالمطر هو الذي يُنبت الورود وليس الرعد.", author: 'جلال الدين الرومي'},
        {text: "إذا لم يكن للحياة معنى فلم لا نخلق لها معنى؟", author: 'نجيب محفوظ'},
        {text: "ما أسعد من لا يضيع خفقان قلبه في العدم.", author: 'نجيب محفوظ'},
        {text: "الثقة بالنفس كلام فارغ ..سوف يدهشك كم الأشياء التي لا تعرفها أو لا تجيدها .. المهم أن تثق بقدرتك على أن تكون أفضل.", author: 'أحمد خالد توفيق'},
        {text: "إنّهُ طَريقك وَحدك، قد يُرافقكَ فِيه أحدُهم لِفترة مِنَ الوَقتِ، لَكِن لَنْ يُكمله أحدٌ غَيرُك.", author: 'جلال الدين الرومي'},
        {text: "لن تسير وحدك أبدً", author: 'مشعجو ليفربول'},
        {text: "دواؤك فيك وما تُبصر وداؤك منك وما تَشعر وَتزعم أنك جرمٌ صغير،،وفيك انطوى العالمُ الأكبرُ", author: 'الإمام علي بن أبي طالب (رضي الله عنه)'},
        {text: "ما لَم تبكِ الغيمة ، من أين للبُستان أن يَـبتسم.", author: 'جلال الدين الرومي'},
        {text: "ولتعلم أن ما تسعى إليه يسعى إليك", author: 'جلال الدين الرومي'},
        {text: "لا تنطفئ ، ربما كنت لأحدهم سراجا وأنت لا تشعر.", author: 'جلال الدين الرومي'},
        {text: "واسأل نفسك مع شروق الشمس، متى ستشرق أنت؟", author: 'جلال الدين الرومي'},
        {text: "في اللحظة التي تتقبل بها كل شيء ، حتى الآلام , سيفتح لك الباب.", author: 'جلال الدين الرومي'},
        {text: "لقد كرهت كل دقيقة من التدريب، ولكن قلت: لا تتوقف. تعانى الآن وتعيش بقية حياتك بطلا.", author: 'محمد علي كلاي'},
        {text: "الرجل الذى ينظر للعالم نفسه فى الخمسين من عمره كما فعل فى العشرين من عمره أهدر 30 عامًا من حياته.", author: 'محمد علي كلاي'},
        {text: "من لا يكون شجاعًا بما يكفى لتحمل المخاطر لن يحقق أى إنجاز فى الحياة.", author: 'محمد علي كلاي'},
        {text: "و كلما أمسكت بحالة من حالاتي و قلت هذا هو أنا .. ما تلبث هذه الحالة أن تفلت من أصابعي و تحل محلها حالة أخرى .. هي أنا .. أيضاً.", author: 'مصطفى محمود'},
        {text: "اتباع التقاليد لا يعني أن الأموات أحياء، بل أن الأحياء أموات.", author: 'بن خلدون'},
        {text: "يوزن المرء بقوله، ويقوّم بفعله.", author: 'بن خلدون'},
        {text: "سأصبر حتى يعجز الصبر عن صبري..سأصبر حتى ينظر الرحمن في أمري..سأصبر حتى يعلم الصبر..أني صبرت على شئٍ أمرّ من الصبر", author: 'الإمام علي بن أبي طالب (رضي الله عنه)'},
        {text: "ولربما ابتسم الوقور من الأذى وفؤاده من حِرِّهِ يَتَأوَّه", author: 'الإمام علي بن أبي طالب (رضي الله عنه)'},
        {text: "لقد أضاء الصبح لذى عينين", author: 'الإمام علي بن أبي طالب (رضي الله عنه)'},
        {text: "عقل الكآتب في قلمه", author: 'الإمام علي بن أبي طالب (رضي الله عنه)'},
        {text: "وقيمة المرء ما قد كان يُحسنه والجاهلون لأهل العلم اعداءُ .. فقم بعلم وﻻ تطلب به بدلاً فالناس موتى واهل العلم احياءُ.", author: 'الإمام علي بن أبي طالب (رضي الله عنه)'},
        {text: "أكبر العيب أن تعيب ما فيك مثله.", author: 'الإمام علي بن أبي طالب (رضي الله عنه)'},
        {text: "لحظة صبر في لحظة غضب تمنع ألف لحظة من الندم.", author: 'الإمام علي بن أبي طالب (رضي الله عنه)'},
      ]
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(states=>{
          let index= Math.floor(Math.random()*36);
          let quote = [...states.quote];
          if (states.index==index&&index==states.quote.length-1) {
            return {index: index-1, quote: quote}
          } else if (states.index==index&&index==0) {
            return {index: index+1, quote: quote}
          } else if (states.index==index) {
            return {index: index+1, quote: quote}
          } else {
            return {index: index, quote: quote}
          }
        })
      }
    render() {
        return (
            <div id='aboveContent' style={{backgroundColor:'rgb(39, 48, 61)',height:'657px'}}>
            <svg width='100%' height='657px'>
            {this.state.animatedright.map(item=>{return <image className='App-logo' href={item} alt='animeicon' x={Math.random()*1300} y={Math.random()*657} width='40px' height='40px'/>})}
            {this.state.animatedleft.map(item=>{return <image className='App-logo2' href={item} alt='animeicon' x={Math.random()*1300} y={Math.random()*657} width='30px' height='30px'/>})}
            </svg>
            <div id='quote-box' class='animation float delay-2s'>
            <h3 id='text'><i style={{color:'#212529', marginLeft:'5px'}} class="fas fa-quote-right"></i> {this.state.quote[this.state.index].text}</h3>
            <h6 id='author'>- {this.state.quote[this.state.index].author}</h6>
            <div id='allbuttons'>
            <button id='new-quote' className="btn btn-dark" onClick={this.handleClick}>New Quote!</button>
            <div id='socialbuttons'>
            <a className="btn" href='twitter.com/intent/tweet' target='_blank' id='tweet-quote'><i style={{color:'#212529'}} class="fab fa-twitter"></i></a>
            <a className="btn" href='#' target='_blank' id='post-quote'><i style={{color:'#212529'}} class="fab fa-facebook"></i></a>
            </div>
            </div>
            </div>
            </div>
        )
    }
}
export default AboveContent