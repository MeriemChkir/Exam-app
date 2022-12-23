import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QuestionComponent } from './Student/question/question.component';
import { WelcomeComponent } from './Student/welcome/welcome.component';
import { SignupComponent } from './signup/signup.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'', redirectTo:'welcome', pathMatch:'full'}, 
  //  we added this line so that we can find the welcome page when we access
  {path:"welcome", component:WelcomeComponent},
  // this is to open the welcome component
  {path:"question", component:QuestionComponent},
  {path:"login", component:LoginComponent},
  {path:"signup", component:SignupComponent},
  {path:"teacher-dashboard", component:TeacherDashboardComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
