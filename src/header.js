import userPhoto from './iamges/blind.svg';
import logo from "./iamges/books2.svg";
import "../src/header.scss";
import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Dropdown from 'react-bootstrap/Dropdown';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logedIn: false,
            userInfo: ['Mahmoud Gawish',userPhoto]
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(states=>{
            if (states.logedIn) {
                return {logedIn: false, userInfo: states.userInfo}
            } else {
                return {logedIn: true, userInfo: states.userInfo}
            }
        })
    }
    render() {
        return (
            <div id='header' className='container-fluid'>
                <div id='left-header'>
                <h3 id="logo">Read With MG</h3> 
                <img src={logo} alt='logo-pen'/>
                </div>
                <div id='right-header'>
                <ul id="nav-list">
                  <li className='dis'><a class="nav-link" href="/readwithmg/#home" target="_self"><i class="fas fa-door-closed"></i> Home</a></li>
                  <li className='dis'><a class="nav-link" href='/readwithmg/#'  target="_self"><i class="fas fa-info-circle"></i> About</a></li>
                  <li className='dis'><a class="nav-link" href="/readwithmg/#products" target="_self"><i class="fas fa-book"></i> Products</a></li>
                  <li><Dropdown>
                    <Dropdown.Toggle role="button" id="dropdownMenuLink">
                      <img id='userPhoto' src={this.state.userInfo[1]} alt={this.state.userInfo[0]}/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item><i class="fas fa-address-card icons"></i> Profile</Dropdown.Item>
                      <Dropdown.Item><i class="fab fa-opencart icons"></i> My Cart</Dropdown.Item>
                      <Dropdown.Item><i class="fas fa-book icons"></i>   My Books</Dropdown.Item>
                      <hr></hr>
                      <Dropdown.Item href="/readwithmg/#home"><i class="fas fa-door-closed icons"></i> Home</Dropdown.Item>
                      <Dropdown.Item href="/readwithmg/#"><i class="fas fa-info-circle icons"></i> About</Dropdown.Item>
                      <Dropdown.Item href="/readwithmg/#products"><i class="fas fa-book icons"></i> Products</Dropdown.Item>
                      <Dropdown.Item><i class="fas fa-book icons"></i>   My Books</Dropdown.Item>
                      <hr></hr>
                      <Dropdown.Item href="/readwithmg/#"><i style={{color:'black',fontSize:'18px',marginRight:'4px'}} class="fas fa-sign-out-alt"></i> Sign Out</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown></li>
                </ul>
                </div>
                {/*{this.state.logedIn==false &&
                  <li className='enb'><div class="dropdown show">
                    <a class="btn btn-link nav-link dropdown-toggle"  role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Menu
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <a class="dropdown-item" href="#home" target="_self"><i class="fas fa-door-closed icons"></i> Home</a>
                      <a class="dropdown-item" href="#about" target="_self"><i class="fas fa-info-circle icons"></i> About</a>
                      <a class="dropdown-item" href="#products" target="_self"><i class="fas fa-book icons"></i> Products</a>
                      <a class="dropdown-item" href="#comunity" target="_self"><i class="fas fa-users icons"></i> Community</a>
                      <div class="dropdown-divider"></div>
                      <a class="nav-link" style={{color:'rgb(39, 48, 61)',fontSize:'16px',display:'flex',alignItems:'center'}} onClick={this.handleClick} href='#home' target="_self"><i style={{color:'black',fontSize:'18px',marginRight:'4px'}} class="fas fa-sign-in-alt"></i> Sign In</a>
                    </div>
            </div></li>}*/}
            </div>
            
        )
    
}
}
export default Header;