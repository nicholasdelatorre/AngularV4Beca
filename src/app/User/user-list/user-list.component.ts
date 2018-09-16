import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/domain/user.model';
import { Http } from '../../../../node_modules/@angular/http';
import { UserViewModel } from '../../../models/viewmodel/user.viewmodel';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  title = "Listar Usuário";

  ngOnInit(){}

  currentUser: UserViewModel = new UserViewModel();
  nameToFind: string='';

  dataFromApi: Array<User> = [];

  constructor(private httpSvc: Http) { }

  OnSelect(userSelected: UserViewModel){
    this.currentUser = userSelected;
  }



  doBusca() {

    const url = 'http://localhost:63093/api/user/list?name=' + this.nameToFind + '&usertypeid=0';
    this.httpSvc.get(url).subscribe(
      /*Caminho Feliz*/
      res => {
        this.doLimpa();
        const apiResult = res.json();
        apiResult.forEach(item => {
          this.dataFromApi.push(item);
        });
      }
      /*Caminho Feliz*/
      /*Caminho Infeliz*/
      , err => {
        console.log(err.status);
        switch (err.status) {
          case 404:
            alert('Não foi possível buscar por: ' + this.nameToFind);
            break;
          case 400:
            alert('Parametros inválidos para busca');
            break;
          case 500:
            alert('Erro no servidor');
            break;
          default:
            alert('Ocorreu um erro: ' + err.status)
        }
      }
      /*Caminho Infeliz*/
    );
  }

  doEditar(usuarioId: number){
    const url = 'http://localhost:63093/api/User/'+usuarioId;
    this.httpSvc.get(url).subscribe(
      
      res=>{

      var result = res.json();
      this.currentUser = new UserViewModel();
    
      this.currentUser.name = result.Name;
      this.currentUser.email = result.Email;
      this.currentUser.login = result.Login;
      this.currentUser.password = result.Password;
      this.currentUser.id = result.Id;
      this.currentUser.superior_id = result.Superior_id;
    },
    err=>{
      alert('Erro ao consultar o usuário ID: '+usuarioId);
    })
  }

  doLimpa() {
    this.nameToFind = '';
    this.dataFromApi = new Array<User>();
  }

  hasData() {
    return this.dataFromApi.length > 0;
  }

 
  doDelete(userId: number){

    const url = 'http://localhost:63093/api/User/'+ userId;

    this.httpSvc.delete(url).subscribe(
      res => {
   
        alert('Usuario apagado com sucesso');
        this.doBusca();
       
      },
      err => {
        alert('Erro ao Deletar: ' + err.status);
      });
  }

  
  
}






