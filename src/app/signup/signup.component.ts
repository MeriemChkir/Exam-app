import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;
  constructor(private FormBuilder : FormBuilder, private http : HttpClient ,private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.FormBuilder.group({
      fullname:[''],
      email:[''],
      password:[],
      group:[''],
    })
  }

  signUp(){
    this.http.post<any>("http://localhost:3000/students", this.signupForm.value)
    .subscribe(res=>{
      alert("Signup Successful");
      this.signupForm.reset();
      this.router.navigate(['welcome']);
    },err=>{
      alert("Something went wrong")
    })
  }
} 






















































// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from "@angular/core";
// import { FormBuilder, FormGroup, Validators } from "@angular/forms";
// import { Router } from "@angular/router";
// import { ToastrService } from "ngx-toastr";
// import { AuthService } from "../SERVICES/auth.service";

// @Component({
//     selector: 'app-signup',
//     templateUrl: './signup.component.html',
//     styleUrls: ['./signup.component.scss']
// })

// export class SignupComponent implements OnInit {
//     public signupForm!:FormGroup
//     constructor(private fb:FormBuilder,private service:AuthService,private router:Router,private http : HttpClient){}
//     ngOnInit(): void{
//         this.createForm()
//     }

//     createForm(){
//         this.signupForm = this.fb.group({
//             group:['', [Validators.required]],
//             fullname:['', [Validators.required]],
//             email:['', [Validators.required, Validators.email]],
//             password:['', [Validators.required]]

//         })
//     }


//   signUp(){
//     this.http.post<any>("http://localhost:3000/students", this.signupForm.value)
//     .subscribe(res=>{
//       alert("Signup Successful");
//       this.signupForm.reset();
//       this.router.navigate(['welcome']);
//     },err=>{
//       alert("Something went wrong")
//     })
//   }



// }








// // }

























































