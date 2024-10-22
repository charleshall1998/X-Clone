import { Routes } from "@angular/router";
import { ProfileComponent } from "./features/profile/profile.component";
import { SettingsComponent } from "./features/settings/settings.component";

export const routes: Routes = [
    {
        path: "profile",
        component: ProfileComponent
    },
    {
        path: "settings",
        component: SettingsComponent
    }
]