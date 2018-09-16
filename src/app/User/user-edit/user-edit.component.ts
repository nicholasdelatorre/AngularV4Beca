import { Http } from '../../../../node_modules/@angular/http';
import { UserListComponent } from '../user-list/user-list.component';
import { UserViewModel } from '../../../models/viewmodel/user.viewmodel';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit{

  title = "Editar";

  constructor(private httpSvc: Http, private route: ActivatedRoute) { }

  currentUser: UserViewModel = new UserViewModel();

  ngOnInit(){

    this.route.paramMap.subscribe(
      param => {
        let id = +param.get('id');
        this.getEditUser(id);
      }
      
    );

    

  }

  getEditUser(userId: number){

    const url = 'http://localhost:63093/api/User/' + userId;

    this.httpSvc.get(url).subscribe(
      res => {
        var result = res.json();

        this.currentUser.name = result.Name;
        this.currentUser.email = result.Email;
        this.currentUser.login = result.Login;
        this.currentUser.password = result.Password;
        this.currentUser.id = result.Id;
        this.currentUser.superior_id = result.Superior_id;
      }
    );

  }

  doUpdateUsuario(){



  const url = 'http://localhost:63093/api/User';
  this.httpSvc.patch(url, this.currentUser).subscribe(
      res =>{

        alert('Usuário atualizado');
        
      },
      err => {
        alert('Erro ao Atualizar: ' + err.status);
      });

  }

  
}
