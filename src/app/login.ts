export class Login {

    constructor(
        public institution: string,
        public email: string,
        public password: string,
        public remember?: boolean
    ) {  }

}
