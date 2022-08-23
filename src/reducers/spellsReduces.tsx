const DefaultState = {
    loading: false,
    data: [],
    errorMsg: "",
  };
  
  const SpellListReducer = (state = DefaultState, action:any) => {
    switch (action.type) {
      case "SPELL_LIST_LOADING":
        return {
          ...state,
          loading: true,
          errorMsg: ""
        };
      case "SPELL_LIST_FAIL":
        return {
          ...state,
          loading: false,
          errorMsg: "unable to get spell"
        };
      case "SPELL_LIST_SUCCESS":
        return {
          ...state,
          loading: false,
          data: action.payload.results,
          errorMsg: "",
        };
      default:
        return state
    }
  };
  
  export default SpellListReducer