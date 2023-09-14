import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Implement your authentication logic here (e.g., checking credentials)
    if (this.username === 'admin' && this.password === 'password') {
      this.router.navigate(['/dashboard']);
    } else {
      // Handle authentication failure
    }
  }
}
