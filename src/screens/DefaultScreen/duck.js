import { orderedKeys } from './steps';

// Actions
const UPDATE = 'ONBOARDING/UPDATE';
const GOBACK = 'ONBOARDING/GOBACK';

const initializedKeys = orderedKeys.reduce((acc, curr) => {
  acc[curr] = '';
  return acc;
}, {});

export const INITIAL_STATE = {
  currentIndex: 0,
  ...initializedKeys,
};

// Reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE:
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
        // ...action.payload,
      };
    case GOBACK:
      return {
        ...state,
        currentIndex: state.currentIndex - 1,
      };
    default:
      return state;
  }
}

// Action Creators
export function update() {
  return {
    type: UPDATE,
  };
}

export function goBack() {
  return {
    type: GOBACK,
  };
}
