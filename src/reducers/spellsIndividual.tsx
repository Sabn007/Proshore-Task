const DefaultState = {
    loading: false,
    data: {},
    errorMsg: ""
  };
  
  const SpellIndividual = (state = DefaultState, action:any) => {
    switch (action.type) {
      case "SPELL_MULTIPLE_LOADING":
        return {
          ...state,
          loading: true,
          errorMsg: ""
        };
      case "SPELL_MULTIPLE_FAIL":
        return {
          ...state,
          loading: false,
          errorMsg: "unable to find spell"
        };
      case "SPELL_MULTIPLE_SUCCESS":
        return {
          ...state,
          loading: false,
          errorMsg: "",
          data: {
            ...state.data,
            [action.spellName]: action.payload
          }
        };
      default:
        return state
    }
  };
  
  export default SpellIndividual