import { Map, List } from 'immutable';
import {
    mountReducer,
    baseFetchOperations,
    setIn,
} from './structural';

export const setItems = items => setIn('items', items);
export const baseListFetchOperations = baseFetchOperations(setItems);

export const listReducer = (fetchingMethods, customInitialState = {}, customDecisionMap = {}) => {
    const initialState = Map({
        fetching: false,
        items: List(),
        error: null,
        ...customInitialState
    });

    const decisionMap = {
        ...baseListFetchOperations(fetchingMethods),
        ...customDecisionMap
    };

    return mountReducer(initialState, decisionMap)
};