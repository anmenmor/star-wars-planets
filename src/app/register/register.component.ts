import { Component, OnInit } from '@angular/core';
const axios = require('axios');

//declare const M: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  username: string;
  fullname: string;
  errorMessage: string;

  constructor() { }

  ngOnInit(): void {
    this.email = "";
    this.username = "";
    this.fullname = ""
    //M.updateTextFields();
  }

  async register() {
    this.errorMessage = ""
    if(this.email == "" || this.username == "" || this.fullname == "") {
      this.errorMessage = "Hay algún campo vacio"
    } else {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', {email: this.email, username: this.username, 
    fullname: this.fullname});
      if(response.status == 201) {
        sessionStorage.setItem(response.data.email, JSON.stringify(response.data));
        this.errorMessage = "Se ha registrado correctamente"
      } else {
        this.errorMessage = "Ha habido un error al registrarse"
      }
    }
  }
}
