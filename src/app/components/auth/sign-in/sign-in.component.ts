import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from 'src/app/store/actions/auth.actions';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  public form: FormGroup;
  constructor(
    private fb: FormBuilder, //
    private store: Store
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['test@test.com', [Validators.required, Validators.email]],
      password: ['test', Validators.required],
    });
  }

  public submit(): void {
    this.store.dispatch(new login(this.form.value));
  }
}
