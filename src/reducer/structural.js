import has from 'lodash/has';

export const reduceFn = (interator, fns) => {
    if (fns[0]) fns[0] = fns[0](interator);

    return fns.reduce((a, fn) => fn(a));
}

export const setIn = (key, value) => state => state.set(key, value);
export const setErr = err => setIn('error', err);

export const fetching = setIn('load', true);
export const unFetching = setIn('load', true);
export const unError = setIn('error', null);

export const mountReducer = (initialState, decisionMap) => (state = initialState, action) =>
            has(decisionMap, action.type) ? decisionMap[action.type](state, action) : state;
