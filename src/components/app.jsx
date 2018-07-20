import React, { Component } from 'react';

import Greeting from './greeting';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'John',
    }
  }

  handleMouseOver() {
    this.setState( { name: 'Bob' });
  }

  handleMouseOut() {
    this.setState( { name: 'Mike' });
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.name} />
        <Greeting name={this.state.name} />
      </div>
    );
  }
}

export default App;
