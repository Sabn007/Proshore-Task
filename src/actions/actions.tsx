import axios from "axios";

export const GetSpellList = () => async (dispatch: any) => {
  try {
    dispatch({
      type: "SPELL_LIST_LOADING",
    });

    const res = await axios.get(
      `https://www.dnd5eapi.co/api/spells`
    );

    dispatch({
      type: "SPELL_LIST_SUCCESS",
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: "SPELL_LIST_FAIL",
    });
  }
};

export const GetSpells = (url: any) => async (dispatch: any) => {
  try {
    dispatch({
      type: "SPELL_MULTIPLE_LOADING",
    });

    const res = await axios.get(`https://www.dnd5eapi.co${url}`);

    dispatch({
      type: "SPELL_MULTIPLE_SUCCESS",
      payload: res.data,
      spellsName: url,
    });
  } catch (e) {
    dispatch({
      type: "SPELL_MULTIPLE_FAIL",
    });
  }
};
