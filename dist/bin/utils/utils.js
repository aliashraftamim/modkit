"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchAsync = exports.sendResponse = exports.auth = exports.validateRequest = void 0;
const validateRequest = (fileName) => {
    return fileName;
};
exports.validateRequest = validateRequest;
const auth = (fileName) => {
    return fileName;
};
exports.auth = auth;
const sendResponse = (n1, n2) => {
    return { n1, n2 };
};
exports.sendResponse = sendResponse;
const catchAsync = (n1) => {
    return { n1 };
};
exports.catchAsync = catchAsync;
