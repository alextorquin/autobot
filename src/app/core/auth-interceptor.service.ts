import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GlobalStoreService } from './global-store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  private token: string;
  constructor(private globalStore: GlobalStoreService) {
    this.globalStore.selectToken$().subscribe((token: string) => (this.token = token));
  }
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = this.getReqWithAuthorization(req);
    return next.handle(authReq).pipe(tap(null, this.handleError));
  }
  private getReqWithAuthorization = (req: HttpRequest<any>) =>
    req.clone({
      setHeaders: { Authorization: `Bearer ${this.token}` }
    });
  private handleError = err => {
    let userMessage = 'Fatal error';
    if (err instanceof HttpErrorResponse) {
      if (err.status === 401) {
        userMessage = 'Authorization needed';
        this.globalStore.dispatchLoginNeeded(true);
      } else {
        userMessage = 'Comunications error';
      }
    }
    this.globalStore.dispatchUserMessage(userMessage);
  };
}
