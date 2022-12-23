import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { TeacherModel } from './teacher-dash board.model';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.scss']
})
export class TeacherDashboardComponent implements OnInit {

  formStudent !: FormGroup ;
  teacherModelObj : TeacherModel = new TeacherModel()
  studentData !: any;
  
  constructor(private formbuilder: FormBuilder, private api : ApiService) { }

  ngOnInit(): void {
    this.formStudent = this.formbuilder.group({
      firstName : [''],
      lastName : [''],
      email : [''],
      mark : [''],
      Class : ['']
    
    })
    this.getAllStudents();
  }

  postStudentDetails(){
    this.teacherModelObj.firstName = this.formStudent.value.firstName;
    this.teacherModelObj.lastName = this.formStudent.value.lasttName;
    this.teacherModelObj.email = this.formStudent.value.email;
    this.teacherModelObj.mark = this.formStudent.value.mark;
    this.teacherModelObj.Class = this.formStudent.value.Class;

    this.api.postStudent(this.teacherModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Student added successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formStudent.reset();
      this.getAllStudents();
    },
    err=>{
      alert("Something went wrong");
    })
    
  }

  getAllStudents(){
    this.api.getStudent()
    .subscribe(res=>{
      this.studentData = res;
    })
  }

    deleteStudent(row : any){
    this.api.deleteStudent(row.id)
    .subscribe(res=>{
      alert("Student Deleted")
      this.getAllStudents();
    })
  }

  onEdit(row : any){
    this.formStudent.controls['firstName'].setValue(row.firstName);
    this.formStudent.controls['lastName'].setValue(row.lastName);
    this.formStudent.controls['email'].setValue(row.email);
    this.formStudent.controls['mark'].setValue(row.mark);
    this.formStudent.controls['Class'].setValue(row.Class);

  }








}
