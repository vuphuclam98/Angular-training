import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  email: string = '';
  fullname: string = '';
  address: string = '';
  phone: string = '';

  onRegister() {
    // Lưu thông tin đăng ký vào localStorage
    alert(this.username);
    localStorage.setItem('username', this.username);
    localStorage.setItem('password', this.password);
    localStorage.setItem('email', this.email);
    localStorage.setItem('fullname', this.fullname);
    localStorage.setItem('address', this.address);
    localStorage.setItem('phone', this.phone);

    alert('Đăng ký thành công');
  }
}