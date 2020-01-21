import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-congratulation',
  templateUrl: './congratulation.component.html',
  styleUrls: ['./congratulation.component.css']
})
export class CongratulationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  replay() {
    this.router.navigateByUrl('/');
  }
}
