import './SearchBar.css';
import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render () {
        return (
            <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
            <input type="text" placeholder="Search for photos on Pexels..." value={this.state.term} onChange={(e) => this.setState({ term: e.target.value})}/>
            </div>
            </form>
            );
    }
}

export default SearchBar;