import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  LucideAngularModule,
  User,
  KeyRound,
  LucideIconData,
} from 'lucide-angular';
import { Router } from '@angular/router';
import { User as UserService } from '../../services/user';

@Component({
  selector: 'app-login',
  imports: [LucideAngularModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  userIcon: LucideIconData;
  passwordIcon: LucideIconData;
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.userIcon = User;
    this.passwordIcon = KeyRound;

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
  if (this.loginForm.invalid) {
    this.loginForm.markAllAsTouched();
    return;
  }

  const { email, password } = this.loginForm.value;

  // 🔑 Verificación local en vez de llamar al backend
  if (email === 'admin@mail.com' && password === '123456') {
    // Simular "token" y "userId"
    document.cookie = `token=fakeToken123; max-age=3600; path=/`;
    sessionStorage.setItem('userId', '1');

    // Redirigir a la ruta principal
    this.router.navigate(['/']);
  } else {
    alert('Credenciales incorrectas');
  }
}

  // onSubmit() {
  //   if (this.loginForm.invalid) {
  //     this.loginForm.markAllAsTouched();
  //     return;
  //   }

  //   this.userService.login(this.loginForm.value).subscribe({
  //     next: (response) => {
  //       document.cookie = `token=${response.accessToken}; max-age=3600; path=/`;

  //       sessionStorage.setItem('userId', response.userId);

  //       this.router.navigate(['/']);
  //     },
  //     error: (err) => {
  //       alert('Login failed: ' + (err?.error?.message || 'Unknown error'));
  //     },
  //   });
  // }
}
