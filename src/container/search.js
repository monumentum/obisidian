import React, { Component } from 'react';
import { connect } from 'react-redux';

export const mapDispatchToProps = (dispatch, { handle }) => ({
    loadItems: query => dispatch(handle(query)),
});

export class SearchContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { query: '' };
        this.timeout = null;
        this._waitToSearch = props.waitToSearch || 500;

        // bind methods
        this.onChange = this.onChange.bind(this);
        this.dispatch = this.dispatch.bind(this);
    }

    onChange(query) {
        clearTimeout(this.timeout);
        this.setState({ query });
        this.timeout = setTimeout(
            this.dispatch,
            this._waitToSearch
        )
    }

    dispatch() {
        this.props.loadItems(this.state.query);
    }

    render() {
        const Input = this.props.input;

        return (
            <Input
                value={this.state.query}
                onChange={this.onChange}
                label={this.props.label}
            />
        )
    }
}

export default connect(null, mapDispatchToProps)(SearchContainer);