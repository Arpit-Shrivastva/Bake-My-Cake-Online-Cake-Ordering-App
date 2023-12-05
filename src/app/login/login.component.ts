import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private authService: AuthService, private route: Router) { }
  
  ngOnInit(): void {
    
  }
  
  adminSecurityCode: string = '';
  userName = "";
  password = "";


  showCorrectLogin = false;
  showInCorrectLogin = false;

  submit() {
    if (this.userName == 'ArpitShri04' && this.password == 'arpit@123' && this.adminSecurityCode == "ASC@2023#") {
      this.authService.login();
      this.route.navigate(['/cake-request']);
    }
    else {
      this.authService.logout();
    }
    this.clear();
  }

  clear() {
    this.userName = "";
    this.password = "";
    this.adminSecurityCode = "";
  }

}
