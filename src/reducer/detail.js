import { Map, List } from 'immutable';
import {
    mountReducer,
    baseFetchOperations,
    setIn,
} from './structural';

export const setDetail = detail => setIn('detail', detail);
export const baseDetailFetchOperations = baseFetchOperations(setDetail)

export const detailReducer = (fetchingMethods, customInitialState = {}, customDecisionMap = {}) => {
    const initialState = Map({
        fetching: false,
        detail: {},
        error: null,
        ...customInitialState
    });

    const decisionMap = {
        ...baseDetailFetchOperations(fetchingMethods),
        ...customDecisionMap
    };

    return mountReducer(initialState, decisionMap)
};
