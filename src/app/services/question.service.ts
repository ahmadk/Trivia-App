import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { QuestionModel, OpentdbResult } from '../models/models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private questionsBehavior: BehaviorSubject<QuestionModel[] | null>;

  constructor(private httpClient: HttpClient, private router: Router) {
    this.questionsBehavior = new BehaviorSubject<QuestionModel[] | null>(null);
  }

  private set questions(value) {
    // if (value && (!this.currentSchoolYear || this.currentSchoolYear.Id !== value.Id)) {
    this.questionsBehavior.next(value);

    // if (this.currentLocation) {
    //   this.reloadQueriesBehavior.next(true);
    // }
    // }
  }

  get questionList() {
    if ((!this.questionsBehavior.value)) {
      this.router.navigate(['/'])

      return [];
    }
    return this.questionsBehavior ? this.questionsBehavior.getValue() : [];
  }

  fetchQuestions(level: string) {
    return this.httpClient.get<OpentdbResult>(`https://opentdb.com/api.php?amount=10&category=9&difficulty=${level.toLowerCase()}&type=multiple`)
      .pipe(
        map(s => this.questions = s.results)
      );
  }
}