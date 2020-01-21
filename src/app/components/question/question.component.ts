import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { QuestionModel } from 'src/app/models/models';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  model: QuestionModel | null;
  id: number;
  suffleAnswers: string[];

  public get numOfQuestion(): number {
    return this.questionService.questionList ? this.questionService.questionList.length : 0;
  }

  public get points(): number {
    return this.id * 100;
  }

  constructor(private router: Router,
    private route: ActivatedRoute,
    private questionService: QuestionService) {
    this.model = null;
    this.suffleAnswers = [];
  }

  ngOnInit() {
    this.route.paramMap.subscribe(p => {
      this.id = +p.get('id');

      this.model = this.questionService.questionList[this.id];

      let array = new Array<string>();
      this.model.incorrect_answers.forEach(a => array.push(a));
      array.push(this.model.correct_answer);

      this.suffleAnswers = this.shuffleAnswerArray(array)
    });
  }

  getAnswers(): string[] {
    return this.suffleAnswers;
  }

  private shuffleAnswerArray(array: string[]) {
    let suffleAnswers = new Array<string>();

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  checkChoice(answer: string) {
    if (this.model.correct_answer == answer) {
      let id = this.id + 1;
      if (id < this.numOfQuestion) {
        this.router.navigate(['/question', id])
      }
      else {
        this.router.navigate(['/congratulation'])
      }
    }
    else {
      this.router.navigate(['/error'], { queryParams: { points: this.points - 100 } });
    }
  }
}