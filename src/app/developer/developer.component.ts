import { Component,Input,OnInit } from '@angular/core';
import { devlopers } from '../model/developer.model';
import { skills } from '../model/skills.models';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent   {

  @Input() developer!: devlopers

  
  
  }

