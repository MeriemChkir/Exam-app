import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  @ViewChild('name') nameKey! : ElementRef;
  @ViewChild('number') numberKey! : ElementRef;
  // name should match with the template name in the html component
  constructor() { }

  ngOnInit(): void {
  }
  startQuiz(){
    localStorage.setItem("name",this.nameKey.nativeElement.value);
    localStorage.setItem("number",this.numberKey.nativeElement.value);
    // whatever value of that particular input will be stored inside the local storage

  }

}
