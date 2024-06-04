import { stringify } from "node:querystring";
import { IWorkExperience } from "../interfaces/work-experience";

export class WorkExperience implements IWorkExperience {
    public CompanyName: string;
    public StartYear: number;
    public EndYear: number;
    public Designation: string;
    public Duration: string;
    public TechnologyStack: Array<string>;
    public Responsibilities: Array<string>;

    constructor() {
        this.CompanyName = "";
        this.StartYear = 0;
        this.EndYear = 0;
        this.Designation = "";
        this.Duration = "";
        this.TechnologyStack = new Array<string>();
        this.Responsibilities = new Array<string>();
    }
}
