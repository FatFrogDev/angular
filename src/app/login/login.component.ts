import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm=this.fb.group({ 
    email:['', [Validators.required, Validators.email]],
    password:['',[Validators.required]]
});
  saludo : String ='';
  message : String = '';
  
  constructor(
    public route: Router,
    private fb:FormBuilder
  ){}

  navegar(){
    this.route.navigateByUrl('register')
  }

  homePage(){
    this.route.navigateByUrl('home-page')
  }

  saludar(){
    this.saludo='Esto es un saludo'; 
    localStorage.setItem('saludo', JSON.stringify( this.saludo )); // <- String converted
  }
    // TODO: debe tener:
    // navegabilidad, reactividad, almacenamiento en local storage 
    // el login valida si los datos existen o no existen
    // el register registra los datos en el local storage
  login(){
    const db = localStorage.getItem('db');
    let user = this.loginForm.value;
    user.email?.toLowerCase();
    console.log(JSON.stringify(db));
    let toCompare = [db]; 
    for(let index=0;index<=toCompare.length;index++){
      let email =JSON.stringify(user.email);
      let password =JSON.stringify(user.password);
      if (toCompare[index]?.includes(email) && toCompare[index]?.includes(password)){
          this.homePage();
      }else{
        console.error("Usuario no registrado");
      }
    }
  }

  mostrarMensaje(){
    this.message = String(localStorage.getItem('saludo'));
  }

  get email(){
    return this.loginForm.controls['email'];
  }
}
