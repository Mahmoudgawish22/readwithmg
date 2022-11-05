import userPhoto from '../../iamges/DSC_0796.jpg';
import logo from "../../iamges/books2.svg";
import '../Wheader/subheader.scss';
import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import { HashLink } from 'react-router-hash-link';

class SubHeader extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div id='header' className='container-fluid'>
                <div id='left-header'>
                <h3 id="logo">Read With MG</h3> 
                <img src={logo} alt='logo-pen'/>
                </div>
                <div id='right-header'>
                <ul id="nav-list" style={{listStyle:'none'}}>
                  <li>
                  <HashLink style={{fontSize:'16px',display:'flex',alignItems:'center'}} class="nav-link" to="#sign"><i style={{color:'white',fontSize:'18px',marginRight:'10px'}} class="fas fa-sign-in-alt"></i> Not Your First Visit?</HashLink>
                  </li>
                  </ul>
                  </div>
                  </div>
        )
    }
}
export default SubHeader