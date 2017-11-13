export const sideEffectMiddleware = sidEffects => store => next => action => {
    const sideEffect = sidEffects[action.type];

    if (sideEffect) {
        sideEffect();
    }

    return next(action);
}

export default sideEffectMiddleware;