export const apiMiddleware = parser => store => next => action => {
    if (!action.api) {
        return next(action);
    }

    next({ type: action.type[0] });

    action.api.then(parser).then(payload => {
        return next({ type: action.type[1], payload});
    }).catch(error => {
        return next({ type: action.type[2], error });
    });
}

export default apiMiddleware;