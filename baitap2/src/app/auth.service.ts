import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn(): boolean {
    // Kiểm tra xem có thông tin đăng nhập trong localStorage hay không
    return !!localStorage.getItem('username');
  }

  login(username: string, password: string): boolean {
    // Kiểm tra thông tin đăng nhập và lưu vào localStorage
    // Trong ứng dụng thực tế, bạn nên sử dụng một hệ thống đăng nhập an toàn hơn
    if (username === localStorage.getItem('username') && password === localStorage.getItem('password')) {
      localStorage.setItem('username', username);
      return true;
    }
    return false;
  }

  logout(): void {
    // Xóa thông tin đăng nhập khỏi localStorage
    localStorage.removeItem('username');
  }
}