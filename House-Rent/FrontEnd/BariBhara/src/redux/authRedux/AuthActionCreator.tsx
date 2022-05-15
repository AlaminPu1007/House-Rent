/// dispatch type define here
export enum ActionType {
  INCREMENT_OPERATION = 'INCREMENT_OPERATION',
  DECREMENT_OPERATION = 'DECREMENT_OPERATION',
}

interface actionIncrement {
  type: ActionType.INCREMENT_OPERATION;
  payload: Number;
}

interface actionDecrement {
  type: ActionType.DECREMENT_OPERATION;
  payload: Number;
}

export type Action = actionIncrement | actionDecrement;
