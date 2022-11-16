import { Component, OnInit } from '@angular/core';
import quizz_questions from "../../../assets/data/quizz_questions.json"

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {

  title: string = 'Título do componente';

  questions: any;
  questionSelected: any;

  questionIndex: number = 0;
  questionMaxIndex: number = 0;

  finished: boolean = false;

  answers: string[] = [];
  answerSelected: string ='';

  constructor() { }

  ngOnInit(): void {
    if(quizz_questions){
      this.finished = false;
      this.title = quizz_questions.title;

      this.questions = quizz_questions.questions;
      this.questionSelected = this.questions[this.questionIndex];

      this.questionIndex = 0;
      this.questionMaxIndex = this.questions.length;
    }
  }

  playerChoose(value: string):void {
    this.answers.push(value);
  }

  async nextStep(){
    this.questionIndex += 1;

    if (this.questionMaxIndex > this.questionIndex){
      this.questionSelected = this.questions[this.questionIndex]
    }else{
      this.finished = true;
    }
  }

}
