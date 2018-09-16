import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../models/domain/user.model';
import { UserViewModel } from '../models/viewmodel/user.viewmodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App Angular 4';
  

}