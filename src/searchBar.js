import React from 'react';

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { search: "", callBack: props.callBack };
    }
    onSubmitForm = (event) => {
        event.preventDefault();
        console.log(this.state.search);
        this.state.callBack(this.state.search);
    };

    onInputChange = (event) => {
      this.state.callBack(event.target.value);
    };

    render() {
        return (
          <div className="ui segment">
            <form className="ui form" onSubmit={this.onSubmitForm}>
              <div className="field">
                <label>Image Search</label>
                <input
                  type="search"
                  value={this.state.search}
                  onChange={e=>this.setState({search: e.target.value})}
                />
                <input type="submit" />
              </div>
            </form>
          </div>
        );
    }
}

