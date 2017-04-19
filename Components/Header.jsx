import React from 'react';
import Second from './Second'
class Header extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
          <div>
            <div className="jumbotron cc-header">
              <div id="header-logo" className="text-center">
                <img id="header-logo-image" src="images/logo.png"/>
                <h5>CrazyCooler</h5>
              </div>
              <p className="text-center" id="header-text">The true app keeps you mac from burning, and reboot!</p>
              <div className="text-center">
              <a className="btn btn-primary btn-xs" id="download-btn" role="button" href="https://github.com/sunuslee/CrazyCooler/releases/download/200/CrazyCooler-v200.app.zip">Download NOW</a>
              </div>
            </div>
        </div>
        );
    }

}

export default Header;
