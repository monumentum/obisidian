export const sideEffectMiddleware = sideEffects => store => next => action => {
    const actionSideEffects = sideEffects[action.type] || {};

    (actionSideEffects.pre || []).forEach((sideEffect) => {
        store.dispatch(sideEffect);
    });

    next(action);

    (actionSideEffects.post || []).forEach((sideEffect) => {
        store.dispatch(sideEffect);
    });
}

export default sideEffectMiddleware;