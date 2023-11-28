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
    let phone = toFindUser.phone;
    let toCompare=[db];
    let tomodifyUser;
    let modifieduser=[];
    // console.log(dbParsed);
    
    for(let index=0; index<toCompare.length;index++){
      if(toCompare[index]?.includes(String(phone))){
        tomodifyUser=index;
        modifieduser=[toCompare[index]];
        console.log("To modify user "+tomodifyUser);
        
        break;
      }       
    }
  }

  getUser(index:number){
    const db = localStorage.getItem('db');
    let toCompare = JSON.parse(JSON.stringify(db));
    console.log(toCompare);
    


    //console.log(user);
    
    
  }
}
