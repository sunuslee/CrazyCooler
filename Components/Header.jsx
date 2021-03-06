import React from 'react';
class Header extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
          <div>
            <div className="cc-header">
              <div id="header-logo" className="text-center">
                <img id="header-logo-image" src="images/logo.png"/>
                <h3>CrazyCooler</h3>
              </div>
              <p className="head-text text-center">The true app keeps your Mac from burning, and reboot!</p>
              <div className="text-center">
              <button className="btn btn-primary btn-lg" id="download-btn" role="button">
                <a href="https://github.com/sunuslee/CrazyCooler/releases/download/200/CrazyCooler-v200.app.zip">Download NOW</a>
              </button>
              </div>
            </div>
        </div>
        );
    }

}

export default Header;
