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
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${this.token}` }
    });
    return next.handle(authReq).pipe(
      tap(null, err => {
        if (err instanceof HttpErrorResponse && err.status === 401) {
          this.globalStore.dispatchUserMessage('Authorization needed');
          this.globalStore.dispatchLoginNeeded(true);
        }
      })
    );
  }
  constructor(private globalStore: GlobalStoreService) {
    this.globalStore.selectToken$().subscribe((token: string) => (this.token = token));
  }
}
