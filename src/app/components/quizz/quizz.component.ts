import { Component, OnInit } from '@angular/core';

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
  }

}
