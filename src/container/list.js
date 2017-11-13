import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { mountBaseProps } from './utils';

export const mapToItem = Item => i => <Item key={i.id} data={i} />
export const mapLoadItem = LoadItem => i => <LoadItem key={i}/>

export const mapStateToListProps = mountBaseProps((state, { baseStatePath }) => ({
    items: state.getIn([baseStatePath, 'items']),
}))

export const mapDispatchToProps = (dispatch, { itemLoadAction }) => ({
    loadItems: query => dispatch(itemLoadAction(query)),
});

export class ListContainer extends Component {
    constructor(props) {
        super(props);
        this.mapper = mapToItem(this.props.renderItem);
        this.placeholderItem = mapLoadItem(this.props.renderPlaceholderItem);

        this.getItems = this.getItems.bind(this);
    }

    componentDidMount() {
        this.props.loadItems();
    }

    getItems() {
        if (this.props.fetching && this.props.renderPlaceholderItem) {
            let items = Array(this.props.placeholderItems);
            return items.map((_, i) => this.placeholderItem(i))
        }

        return this.props.items.map(this.mapper);
    }

    render() {
        const items = this.getItems();
        return ( <View>{items}</View> )
    }
}

export default connect(mapStateToListProps, mapDispatchToProps)(ListContainer);