import { Component } from '@angular/core';
import { ExperienceCardComponent } from '../experience-card/experience-card.component';
import { IWorkExperienceList } from '../../interfaces/work-experience-list.array';
import { NgFor } from '@angular/common';
import { WorkExperienceService } from '../../services/work-experience.service';
import { WorkExperienceList } from '../../models/work-experience-list';


@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ExperienceCardComponent, NgFor],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
  providers: [WorkExperienceService]
})

export class ExperienceComponent {

  experienceList: IWorkExperienceList = new WorkExperienceList();

  constructor(private experienceService: WorkExperienceService) { }

  ngOnInit() {
    this.fetchExperienceList();
  }

  fetchExperienceList() {
    this.experienceService.getExperienceList().subscribe((data) => {
      this.experienceList = data;
    });
  }
}
