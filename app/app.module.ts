import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {EventsAppComponent} from "./events-app.component";
import {EventsListComponent} from "./events/events-list.component";
import {EventThumbnailComponent} from "./events/event-thumbnail.component";
import {NavbarComponent} from "./nav/navbar.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavbarComponent
    ], //All components need to be registered with the app module
    bootstrap: [EventsAppComponent]
})

export class AppModule {}