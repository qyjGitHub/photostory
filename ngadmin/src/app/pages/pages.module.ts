import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { routes } from './pages.routing';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { TenantsComponent } from './tenants/tenants.component';
import { AboutComponent } from './about/about.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(routes, { useHash: true })
    ],
    declarations: [
        HomeComponent,
        UsersComponent,
        RolesComponent,
        TenantsComponent,
        AboutComponent
    ],
    exports: [
        RouterModule
    ]
})

export class PagesModule {}
