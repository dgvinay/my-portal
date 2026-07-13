import { NgFor, NgStyle } from '@angular/common';
import { AfterViewChecked, Component, ElementRef, Input } from '@angular/core';
import { IWorkExperience } from '../../interfaces/work-experience';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [NgStyle, NgFor],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.css'
})

export class ExperienceCardComponent implements AfterViewChecked {
  vlineHeight = '0px';

  @Input() exp!: IWorkExperience;

  constructor(private elRef: ElementRef) {}

  ngAfterViewChecked() {
    this.updateVline();
  }

  updateVline() {
    const nativeEl = this.elRef.nativeElement as HTMLElement;
    const endYear = nativeEl.querySelector('.experience-card-end-year') as HTMLElement | null;
    const startYear = nativeEl.querySelector('.experience-card-start-year') as HTMLElement | null;

    if (!endYear || !startYear) {
      this.vlineHeight = '0px';
      return;
    }

    const endYearBottom = endYear.offsetTop + endYear.offsetHeight;
    const startYearTop = startYear.offsetTop;

    this.vlineHeight = `${Math.max(0, startYearTop - endYearBottom)}px`;
  }
}
