import React from 'react';
import Second from './Second'
class Header extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
          <div>
            <div className="jumbotron">
              <h2>CrazyCooler</h2>
              <p>This App keeps your Mac from burning</p>
              <p><a className="btn btn-primary btn-lg" href="#" role="button">Download Now</a></p>
            </div>
        </div>
        );
    }

}

export default Header;
