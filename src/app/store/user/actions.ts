import { Action } from '@ngrx/store'

export const LOGIN = '[Auth] Login';

export class Login implements Action {
  readonly type = LOGIN;
  constructor(public payload: any) {}
}

export type LoginAction = Login

