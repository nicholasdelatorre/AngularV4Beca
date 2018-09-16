import { Component, OnInit } from '@angular/core';
import { Http } from '../../../../node_modules/@angular/http';
import { UserViewModel } from '../../../models/viewmodel/user.viewmodel';

@Component({
  selector: 'createUser',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = "Cadastro de Usuário";

  constructor(private httpSvc: Http) { }

  ngOnInit() {
  }

  currentUser: UserViewModel = new UserViewModel();

  

  doCreateUsuario() {
    const url = 'http://localhost:63093/api/User';

    this.httpSvc.post(url, this.currentUser).subscribe(res => {
      
      alert('Usuário criado');
      
      
    },
      err => {
        alert('Erro ao criar: ' + err.status);
      });
  }

 save: boolean = true;
  
  canSave():boolean{

   if((this.currentUser.name != null) && (this.currentUser.name != undefined) && (this.currentUser.name != "") &&
   (this.currentUser.email != null) && (this.currentUser.email != undefined) && (this.currentUser.email != "")  &&
   (this.currentUser.password != null) && (this.currentUser.password != undefined) && (this.currentUser.password != "")  &&
   (this.currentUser.login != null) && (this.currentUser.login != undefined) && (this.currentUser.login != "")){
     
      return this.save = true;
     
   } 

  }

  doLimpar(){
    this.currentUser = new UserViewModel();
  }
 

  // isEdit(){
  //   return this.currentUser.id > 0;
  // }

}
