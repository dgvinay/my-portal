import { IWorkExperience } from "../interfaces/work-experience";
import { IWorkExperienceList } from "../interfaces/work-experience-list.array";
import { WorkExperience } from "./work-experience";

export class WorkExperienceList implements IWorkExperienceList {
    Experiences: IWorkExperience[];

    constructor() {
        this.Experiences = new Array<WorkExperience>();
    }
}
