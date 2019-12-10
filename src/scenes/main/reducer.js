function init() {
  return { count: [] };
}

function panelReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return init();
  }
}
export default panelReducer;
