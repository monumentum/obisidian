export const mountBaseProps = mapper => (state, otherProps) => ({
    fetching: state.getIn([baseStatePath, 'fetching']),
    error: state.getIn([baseStatePath, 'error']),
    ...mapper(state, otherProps),
});