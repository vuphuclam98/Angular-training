import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    if (this.authService.login(this.username, this.password)) {
      alert('Đăng nhập thành công');
    } else {
      alert('Đăng nhập thất bại');
    }
  }
}