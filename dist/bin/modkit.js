#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// CLI থেকে ইনপুট পাথ
const inputPath = process.argv[2];
if (!inputPath) {
    console.error("❌ Module path is required!\nUsage: modkit <path/to/module>");
    process.exit(1);
}
// ফোল্ডার path & module name বের করা
const folderPath = path_1.default.join(process.cwd(), inputPath);
const name = path_1.default.basename(folderPath); // শেষ অংশটাই module name
// যদি না থাকে, ফোল্ডার তৈরি
if (!fs_1.default.existsSync(folderPath)) {
    fs_1.default.mkdirSync(folderPath, { recursive: true });
}
const parts = [
    "controller",
    "interface",
    "model",
    "route",
    "service",
    "validation",
];
parts.forEach((type) => {
    const fileName = `${name}.${type}.ts`;
    const filePath = path_1.default.join(folderPath, fileName);
    const content = `// ${fileName}\n\nexport const ${name}_${type} = () => {\n  // TODO: implement ${type}\n};`;
    fs_1.default.writeFileSync(filePath, content);
});
console.log(`✅ '${inputPath}' module created successfully!`);
