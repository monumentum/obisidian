import { Map, List } from 'immutable';
import {
    reduceFn,
    mountReducer,
    setIn,
    fetching,
    unFetching,
    unError,
    setErr
} from './structural';

export const setItems = items => setIn('items', items);

export const fetchingState = (state) => fetching(state);

export const fetchWithSuccess = (state, { payload }) => reduceFn(state, [
    unFetching, unError, setItems(payload)
]);

export const fetchWithError = (state, { error }) => reduceFn(state, [
    unload, setErr(error)
]);

export const listReducer = (fetchingMethods, customInitialState = {}, customDecisionMap = {}) => {
    const initialState = Map({
        fetching: false,
        items: List(),
        error: null,
        ...customInitialState
    });

    const decisionMap = {
        [fetchingMethods[0]]: fetchingState,
        [fetchingMethods[1]]: fetchWithSuccess,
        [fetchingMethods[2]]: fetchWithError,
        ...customDecisionMap
    };

    return mountReducer(initialState, decisionMap)
};