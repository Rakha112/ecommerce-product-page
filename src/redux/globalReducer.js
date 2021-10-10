import Action from "./globalAction";

const initialState = {
  aktif: false,
  aktif_chart: false,
  value: 1,
};

// Reducer
const rootReducer = (state = initialState, action) => {
  if (action.type === Action.aktif_nav) {
    return {
      ...state,
      aktif: !state.aktif,
      aktif_chart: false,
    };
  }
  if (action.type === Action.aktif_chart) {
    return {
      ...state,
      aktif_chart: !state.aktif_chart,
    };
  }
  if (action.type === Action.tambah) {
    return {
      ...state,
      value: state.value + 1,
    };
  }
  if (action.type === Action.kurang) {
    return {
      ...state,
      value: state.value - 1,
    };
  }
  return state;
};

export default rootReducer;
