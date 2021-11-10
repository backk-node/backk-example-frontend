import { createStore, createSubState } from 'universal-model-react';
import initialTagsState from '../components/tags/model/state/initialTagsState';

const initialState = {
  tagsState: createSubState(initialTagsState),
};

export type State = typeof initialState;
export default createStore<State, {}>(initialState, {});
