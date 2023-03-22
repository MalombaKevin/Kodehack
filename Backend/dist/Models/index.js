"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Answer = exports.Question = void 0;
class Question {
    constructor(questionId, title, category, question, timeCreated, userId, is_checked) {
        this.questionId = questionId;
        this.title = title;
        this.category = category;
        this.question = question;
        this.timeCreated = timeCreated;
    }
}
exports.Question = Question;
class Answer {
    constructor(answerId, answer, timeCreated, userId, questionId, is_checked) {
        this.answerId = answerId;
        this.answer = answer;
        this.timeCreated = timeCreated;
        this.userId = userId;
        this.questionId = questionId;
    }
}
exports.Answer = Answer;
class User {
    constructor(userId, username, email, password, timeCreated, is_admin, is_deleted, forgot_sent, welcome_sent) {
        this.userId = userId;
        this.username = username;
        this.email = email;
        this.password = password;
        this.timeCreated = timeCreated;
        this.is_admin = is_admin;
        this.forgot_sent = forgot_sent;
        this.welcome_sent = welcome_sent;
    }
}
exports.User = User;
