

export class Question {

    constructor(public questionId: string, public title: string, public category:string, public question:string, public timeCreated:Date, userId:string){}

}



export class Answer {
    constructor(public answerId: string, public answer: string, public timeCreated:Date, public userId:string, public questionId:string){}
}

