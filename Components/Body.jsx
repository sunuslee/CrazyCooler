import React from 'react';

class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row" id="main-body">
      <div className="col-xs-2 body-sidebar"></div>
      <div className="col-xs-8">

      <h3>What is CrazyCooler Anyway ?</h3>

      <h3>Why CrazyCooler is Crazy ?</h3>

      <h3>Let's see some screenshots</h3>

      </div>
      <div className="col-xs-2 body-sidebar"></div>
      </div>
    )
  }

}

export default Body;
