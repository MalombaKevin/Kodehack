

export class Question {

    constructor(public questionId: string, public title: string, public category:string, public question:string, public timeCreated:Date, userId:string){}

}



export class Answer {
    constructor(public answerId: string, public answer: string, public timeCreated:Date, public userId:string, public questionId:string){}
}


export class User {
    constructor(public userId: string, public email: string, public password:string, public  timeCreated:Date,public is_admin: string,  is_deleted : string){}
}





