import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent {
  
  recoverForm=this.fb.group({ 
    phone:['', [Validators.required, Validators.email]],
    password:['',[Validators.required]]
  })
  constructor(
    public route: Router,
    private fb:FormBuilder
  ){}

  recoverPassword(){
    const db = localStorage.getItem('db');
    console.log(db);
    const toFindUser=this.recoverForm.value;
    console.log(toFindUser);
    
    let toCompare=[db];
    console.log(JSON.parse(JSON.stringify(toCompare)));
    let tomodifyUser;
    let modifieduser=[];
    // console.log(dbParsed);
    
    for(let index=0; index<toCompare.length;index++){
      if(toCompare[index]?.includes(String(toFindUser.phone))){
        tomodifyUser=index;
        modifieduser=[toCompare[index]];
        let finalUser =JSON.parse(modifieduser.toString());
        finalUser.password=toFindUser.password;
        console.log(JSON.stringify(finalUser));
        toCompare[tomodifyUser]=JSON.stringify(finalUser);
        console.log("aaaaaaaa"+toCompare);
        localStorage.clear();
        localStorage.setItem('db',toCompare.toString());

        break;
      }       
    }
    
  }
}
