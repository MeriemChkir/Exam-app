import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
}) 
export class QuestionComponent implements OnInit {

  public name : string="";
  public number: string="";
  public questionList : any = [];
  public currentQuestion:number = 0;
  public points: number=0;
  counter=60;
  correctAnswer: number=0;
  wrongAnswer: number = 0;
  interval$:any;
  progress:string="0";
  isQuizCompleted : boolean = false;
  constructor(private questionService : QuestionService) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.number = localStorage.getItem("number")!;
    // we added "!" to show that name should have a value and should be defined
    this.getAllQuestions();
    this.startCounter();
  }
  getAllQuestions(){
    this.questionService.getQuestionJson()
    // this is an observable
    .subscribe(res=>{
      this.questionList = res.questions;
      // this to see if it works or not in the console and then we need to call the method in ngOnInit
  })
  }
  nextQuestion(){
    this.currentQuestion++;
  }
  previousQuestion(){
    this.currentQuestion--;
  }
  answer(currentQuestion:number,option: any){
    if(currentQuestion == this.questionList.length){
      this.isQuizCompleted = true;
      this.stopCounter();
    }
    if (option.correct) {
      this.points += 10;
      this.correctAnswer++;
      setTimeout(() => {
        this.currentQuestion++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);


    } else {
      setTimeout(() => {
        this.currentQuestion++;
        this.wrongAnswer++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);

      this.points -= 10;
    }
  }
  startCounter(){
    this.interval$ = interval(1000)
    .subscribe(val=>{
      this.counter--;
      if (this.counter==0) {
        this.currentQuestion++;
        this.counter=60;
        this.points-=10;
      }
    });
  setTimeout(() => {
    this.interval$.unsubscribe();
  }, 600000);
}
  stopCounter(){
    this.interval$.unsubscribe();
    this.counter=0;
  }
  resetCounter(){
    this.stopCounter();
    this.counter=60;
    this.startCounter();
  }
  resetQuiz(){
    this.resetCounter();
    this.getAllQuestions();
    this.points=0;
    this.counter=60;
  }
  getProgressPercent(){
    this.progress = ((this.currentQuestion/this.questionList.length)*100).toString();
    return this.progress;
  }
}
