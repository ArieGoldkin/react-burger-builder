import { put } from "redux-saga/effects";
import axios from "../../axios.order";

import * as actions from "../actions";

export function* initIngredientsSaga(action) {
  try {
    const response = yield axios.get(
      "https://react-burger-builder-v2-bdaab.firebaseio.com/ingredients.json"
    );
    yield put(actions.setIngredients(response.data));
  } catch (err) {
    yield put(actions.fetchIngredientsFail());
  }
}
