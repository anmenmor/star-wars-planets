import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  errorMessage: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
   this.errorMessage = '';
   let data = sessionStorage.getItem(this.email);
   if (data) {
    this.router.navigate(['/films']);
   } else {
     this.errorMessage = 'Usuario no registrado';
   }
  }
}
