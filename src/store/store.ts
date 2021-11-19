import { createStore, createSubState } from 'universal-model-react';
import initialTagsState from '../components/tags/model/initialTagsState';
import initialSalesItemState from '../components/salesitems/model/initialSalesItemState';

const initialState = {
  tagsState: createSubState(initialTagsState),
  salesItemState: createSubState(initialSalesItemState),
};

export type State = typeof initialState;
export default createStore<State, {}>(initialState, {});
