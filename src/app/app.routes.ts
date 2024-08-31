import { Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { HomeComponent } from './components/home/home.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { AcademicsComponent } from './components/academics/academics.component';
import { RecognitionsComponent } from './components/recognitions/recognitions.component';
import { ProjectsComponent } from './components/projects/projects.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'dvinay.in'
    },
    {
        path: 'experience',
        component: ExperienceComponent,
        title: 'dvinay.in | Work Experience',
    },
    {
        path: 'academics',
        component: AcademicsComponent,
        title: 'dvinay.in | Academics',
    },
    {
        path: 'recognitions',
        component: RecognitionsComponent,
        title: 'dvinay.in | Recognitions',
    },
    {
        path: 'about-me',
        component: AboutMeComponent,
        title: 'dvinay.in | About Me',
    },
    {
        path: "projects",
        component: ProjectsComponent,
        title: "Profile"
    }
];
