import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('toggleTooltip', [
      state('hidden', style({
        opacity: 0
      })),
      state('visible', style({
        opacity: 100,
        width: '250px'
      })),
      transition('hidden => visible', [
        style({ opacity: 100, transform: 'translateY(-50%)'}),
        animate('.3s ease-out', style({  transform: 'translateY(0%)' }))
      ]),
      transition('visible => hidden', [
        animate('.3s ease-out', style({ transform: 'translateY(-50%)' }))])
    ])
  ]
})

export class HomeComponent {
  follow_tooltip_state = new Map<string, string>();

  ngOnInit() {
    this.follow_tooltip_state.set('github', 'hidden');
    this.follow_tooltip_state.set('linkedin', 'hidden');
    this.follow_tooltip_state.set('instagram', 'hidden');
    this.follow_tooltip_state.set('medium', 'hidden');
  }
  

  toggleTooltip(elementName: any) {
    if (this.follow_tooltip_state.get(elementName) == 'hidden')
      this.follow_tooltip_state.set(elementName, 'visible');
    else
      this.follow_tooltip_state.set(elementName, 'hidden');

    //console.log(elementName + "->" + this.follow_tooltip_state.get(elementName));
  }
}
