export interface Question{
    id?: string
    title: string
    category: string
    question:string
    userId:string
    timeCreated:string
}

export interface Answer{
    id?: string
    answer:string
    questionId:string
    timeCreated:string
    userId:string
}

export interface Comment{
    id?: string
    comment:string
    answerId:string
    timeCreated:string
    userId:string
}

export interface QuestionVote{
    vote:string    
    questionId:string
    userId:string  
}

export interface AnswerVote{
    vote:string    
    answer:string
    userId:string  
}