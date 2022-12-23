// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
// import { AuthService } from '../SERVICES/auth.service';
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent implements OnInit {

//   loginform!:FormGroup;
//   users:any[]= [];
//   type:string = "students"
//   constructor(private fb:FormBuilder ,private service:AuthService  , private router:Router , private toaster:ToastrService) { }

//   ngOnInit(): void {
//     this.getUsers();
//     this.createForm()
//   }

//   createForm() {
//     this.loginform = this.fb.group({
//       type:[this.type],
//       email:['' , [Validators.required , Validators.email]],
//       password:['' , [Validators.required]],
//     })
//   }

//   getRole(event:any) {
//     this.type = event.value
//     this.getUsers()
//   }
//   getUsers() {
//     this.service.getUsers(this.type).subscribe((res:any) => {
//       this.users = res
//     })
//   }

//   submit() {
//    const model = {
//     email:this.loginform.value.email,
//     password:this.loginform.value.password,
//    }

//     let index = this.users.findIndex(item => item.email == this.loginform.value.email && item.password == this.loginform.value.password  )
//     if(index == -1) {
//       this.toaster.error("الايميل او كلمة المرور غير صحيحة" , "" , {
//         disableTimeOut: false,
//         titleClass: "toastr_title",
//         messageClass: "toastr_message",
//         timeOut:5000,
//         closeButton: true,
//       })
//     }else {
//       const model = {
//         username:this.users[index].username,
//         role:this.type,
//         userId:this.users[index].id
//       }
//       this.service.login(model).subscribe(res => {
//         this.service.user.next(res)
//         this.toaster.success("تم تسجيل الدخول بنجاح" , "" , {
//           disableTimeOut: false,
//           titleClass: "toastr_title",
//           messageClass: "toastr_message",
//           timeOut:5000,
//           closeButton: true,
//         })
//         this.router.navigate(['/welcome'])
//       })
//     }

//   }

// }








import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email : string = '';
  password : string= '';
  roles : string[];
  login:FormGroup|any;

  constructor(private _http:HttpClient, private _route:Router) { 
    this.roles = [
      'teacher',
      'student'
    ]
  }

  ngOnInit(): void {
    this.login = new FormGroup({
      'email': new FormControl(),
      'password': new FormControl()
    })
  }
  logindata(login:FormGroup){
    console.log(this.login.value);
    this._http.get<any>("http://localhost:3000/students")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.login.value.email && a.password === this.login.value.password
      });

      if(user){
        alert('you are successfully login');
        this._route.navigate(['welcome']);
        this.login.reset();
        $('.form-box').scss('display','none');
      }else{
        alert('User Not Found');
        this._route.navigate(['signup']);
      }

    }, err=>{
      alert('Something went wrong');
    })
   

  }

  sbtn1(){
    $('.form-box').scss('display','none');
    $('.form-box1').scss('display','block');
  } 
}


