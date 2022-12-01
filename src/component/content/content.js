import React from "react";
import './content.css';

export default class Content extends React.Component{
    
    constructor(props){
        super(props)

        this.state = {
            questions :[
                {
                    questionText : '1. حداکثر سرعت مجازبرای سواری و وانت بارها دربزرگراهها برون شهری چقدر است؟ ',
                    answerOptions :[
                        {answerText :'110 کیلومتر بر ساعت' , isCorrect :true},
                        {answerText :'120 کیلومتر بر ساعت' , isCorrect :false},
                        {answerText :'100 کیلومتر بر ساعت' , isCorrect :false},
                        {answerText :'90 کیلومتر بر ساعت' , isCorrect :false}
                    ],
                },
                {
                    questionText : 'در خیابان‌ها و جاده‌هایی که نور کافی وجود دارد، ……………',
                    answerOptions :[
                        {answerText :' باید تنها از چراغ‌ های جانبی جلو و عقب استفاده نمود.' , isCorrect :true},
                        {answerText :'باید از نوربالا استفاده نمود.' , isCorrect :false},
                        {answerText :' تمام چراغ‌ ها را باید خاموش نمود.' , isCorrect :false},
                        {answerText :'باید تنها از نور پایین استفاده نمود.' , isCorrect :false}
                    ],
                },
                {
                    questionText : 'در راههای مسطح که دو طرف راه منتهی به کوه و پرتگاه می باشد حق تقدم عبور با کدامیک است؟',
                    answerOptions :[
                        {answerText :'وسیله ای که سمت کوه قرار دارد.' , isCorrect :false},
                        {answerText :'هر دو وسیله حق تقدم عبور دارند.' , isCorrect :false},
                        {answerText :'هیچکدام' , isCorrect :false},
                        {answerText :'وسیله ای که سمت پرتگاه قراردارد.' , isCorrect :true}
                    ],
                },
                {
                    questionText : 'در محل توقف(پارک) کنار خیابان حق تقدم با کیست؟',
                    answerOptions :[
                        {answerText :'وسیله نقلیه ای که بصورت مستقیم وارد پارک می شود.' , isCorrect :false},
                        {answerText :' وسیله ای که ضمن حرکت با دنده عقب مشغول پارک کردن است.' , isCorrect :true},
                        {answerText :'هر دو حق تقدم دارند.' , isCorrect :false},
                        {answerText :'هیچکدام' , isCorrect :false}
                    ],
                },
                {
                    questionText : 'حداقل فاصله طولی ایمنی در جاده برفی با سرعت۴۵ کیلومتر در ساعت چند طول اتومبیل است؟',
                    answerOptions :[
                        {answerText :'3' , isCorrect :false},
                        {answerText :'6' , isCorrect :false},
                        {answerText :'9' , isCorrect :true},
                        {answerText :'2' , isCorrect :false}
                    ],
                },
                {
                    questionText : 'دور زدن در چند متری پیچ ها و تقاطع ها و تونل ها ممنوع است؟',
                    answerOptions :[
                        {answerText :'120' , isCorrect :false},
                        {answerText :'100' , isCorrect :false},
                        {answerText :'50' , isCorrect :false},
                        {answerText :'150' , isCorrect :true}
                    ],
                },
                {
                    questionText : 'برای امن‌ کردن محل حادثه با چه اقدامی می‌توان صحنه را عاری از خطر نمود؟',
                    answerOptions :[
                        {answerText :'خاموش‌ کردن وسیله نقلیه حادثه‌ دیده.' , isCorrect :false},
                        {answerText :'مراقب سلامت خود باشید.' , isCorrect :false},
                        {answerText :'موارد ۱ و ۲' , isCorrect :true},
                        {answerText :'مصدوم را تا حد ممکن از محل دور نمایید.' , isCorrect :false}
                    ],
                },
                {
                    questionText : ' در حال رانندگی در جاده خیس به دنبال اتومبیلی دیگر ، فاصله زمانی ایمن از اتومبیل جلویی چقدر باید باشد ؟',
                    answerOptions :[
                        {answerText :'4 ثانیه' , isCorrect :false},
                        {answerText :'6 ثانیه' , isCorrect :true},
                        {answerText :'10 ثانیه' , isCorrect :false},
                        {answerText :'8 ثانیه' , isCorrect :false}
                    ],
                },
                {
                    questionText : 'در چه شرایطی می‌توان شاسی خودرو را عوض کرد؟',
                    answerOptions :[
                        {answerText :'در هیچ شرایطی نمی‌توان عوض نمود.' , isCorrect :false},
                        {answerText :' تنها با مجوز راهنمایی و رانندگی می‌توان به این کار اقدام نمود.' , isCorrect :true},
                        {answerText :' مجوز کارخانه سازنده برای این کار کافی است.' , isCorrect :false},
                        {answerText :' تعویض آن دل به خواه و بدون اشکال است.' , isCorrect :false}
                    ],
                },
                {
                    questionText : 'برای امن‌ کردن محل حادثه با چه اقدامی می‌توان صحنه را عاری از خطر نمود؟',
                    answerOptions :[
                        {answerText :'خاموش‌ کردن وسیله نقلیه حادثه‌ دیده.' , isCorrect :false},
                        {answerText :'مراقب سلامت خود باشید.' , isCorrect :false},
                        {answerText :'موارد ۱ و ۲' , isCorrect :true},
                        {answerText :'مصدوم را تا حد ممکن از محل دور نمایید.' , isCorrect :false}
                    ],
                },
            ],
            currentQuestion : 0,
            showScore : false,
            score : 0,
            miunes : 0,
            second : 0,
            timer:true,
            
        }
        let time = null;

        if(this.state.timer){
             time = setInterval(() => {
                this.setState((prev) =>{
                    return ({second : prev.second + 1})
                    
                })
                if(this.state.second === 59){
                    this.setState((prev) => {
                        return ({second: prev.second = 0 , miunes :prev.miunes + 1})
                    })
                }
              }, 1000);
            }
            
            function clear(){
                clearInterval(time);
            }
            
            

    }

    
 
    clichHandler(isCorrect){
        if(isCorrect){
          this.setState((prev) => {
             return ({score : prev.score + 1})
          })
        }

        if(this.state.miunes >= 3){
            
           alert("زمان شما به پایین رسید و شما " +`${this.state.score}` +"پاسخ صحیح دادید.")
          }


        if(this.state.currentQuestion === 9){
          this.setState({showScore : true})
     }else{
         this.setState((prev) => {
             return {currentQuestion : prev.currentQuestion + 1}})
          }
        
        }

    
    

    render(){
        return(
            <div className="content">
                      
            {this.state.showScore ? (
                    <div className="scored">
                        <h2>شما موفق شدید به{this.state.score}سوال از{this.state.questions.length}سوال جواب بدهید .</h2>
                    </div>) : (
                <div className="azmonDiv">
                    <p><span className="time">{this.state.second}</span> : <span className="time">{this.state.miunes}</span></p>
                    <div className="Question">
                        <span>سوال {this.state.currentQuestion + 1}</span>/10
                    </div>
                    <div className="text-Question">
                    {this.state.questions[this.state.currentQuestion].questionText}
                    </div>
                    <div className="answer">

                    {this.state.questions[this.state.currentQuestion].answerOptions.map((answer) => (
                        <p><span>{answer.answerText}</span><button  onClick={this.clichHandler.bind(this,answer.isCorrect)}> صحیح است</button></p>
                        ))}
                    </div>
                </div>
                    )}
            </div>
        )
    }
}
