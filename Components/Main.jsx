import React from 'react';
import Body from './Body';
import Header from './Header';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    )
  }

}

export default Main;
