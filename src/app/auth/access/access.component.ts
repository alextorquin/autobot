import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { GlobalStoreService } from '../../core/global-store.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-access',
  templateUrl: './access.component.html',
  styles: []
})
export class AccessComponent implements OnInit, OnDestroy {
  private url = environment.apiUrl + 'pub/credentials/';
  constructor(private http: HttpClient, private globalStore: GlobalStoreService) {}

  public ngOnInit() {}
  public ngOnDestroy(): void {
    this.globalStore.dispatchLoginNeeded(false);
  }

  public onLogin(value) {
    this.http.post(this.url + 'login', value).subscribe(this.onSuccess, this.onError);
  }

  public onRegister(value) {
    this.http.post(this.url + 'registration', value).subscribe(this.onSuccess, this.onError);
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
