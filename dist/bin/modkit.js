#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const modkit_template_1 = require("./modkit.template");
// Utility: Convert to PascalCase
const toPascalCase = (str) => str
    .split(/[_-]/)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
// Utility: Convert to camelCase
const toCamelCase = (str) => {
    const pascal = toPascalCase(str);
    return pascal.charAt(0).toLowerCase() + pascal.slice(1);
};
// Input path
const inputPath = process.argv[2];
if (!inputPath) {
    console.error("\u274C Folder path is required!\nUsage: modkit <absolute/path/to/folder>");
    process.exit(1);
}
const folderPath = path_1.default.resolve(inputPath);
const name = path_1.default.basename(folderPath); // module name
if (!fs_1.default.existsSync(folderPath)) {
    fs_1.default.mkdirSync(folderPath, { recursive: true });
}
// Import templates
// Replace placeholders in template string
function generateFromTemplate(template, name) {
    const pascal = toPascalCase(name);
    const camel = toCamelCase(name);
    return template
        .replace(/__NAME__/g, name)
        .replace(/__PASCAL__/g, pascal)
        .replace(/__CAMEL__/g, camel);
}
// Generate files
Object.entries(modkit_template_1.dynamicTemplates).forEach(([type, template]) => {
    const content = generateFromTemplate(template, name);
    const filePath = path_1.default.join(folderPath, `${name}.${type}.ts`);
    fs_1.default.writeFileSync(filePath, content);
});
console.log(`\u2705 '${inputPath}' module created with dynamic templates.`);
