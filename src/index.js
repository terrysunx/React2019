import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {SearchBar} from './searchBar';

//create a react component
class App extends Component {
    state = {search:'initial text'}

    onFormSubmitted = e => {
      this.setState({search: e});
    }

    render() {
        return (
          <div className="ui container" style={{marginTop:'10px'}}>
            <SearchBar callBack={a => this.setState({search:a})} />
            <div>
              <label>Message: {this.state.search}</label>
            </div>
          </div>
        );
  }
}

//Take the raact component and show it on screen

ReactDOM.render(<App/>, document.querySelector('#root'));