export class Event {

    constructor(
        public lernfeld: string,
        public timeslot: string,
        public members: Array<object>,
        public isArchived: boolean
    ) {  }

}