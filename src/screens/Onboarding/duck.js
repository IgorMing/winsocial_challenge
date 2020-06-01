import { orderedKeys } from './steps';

// Actions
const UPDATE = 'ONBOARDING/UPDATE';
const NEXT = 'ONBOARDING/NEXT';
const GOBACK = 'ONBOARDING/GOBACK';

const initializedKeys = orderedKeys.reduce((acc, curr) => {
  acc[curr] = '';
  return acc;
}, {});

export const INITIAL_STATE = {
  currentIndex: 0,
  base64picture: null,
  ...initializedKeys,
};

// Reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE:
      return {
        ...state,
        ...action.payload,
      };
    case NEXT:
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
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
export function update({ currentIndex, value }) {
  return {
    type: UPDATE,
    payload: {
      [orderedKeys[currentIndex]]: value,
    },
  };
}

export function next() {
  return {
    type: NEXT,
  };
}

export function goBack() {
  return {
    type: GOBACK,
  };
}
