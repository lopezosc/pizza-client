import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { PizzaSpecialsComponent } from './components/pizza-specials/pizza-specials.component';
import { AddPizzaSpecialComponent } from './components/add-pizza-special/add-pizza-special.component';
import { PizzaSpecialDetailsComponent } from './components/pizza-special-details/pizza-special-details.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';
import { ForgotPasswordComponent } from './admin/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './admin/verify-email/verify-email.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    PizzaSpecialsComponent,
    AddPizzaSpecialComponent,
    PizzaSpecialDetailsComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule, // for database
    ConfirmationPopoverModule.forRoot({
      focusButton: 'confirm',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
