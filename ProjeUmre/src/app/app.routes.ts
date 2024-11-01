import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HacComponent } from './component/hac/hac.component';
import { UmreComponent } from './component/umre/umre.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { KudusComponent } from './component/kudus/kudus.component';
import { TurlarComponent } from './component/turlar/turlar.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"Home",
        component:HomeComponent
    },
    {
        path:"Turlar",
        component:TurlarComponent
    },
    {
        path:"Hac",
        component:HacComponent
    },
    {
        path:"Umre",
        component:UmreComponent
    },
    {
        path:"kudus",
        component:KudusComponent
    },
    {
         path:"Contact",
        component:ContactComponent
    },
    {
        path:"About",
        component:AboutComponent
    }

];
