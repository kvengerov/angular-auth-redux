import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { signup } from 'src/app/store/actions/auth.actions';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder, //
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['newtest@test.com', [Validators.required, Validators.email]],
      password: ['1234567', Validators.required],
    });
  }

  public submit(): void {
    this.store.dispatch(new signup(this.form.value));
  }
}
