import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { tap, map, switchMap, catchError } from 'rxjs/operators';

import { AuthService } from '../../services/auth.service';
import { User } from 'src/app/models/user';
import { AuthActionTypes, login, loginSuccess, loginFailure, signup, signupFailure, signupSuccess } from '../actions/auth.actions';

@Injectable()
export class AuthEffects {

  constructor(
    private actions: Actions, //
    private authService: AuthService,
    private router: Router
  ) {}

  @Effect()
  login: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN),
    map((action: login) => action.payload),
    switchMap((payload) => {
      console.log(payload);

      return this.authService.login(payload.email, payload.password).pipe(
        map((user) => {
          console.log(user);
          return new loginSuccess({ token: user.token, email: payload.email });
        }),
        catchError((error) => {
          console.log(error);
          return of(new loginFailure({ error: error }));
        })
      );
    })
  );

  @Effect({ dispatch: false })
  loginSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCESS),
    tap((user) => {
      console.log(user);
      localStorage.setItem('token', user.payload.token);
      this.router.navigateByUrl('/');
    })
  );

  @Effect({ dispatch: false })
  loginFailure: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_FAILURE)
  );

  @Effect()
  signup: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SIGNUP),
    map((action: signup) => action.payload),
    switchMap((payload) => {
      return this.authService.signup(payload.email, payload.password).pipe(
        map((user: User) => {
          console.log(user);
          return new signupSuccess({ token: user.token, email: payload.email });
        }),
        catchError((error) => {
          console.log(error);
          return of(new signupFailure({ error: error }));
        })
      );
    })
  );

  @Effect({ dispatch: false })
  signupSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SIGNUP_SUCCESS),
    tap((user) => {
      console.log(user);
      localStorage.setItem('token', user.payload.token);
      this.router.navigateByUrl('/');
    })
  );

  @Effect({ dispatch: false })
  signupFailure: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SIGNUP_FAILURE)
  );

  @Effect({ dispatch: false })
  logout: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGOUT),
    tap(() => localStorage.removeItem('token'))
  );
}
