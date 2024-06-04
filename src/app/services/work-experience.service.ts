import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWorkExperienceList } from '../interfaces/work-experience-list.array';
import { WorkExperienceList } from '../models/work-experience-list';
import { WorkExperience } from '../models/work-experience';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {

  constructor() { }

  getExperienceList(): Observable<IWorkExperienceList> {
    var expList = new WorkExperienceList();

    expList.Experiences = new Array<WorkExperience>();

    expList.Experiences.push(this.addPersistent());
    expList.Experiences.push(this.addAurigo());
    expList.Experiences.push(this.addSabre());
    expList.Experiences.push(this.addShawman());

    return new Observable<IWorkExperienceList>(observer => {
      observer.next(expList);
      observer.complete
    });
  }

  addPersistent(): WorkExperience {
    var exp = new WorkExperience();
    exp.CompanyName = "Persistent Systems Limited";
    exp.Designation = "Architect";
    exp.Duration = "June 2021 - Present";
    exp.EndYear = 2024;
    exp.StartYear = 2021;

    exp.TechnologyStack = new Array<string>();
    exp.TechnologyStack.push("AWS");
    exp.TechnologyStack.push("Asp.Net Core");
    exp.TechnologyStack.push("AWS Lambda Functions");
    exp.TechnologyStack.push("AWS S3");
    exp.TechnologyStack.push("RDS");
    exp.TechnologyStack.push("DynamoDB");
    exp.TechnologyStack.push("EKS");
    exp.TechnologyStack.push("CloudFront");
    exp.TechnologyStack.push("Web API");
    exp.TechnologyStack.push("Lambda@Edge");
    exp.TechnologyStack.push("Auth0");
    exp.TechnologyStack.push("Token Authentication");

    exp.Responsibilities.push("Designed the system for importing media files from on-premises storage into S3 and making them available for download and streaming using CloudFront.");
    exp.Responsibilities.push("Designed the process for making the media files available for streaming using AWS Elemental media convert service.");
    exp.Responsibilities.push("Designed the security for serving the file using the Lambda@Edge. Implemented token-based authentication and Audit Trail mechanism.");
    exp.Responsibilities.push("Designed and implemented API to upload files and process (virus scanning, metadata extraction) them asynchronously before making them available for download or streaming.");
    exp.Responsibilities.push("Hosted the Upload API as a Microservice on the EKS deployed using Azure DevOps and help charts.");
    exp.Responsibilities.push("Written a whitepaper and POC for creating CDN using CloudFront with origin as S3 buckets.");


    return exp;
  }

  addAurigo(): WorkExperience {
    var exp = new WorkExperience();
    exp.CompanyName = "Aurigo Software Technologies Private Limited";
    exp.Designation = "Engineering Lead";
    exp.Duration = "August 2013 - June 2021";
    exp.EndYear = 2021;
    exp.StartYear = 2013;

    exp.TechnologyStack = new Array<string>();
    exp.TechnologyStack.push(".Net Core");
    exp.TechnologyStack.push("Asp.Net Core");
    exp.TechnologyStack.push("Entity Framework Core");
    exp.TechnologyStack.push("MS SQL");
    exp.TechnologyStack.push("AWS S3");
    exp.TechnologyStack.push("DynamoDB");
    exp.TechnologyStack.push("ASP.NET");
    exp.TechnologyStack.push(".Net Frawmework");
    exp.TechnologyStack.push("IdentityServer4");
    exp.TechnologyStack.push("JavaScript");
    exp.TechnologyStack.push("jQuery");
    exp.TechnologyStack.push("KendoJS");
    exp.TechnologyStack.push("Bootstrap");
    exp.TechnologyStack.push("Telerik Controls");
    exp.TechnologyStack.push("Web API");
    exp.TechnologyStack.push("Token Authentication");

    exp.Responsibilities.push("Led a team of 4 or more people.");
    exp.Responsibilities.push("Implementation of DI (partially) in the monolithic application.");
    exp.Responsibilities.push("Analyze the change impact on the product and intimate the product stakeholders.");
    exp.Responsibilities.push("Designing & implementing new modules in the product.");
    exp.Responsibilities.push("Review and repair legacy code.");
    exp.Responsibilities.push("Training and guiding new employees joining the organization.");
    exp.Responsibilities.push("Integration with other software like Documentum, DocuSign, Primavera, etc.");
    exp.Responsibilities.push("Worked on the initial implementation of the hybrid mobile app using Kendo Mobile controls, JavaScript, and Web API");
    exp.Responsibilities.push("Participate in the design discussions.");
    exp.Responsibilities.push("Implementing the features of Masterworks to work with the new service.");
    exp.Responsibilities.push("Implementation of migration utility to move the existing documents to the S3 bucket.");
    exp.Responsibilities.push("Implementation of logging using the serilog library.");


    return exp;
  }

  addSabre(): WorkExperience {
    var exp = new WorkExperience();
    exp.CompanyName = "Sabre Travel Technologies Private Limited";
    exp.Designation = "Associate Software Developer";
    exp.Duration = "April 2011 - June 2013";
    exp.EndYear = 2013;
    exp.StartYear = 2011;

    exp.TechnologyStack.push("MS SQL");
    exp.TechnologyStack.push("ASP.NET");
    exp.TechnologyStack.push("ASP.NET Web Forms");
    exp.TechnologyStack.push(".Net Frawmework");
    exp.TechnologyStack.push("JavaScript");
    exp.TechnologyStack.push("Web API");

    exp.Responsibilities.push("Work on the development and implementation projects, features, and enhancements.");
    exp.Responsibilities.push("Actively work and debug issues raised by stakeholders and participate in the maintenance activities of the modules.");
    exp.Responsibilities.push("Handle product deployment and project releases.");
    exp.Responsibilities.push("Participate in design discussion and project level update meetings.");

    return exp;
  }

  addShawman(): WorkExperience {
    var exp = new WorkExperience();
    exp.CompanyName = "Shawman Software Private Limited";
    exp.Designation = "Junior Software Developer";
    exp.Duration = "February 2010 - April 2011";
    exp.EndYear = 2011;
    exp.StartYear = 2010;

    exp.TechnologyStack.push("MS SQL");
    exp.TechnologyStack.push("ASP.NET");
    exp.TechnologyStack.push("ASP.NET Web Forms");
    exp.TechnologyStack.push(".Net Frawmework 1.1 / 2.0 / 3.5");
    exp.TechnologyStack.push("JavaScript");
    exp.TechnologyStack.push("Ajax");
    exp.TechnologyStack.push("VB.NET");

    exp.Responsibilities.push("MIS reports for Material Management system - I was involved in understanding the requirements of the report, designing the user interface and coding, generation of reports, optimizing queries.");
    exp.Responsibilities.push("Material Management System with batch logic - I was involved in redesigning the module to incorporate Batch Logic in it, interacting with higher management to understand the requirements of each module, designing the user interface and coding.");
    exp.Responsibilities.push("Contact Management System – I was involved in understanding the functional requirements of an application by interacting with clients and high-level management, development of an interface between two sites by using web service, handled deployment to live server through FTP.");
    exp.Responsibilities.push("Assessment Square – Involved in Interacting with the client to understand any functional requirement, resolving any bugs reported by the client, handled deployment to live servers through FTP.");
    exp.Responsibilities.push("Retail POS – Involved in Interacting with the client to understand the requirement of the module, resolving any bugs reported by the client, designing of the new module, and coding.");  

    return exp;
  }
}
