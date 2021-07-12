import './welcome.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import SubHeader from "./welcomePage/Wheader/subheader"
import Abovecontent from "./welcomePage/Wabove/abovecontent"
import Sign from "./welcomePage/Wsign/sign"
import CharNav from "./welcomePage/Wcharnav/characterNav"
import Discrb from "./welcomePage/Wdiscrb/discrb"
import FormC from "./welcomePage/WformC/formcontrol"
import Footer from "./welcomePage/Wfooter/footer"
function Welcome() {
  return (
    <div id="welcomepage">
      <SubHeader/>
      <Abovecontent/>
      <CharNav/>
      <Discrb/>
      <FormC/>
      <Sign/>
      <Footer/>
    </div>
  );
}

export default Welcome;
