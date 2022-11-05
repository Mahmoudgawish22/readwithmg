import '../Wsign/sign.scss';
import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import 'motion-css-animation/src/slide/slide-in-left.css';
import 'motion-css-animation/src/else/orbit.css'
import callCenter from "../../iamges/call-center.svg"
class Sign extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            statu: true,
            Email: '',
            password: '',
            Passwordrepeat: '',
            firstName: '',
            secondName: '',
            gender: '',
            bio: '',
            address: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        window.open('/readwithmg/home','_self');
    }
    handleChange(e) {
        let val = e.target.value;
        let name = e.target.name;
        this.setState(states=>{
            if (states.statu==false) {
                return {statu: states.statu,[name]:val,Passwordrepeat:states.Passwordrepeat,firstName:states.firstName,
                    secondName: states.secondName,gender: states.gender, bio: states.bio, address: states.address}
            } else {
                return {statu: states.statu,[name]:val}
            }
        })
    }
    handleClick() {
        this.setState(states=>{
            if (states.statu==true) {
                return {statu:false, Email: states.Email,password:states.password,Passwordrepeat:states.Passwordrepeat,firstName:states.firstName,
                secondName: states.secondName,gender: states.gender, bio: states.bio, address: states.address}
            } else {
                return {statu:true, Email: states.Email,password:states.password,Passwordrepeat:states.Passwordrepeat,firstName:states.firstName,
                    secondName: states.secondName,gender: states.gender, bio: states.bio, address: states.address}
            }
        })
    }
    render() {
        return (
            <div id='sign' >
                <div>
                <h1 id='title' class='text-center' style={{direction:'rtl'}}>
                  مرحبًا بك أخيرًا، إن كنت لا تتذكرني فأنا نفس، ويسعدني أن أقول لك، أنه لم يتبقى إلا خطوة واحدة لاكتشاف الموقع واستخدامه بكل أريحية
                  </h1>
                <p id='body' class='text-center' style={{direction:'rtl'}}>فقط، كل ما عليك هو الوصول إلى الحساب الخاص بك على موقعنا</p>
                {this.state.statu? 
                <form id='signup' onSubmit={this.handleSubmit}>
                <div class="form-group">
                  <label for="firstName">First Name</label>
                  <input type="text" onChange={this.handleChange} value={this.state.firstName} name='firstName' class="form-control" id="firstName" placeholder="Enter First Name" required/>
                </div>
                <div class="form-group">
                  <label for="secondName">Last Name</label>
                  <input type="text" onChange={this.handleChange} value={this.state.secondName} name='secondName' class="form-control" id="secondName" placeholder="Enter last Name" required/>
                </div>
                <div class="form-group">
                  <label for="Password">Password</label>
                  <input type="password" onChange={this.handleChange} value={this.state.password} name='password' class="form-control" id="Password" placeholder="Enter Password" required/>
                </div>
                <div class="form-group">
                  <label for="Passwordrepeat">Reenter Password</label>
                  <input type="password" onChange={this.handleChange} value={this.state.Passwordrepeat} name='Passwordrepeat' class="form-control" id="Passwordrepeat" placeholder="Enter Password Again" required/>
                </div>
                <div class="form-group">
                  <label for="Email">Email address</label>
                  <input type="email" onChange={this.handleChange} value={this.state.Email} name='Email' class="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter email" required/>
                </div>
                <br/>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="gender" id="male" value="Male"/>
                  <label class="form-check-label" for="male">
                    Male
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="gender" id="female" value="Female"/>
                  <label class="form-check-label" for="female">
                  Female
                  </label>
                </div>
                <br/>
                <br/>
                <div class="form-group">
                  <label for="bio">Breifly Describe Yourself</label>
                  <textarea name='bio' onChange={this.handleChange} value={this.state.bio} class="form-control" id="bio" rows="3" required></textarea>
                </div>
                <div class="form-group">
                  <label for="address">Enter Your Address</label>
                  <textarea name='address' onChange={this.handleChange} value={this.state.address} class="form-control" id="address" rows="3" required></textarea>
                </div>
                <button type="submit" class="btn btn-dark">Submit</button>
              </form>
                :<form onSubmit={this.handleSubmit}>
                <div class="form-group">
                  <label for="Email">Email address</label>
                  <input type="email" onChange={this.handleChange} value={this.state.Email} name='Email' class="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter email" required/>
                </div>
                <div class="form-group">
                  <label for="Password">Password</label>
                  <input type="password" onChange={this.handleChange} value={this.state.password} name='password' className="form-control" id="Password" placeholder="Password" required/>
                </div>
                <button type="submit" className="btn btn-dark">Submit</button>
              </form>
              }
              {this.state.statu==false? <div><h1 className='text-center check' style={{direction:'rtl'}}>ولكن، لو لم يكن لديك حساب،</h1><button onClick={this.handleClick} class='btn btn-link check text-center'>يمكنك التسجيل من هنا</button></div>
              :<div><h1 className='text-center check' style={{direction:'rtl'}}>وفي حالة امتلاكك لحساب بالفعل،</h1><button onClick={this.handleClick} class='btn btn-link check'>يمكنك تسجيل الدخول من هنا</button></div>}
                </div>
                <img id='sevice' src={callCenter} alt='Welcome'/>
            </div>
        )
    }
}
export default Sign