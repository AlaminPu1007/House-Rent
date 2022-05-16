//all auth related Action type will be defined here
export enum ActionType {
  INCREMENT_OPERATION = 'INCREMENT_OPERATION',
  DECREMENT_OPERATION = 'DECREMENT_OPERATION',
}
// for Increment operation
interface actionIncrement {
  type: ActionType.INCREMENT_OPERATION;
  payload: Number;
}
// for decrement operation
interface actionDecrement {
  type: ActionType.DECREMENT_OPERATION;
  payload: Number;
}

// action will be passed through action: Action method
export type Action = actionIncrement | actionDecrement;
