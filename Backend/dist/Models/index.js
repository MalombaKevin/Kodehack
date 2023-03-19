"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
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
