export class Event {

    constructor(
        public lernfeld: string,
        public timeslot: string,
        public members: Array<string>,
        public isArchived: boolean
    ) {  }

}