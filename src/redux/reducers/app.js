const initalState = {
  debug: true,
  laoded: false,
};

export default function (state = initalState, action) {
  switch (action.type) {
    case "APP_STATE":
      return { ...state, ...action.state };
    default:
      return state;
  }
}
