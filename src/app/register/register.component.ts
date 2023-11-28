import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = this.fb.group({
    name:['', [Validators.required,]],
    surname:['', [Validators.required,]],
    phone:['', [Validators.required,]],
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(5)]]
  })
  constructor(
    public route: Router,
    private fb:FormBuilder
  ){}

  loginRedirect(){
    this.route.navigateByUrl('login');
  }
  saveUser(){    
    let user = this.registerForm.value;
    let db = JSON.parse(JSON.stringify(localStorage.getItem('db')));
    // Verifies that there's no empty field
      if(db===null){ // If there's no db, creates a new one and saves it into local storage
        console.log("is null");
        db=[];
        user.email?.toLowerCase();
        console.log(user.email);
        let toPushUser = JSON.stringify(user);
        db[db.length]=toPushUser;
        localStorage.clear();
        localStorage.setItem('db', db);
      }else{
        let dbLocalStorage = localStorage.getItem('db');
        let toCompare = JSON.parse(JSON.stringify(dbLocalStorage));
         // Verifies if there's any email associated in the 'db'
         user.email?.toLowerCase();
          if (toCompare.includes(user.email)){  
            console.error("Email duplicado");
          }else{ // If not registered saves it into the 'db'
          db = [dbLocalStorage];
          db[db.length+1]=JSON.stringify(user);
          localStorage.clear();
          localStorage.setItem('db',db);
        }}
    }

  get name(){
    return this.registerForm.controls['name'];
  }
  get surname(){
    return this.registerForm.controls['surname'];
  }
  get phone(){
    return this.registerForm.controls['phone'];
  }
  get email(){
    return this.registerForm.controls['email'];
  }
  get password(){
    return this.registerForm.controls['password'];
  }
}
  
//   localStorage.setItem('saludo', JSON.stringify( this.saludo )); //<- String converted
// }

// mostrarMensaje(){
//   this.message = String(localStorage.getItem('saludo'));
// }
