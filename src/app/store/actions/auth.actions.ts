import { Action } from '@ngrx/store';


export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failure',
  SIGNUP = '[Auth] Signup',
  SIGNUP_SUCCESS = '[Auth] Signup Success',
  SIGNUP_FAILURE = '[Auth] Signup Failure',
  LOGOUT = '[Auth] Logout',
}

export class login implements Action {
  readonly type = AuthActionTypes.LOGIN;
  constructor(public payload: any) {}
}

export class loginSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export class loginFailure implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILURE;
  constructor(public payload: any) {}
}

export class signup implements Action {
  readonly type = AuthActionTypes.SIGNUP;
  constructor(public payload: any) {}
}

export class signupSuccess implements Action {
  readonly type = AuthActionTypes.SIGNUP_SUCCESS;
  constructor(public payload: any) {}
}

export class signupFailure implements Action {
  readonly type = AuthActionTypes.SIGNUP_FAILURE;
  constructor(public payload: any) {}
}

export class logout implements Action {
  readonly type = AuthActionTypes.LOGOUT;
}

export type All = login | loginSuccess | loginFailure | signup | signupSuccess | signupFailure | logout;
