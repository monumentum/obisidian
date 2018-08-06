export const sideEffectMiddleware = sideEffects => store => next => action => {
    (sideEffects[action.type] || []).forEach((sideEffect) => {
        store.dispatch(sideEffect);
    });

    return next(action);
}

export default sideEffectMiddleware;