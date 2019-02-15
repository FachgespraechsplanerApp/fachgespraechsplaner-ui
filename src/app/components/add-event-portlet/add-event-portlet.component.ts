import {Component, OnInit} from '@angular/core';
import {Event} from '../../event';
import {isNullOrUndefined} from 'util';
import {NotifierService} from 'angular-notifier';

@Component({
    selector: 'app-add-event-portlet',
    templateUrl: './add-event-portlet.component.html',
    styleUrls: ['./add-event-portlet.component.css']
})
export class AddEventPortletComponent implements OnInit {

    private readonly notifier: NotifierService;

    constructor( notifierService: NotifierService ) {
        this.notifier = notifierService;
    }

    lernfelder: any = [
        ['LF6', 'Lernfeld 6: Anwendungsentwicklung'],
        ['LF7', 'Lernfeld 7: Test']
    ];
    timeslots: any = [
        ['LF6', 1, 'LF6: AE-DB-3 Datenbankprojekt'],
        ['LF7', 2, 'LF7: Test']
    ];
    dropdownList = [];
    dropdownSettings = {};

    availableTimeslots: any = [];

    model: Event = new Event(null, null, [{'id': 1, 'itemName': 'b25a20_mustermann'}], false);

    ngOnInit(): void {
        this.dropdownList = [
            {'id': 1, 'itemName': 'b25a20_mustermann'},
            {'id': 2, 'itemName': 'b25a20_mueller'},
            {'id': 3, 'itemName': '_musterfrau'},
        ];
        this.dropdownSettings = {
            singleSelection: false,
            text: 'Teilnehmer wählen',
            enableCheckAll: false,
            showCheckbox: false,
            enableFilterSelectAll: false,
            enableSearchFilter: true
        };
    }

    reloadTimeslots() {
        if (!isNullOrUndefined(this.timeslots)) {
            this.availableTimeslots = [];
            for (const timeslot of this.timeslots) {
                if (timeslot[0] === this.model.lernfeld) {
                    this.availableTimeslots.push(timeslot);
                }
            }
        }
    }

    onSubmit() {
        // TODO: make REST-Call to API Server to Login the user.
        // TODO: redirect User to /dashboard after successful login.
        console.log(this.model); // TODO: remove console.log when done.
        this.notifier.notify( 'success', 'Der Termin wurde eingetragen.' );
    }

    onItemSelect(item: any) {
        //
    }
    OnItemDeSelect(item: any) {
        //
    }

}
