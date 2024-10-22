import { Routes } from "@angular/router";
import { ProfileComponent } from "./features/profile/profile.component";
import { SettingsComponent } from "./features/settings/settings.component";
import { HomeComponent } from "./features/home/home.component";

export const routes: Routes = [
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "profile",
        component: ProfileComponent
    },
    {
        path: "settings",
        component: SettingsComponent
    }
]