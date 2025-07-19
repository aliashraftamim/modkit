#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { dynamicTemplates } from "./modkit.template";

// Utility: Convert to PascalCase
const toPascalCase = (str: string) =>
  str
    .split(/[_-]/)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");

// Utility: Convert to camelCase
const toCamelCase = (str: string) => {
  const pascal = toPascalCase(str);
  return pascal.charAt(0).toLowerCase() + pascal.slice(1);
};

// Input path
const inputPath = process.argv[2];
if (!inputPath) {
  console.error(
    "\u274C Folder path is required!\nUsage: modkit <absolute/path/to/folder>"
  );
  process.exit(1);
}

const folderPath = path.resolve(inputPath);
const name = path.basename(folderPath); // module name

if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath, { recursive: true });
}

// Import templates

// Replace placeholders in template string
function generateFromTemplate(template: string, name: string) {
  const pascal = toPascalCase(name);
  const camel = toCamelCase(name);

  return template
    .replace(/__NAME__/g, name)
    .replace(/__PASCAL__/g, pascal)
    .replace(/__CAMEL__/g, camel);
}

// Generate files
Object.entries(dynamicTemplates).forEach(([type, template]) => {
  const content = generateFromTemplate(template, name);
  const filePath = path.join(folderPath, `${name}.${type}.ts`);
  fs.writeFileSync(filePath, content);
});

console.log(`\u2705 '${inputPath}' module created with dynamic templates.`);
