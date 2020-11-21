import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { PizzaSpecialsComponent } from './components/pizza-specials/pizza-specials.component';
import { AddPizzaSpecialComponent } from './components/add-pizza-special/add-pizza-special.component';
import { LoginComponent } from './admin/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'specials', component: PizzaSpecialsComponent },
  { path: 'addspecial', component: AddPizzaSpecialComponent },
  { path: 'add', component: AddTutorialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
