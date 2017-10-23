import { Component, Input, Output, EventEmitter } from "@angular/core";


@Component({
    selector: 'event-thumbnail',
    template: `
        <div class="well hoverwell thumbnail">
            <!--Example of style binding
            <h2 [style.color]="event?.time === '8:00 am' ? '#003300' : '#bbb'">{{event?.name}}</h2>
            -->
            <!--Example of using ngStyle
            With ngStyle the keys of the object are the property names are style properties and the values are a ternary statement that
            will set those values based on whether the ternary is true or false. This works but is really convoluted statement to have in a template.
            <h2 [ngStyle]="{'color': event?.time === '8:00 am' ? '#003300' : '#bbb', 'font-weight': event?.time === '8:00 am' ? 'bold' : 'normal'}">{{event?.name}}</h2>
            -->
            <!--An alternative with ngSwitch binding is to use a function in order to keep the logic out of the template
            -->
            <h2 [ngStyle]="getStartTimeStyle()">{{event?.name}}</h2>
            <div>Date: {{event?.date}}</div>
            <!--Example of class binding: Good for adding a single class
            <div [class.green]="event?.time === '8:00 am'"></div>
            -->
            <!--Example of ngClass binding: Good for adding a multiple classes
            ngClass binding expects an object where the object keys are the names of the classes to add and the values are a boolean expression that determines
            whether or not that class should be shown
            <div [ngClass]="{green: event?.time === '8:00 am', bold: event?.time === '8:00 am'}"></div>
            -->
            <!--An alternative with ngClass binding is you can pass it a function in order to keep the logic out of the template
            <div [ngClass]="getStartTimeClass()"></div>-->
            
            <div class="test" [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">Time: {{event?.time}}
                <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                <span *ngSwitchDefault>(Normal Start)</span>
            </div>
            <div>Price: \${{event?.price}}</div>
            <div [hidden]="!event?.location">
                <span>Location: {{event?.location?.address}}</span>
                <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
            </div>
            <div *ngIf="event?.onlineUrl">
                Online URL: {{event?.onlineUrl}}
            </div>
            <div class="btn btn-primary" (click)="handleClickMe()">Click Me!</div>
        </div>
    `,
    styles: [`
        .green { color: #003300 !important; }
        .bold { font-weight: bold; }
        .thumbnail {min-height:250px;}
        .pad-left { margin-left:10px; }
        .well div { color: #bbb; }
    `]
})

export class EventThumbnailComponent {
    @Input() event:any //@Input decorator tells angular that this event will be passed in from another component
    @Output() eventClick = new EventEmitter()

    handleClickMe() {
        console.log('clicked!');
        this.eventClick.emit(this.event.name);
    }

    getStartTimeClass():any {
        //Note ngClass can accept an object, a string of space separated classes or an array of classes

        //Object returned
        const isEarlyStart = this.event && this.event.time === '8:00 am';
        return {green: isEarlyStart, bold: isEarlyStart};

        //String returned
       /* if (this.event && this.event.time === '8:00 am') {
            return 'green bold';
        }
        return '';
        */

       //Array returned
        /*if (this.event && this.event.time === '8:00 am') {
            return ['green', 'bold'];
        }
        return [];
        */
    }

    /*
    Because these 2 objects are different shapes
    we have to set the return type of the function to 'any' to satisfy TypeScript
    */
    getStartTimeStyle():any {
        if (this.event && this.event.time === '8:00 am') {
            return {'color': '#003300', 'font-weight': 'bold'}
        }
        return {}
    }

    //Examples of binding to template variables on a component to access public properties and methods. Example uses #thumbnail

    someProperty:any = 'some value';

    logFoo(){
        console.log('foo');
    }
}