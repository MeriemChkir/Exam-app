import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// if you import httpclient in the service we have to import httpclient module
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http : HttpClient) { }

  getQuestionJson(){
    return this.http.get<any>("assets/questions.json");
  }
}
