import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './components/schedule/add-contact/add-contact.component';
import { ListContactComponent } from './components/schedule/list-contact/list-contact.component';

const routes: Routes = [
  { path: 'add-contact', component: AddContactComponent },
  { path: 'list-contact', component: ListContactComponent },
  { path: '**', pathMatch:'full', redirectTo: 'list-contact'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
