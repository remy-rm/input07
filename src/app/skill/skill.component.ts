import { Component,Input } from '@angular/core';
import { skills } from '../model/skills.models';
import { devlopers } from '../model/developer.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  @Input() skills!:skills[];
 

}
