import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private router: Router //
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((response: any) => {
        if (response instanceof HttpErrorResponse && response.status === 401) {
          localStorage.removeItem('token');
          this.router.navigateByUrl('/sign-in');
        }
        return Observable.throw(response);
      })
    );
  }
}
