import { NgFor, NgStyle } from '@angular/common';
import { Component, ElementRef, Input } from '@angular/core';
import { IWorkExperience } from '../../interfaces/work-experience';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [NgStyle, NgFor],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.css'
})

export class ExperienceCardComponent {
  vlineHeight = '0px';
  vlineTop = '0px';

  @Input() exp!: IWorkExperience;

  constructor(private elRef: ElementRef) {}

  ngAfterContentChecked() {
    this.updateVline();
  }

  updateVline() {
    var endYear = $(this.elRef.nativeElement).find(".experience-card-end-year");
    var startYear = $(this.elRef.nativeElement).find(".experience-card-start-year");

    var endYearBottom = endYear.position().top;
    endYearBottom += endYear.outerHeight() ?? endYear.height() ?? 0;
    var startYearTop = startYear.position().top;

    this.vlineHeight = (startYearTop - endYearBottom) + "px";
  }
}
