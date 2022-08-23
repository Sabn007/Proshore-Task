import { combineReducers } from "redux";
import SpellIndividual from "./spellsIndividual";
import SpellListReducer from "./spellsReduces";

const RootReducers = combineReducers({
  SpellList: SpellListReducer,
  SpellIndividual : SpellIndividual
});

export default RootReducers;
