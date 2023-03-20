"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Answer = exports.Question = void 0;
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
class User {
    constructor(userId, email, password, timeCreated, is_admin, is_deleted) {
        this.userId = userId;
        this.email = email;
        this.password = password;
        this.timeCreated = timeCreated;
        this.is_admin = is_admin;
    }
}
exports.User = User;
