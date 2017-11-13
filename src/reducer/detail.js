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

export const setDetail = detail => setIn('detail', detail);

export const fetchingState = state => fetching(state)
export const fetchWithSuccess = (state, { payload }) => reduceFn(state, [
    unFetching, unError, setDetail(payload)
]);

export const fetchWithError = (state, { error }) => reduceFn(state, [
    unFetching, setErr(error)
]);

export const detailReducer = (fetchingMethods, customInitialState = {}, customDecisionMap = {}) => {
    const initialState = Map({
        fetching: false,
        detail: {},
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
