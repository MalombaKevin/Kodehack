"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Answer = exports.Question = void 0;
class Question {
    constructor(questionId, title, category, question, timeCreated, userId) {
        this.questionId = questionId;
        this.title = title;
        this.category = category;
        this.question = question;
        this.timeCreated = timeCreated;
    }
}
exports.Question = Question;
class Answer {
    constructor(answerId, answer, timeCreated, userId, questionId) {
        this.answerId = answerId;
        this.answer = answer;
        this.timeCreated = timeCreated;
        this.userId = userId;
        this.questionId = questionId;
    }
}
exports.Answer = Answer;
