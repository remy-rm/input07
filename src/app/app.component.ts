import { Component, OnInit } from '@angular/core';
import { devlopers } from './model/developer.model';
import { skills } from './model/skills.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'input07';
  devlopers!: devlopers[];

  ngOnInit() {
    this.devlopers =[
      new devlopers(
      'remy','marquis',26,'developer',
        [new skills('magie','50','50'),
        new skills('force','00','70')
      ]),
      new devlopers(
        'jhon','doe',56,'unknown',
          [new skills('invincibilité','100','100'),
          new skills('invisibilité','100','100')
        ])
    ]
  }
}


