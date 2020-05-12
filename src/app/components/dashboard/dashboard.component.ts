import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAuthState } from 'src/app/store/app.states';
import { logout } from 'src/app/store/actions/auth.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  getState: Observable<any>;
  state;

  constructor(
    private store: Store, //
  ) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit(): void {
    this.getState.subscribe((state) => this.state = state);
  }

  logout(): void {
    this.store.dispatch(new logout);
  }

}
