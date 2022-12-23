import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule} from '@angular/forms';
import {MatFormField , MatFormFieldModule} from '@angular/material/form-field';
import { WelcomeComponent } from './Student/welcome/welcome.component';
import { QuestionComponent } from './Student/question/question.component';
import { HeaderComponent } from './Student/header/header.component';
import { ChangeBgDirective } from './change-bg.directive';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { ApiService } from './shared/api.service';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    QuestionComponent,
    HeaderComponent,
    ChangeBgDirective,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    TeacherDashboardComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule
   ],
  exports: [
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
