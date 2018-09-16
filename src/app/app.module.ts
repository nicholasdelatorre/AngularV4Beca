import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponent } from './User/create/create.component';
import { UserListComponent } from './User/user-list/user-list.component';
import { UserEditComponent } from './User/user-edit/user-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    UserListComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(
     [
      { path: 'create-user', component: CreateComponent },
      { path: 'user-list', component: UserListComponent},
      { path: 'user-edit/:id', component: UserEditComponent}
        // { path: '', redirectTo: '/user-list', pathMatch: 'full' }
     ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
