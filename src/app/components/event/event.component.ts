import {Component, OnInit} from '@angular/core';
import {NotifierService} from 'angular-notifier';

@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

    private readonly notifier: NotifierService;

    constructor( notifierService: NotifierService ) {
        this.notifier = notifierService;
    }

    ngOnInit() {
    }

    editEvent() {
        this.notifier.notify( 'info', 'Bearbeiten Button geklickt.' );
    }

    deleteEvent() {
        this.notifier.notify( 'error', 'Löschen Button geklickt.' );
    }

}
