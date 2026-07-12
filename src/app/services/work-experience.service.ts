import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IWorkExperienceList } from '../interfaces/work-experience-list.array';
import { WorkExperienceList } from '../models/work-experience-list';
import { WorkExperience } from '../models/work-experience';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {

  constructor(private http: HttpClient) { }

  getExperienceList(): Observable<IWorkExperienceList> {
    return this.http.get<any>('assets/data/work-experiences.json').pipe(
      map(data => {
        const expList = new WorkExperienceList();
        expList.Experiences = data.experiences.map((exp: any) => {
          const workExp = new WorkExperience();
          workExp.CompanyName = exp.companyName;
          workExp.Designation = exp.designation;
          workExp.Duration = exp.duration;
          workExp.StartYear = exp.startYear;
          workExp.EndYear = exp.endYear;
          workExp.TechnologyStack = exp.technologyStack;
          workExp.Responsibilities = exp.responsibilities;
          return workExp;
        });
        return expList;
      })
    );
  }
}
