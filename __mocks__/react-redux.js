const mockDispatch = jest.fn((action) => action);

module.exports = {
  connect: (mapStateToProps, mapDispatchToProps) => (reactComponent) => ({
    mapStateToProps,
    mapDispatchToProps: (dispatch = mockDispatch, ownProps) => mapDispatchToProps(dispatch, ownProps),
    reactComponent,
    mockDispatch
  }),
  Provider: ({ children }) => children
};