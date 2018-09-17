import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { GlobalStoreService } from '../../core/global-store.service';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styles: []
})
export class AccessComponent implements OnInit {
  private url = environment.apiUrl + 'pub/credentials/';
  public credentials = { email: '', password: '' };
  private postLogin$ = this.http.post(this.url + 'login', this.credentials);
  private postRegistration$ = this.http.post(this.url + 'registration', this.credentials);
  constructor(private http: HttpClient, private globalStore: GlobalStoreService) {}

  ngOnInit() {}
  public onLogin() {
    this.postLogin$.subscribe(this.onSuccess, this.onError);
  }

  public onRegister() {
    this.postRegistration$.subscribe(this.onSuccess, this.onError);
  }

  private onSuccess = (authResponse: { token: string }) => {
    this.globalStore.dispatchUserMessage('Wellcome');
    this.globalStore.dispatchToken(authResponse.token);
    this.globalStore.dispatchLoginNeeded(false);
  };
  private onError = err => {
    this.globalStore.dispatchUserMessage('Invalid credentials');
    this.globalStore.dispatchToken('');
  };
}
