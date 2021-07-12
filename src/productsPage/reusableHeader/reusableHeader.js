import "../reusableHeader/reusableHeader.scss"
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
function ReusableHeader(props) {
    return (
        <div id='reusableheader'>
            <div id='reusablelogo'>
                <img id='reusableimg' src={props.img} alt='reusable-header'/>
                <h3 id='logotext'>{props.text}</h3>
            </div>
            <p id='reusablecontent'>{props.disc}</p>
        </div>
    )
}
export default ReusableHeader