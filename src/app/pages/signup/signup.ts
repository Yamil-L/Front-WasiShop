import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { User } from '../../services/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: User,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      gender: ['', Validators.required],
      birthdate: [''],
      phone_number: [''],
      newsletter_subscribed: [false],
    });
  }

  onSubmit() {
    if (this.signupForm.invalid) return;

    const formValue = this.signupForm.value;
    const payload = { ...formValue };

    if (!payload.birthdate) delete payload.birthdate;
    if (!payload.phone_number) delete payload.phone_number;

    this.userService.createUser(payload).subscribe({
      next: () => this.router.navigate(['/login']),
      error: () => {},
    });
  }
}
