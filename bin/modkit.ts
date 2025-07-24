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

// Default base path: src/app/modules
const defaultBasePath = path.resolve("src/app/modules");

// Get input argument: module name or full path
const inputArg = process.argv[2];

if (!inputArg) {
  console.error(
    "\u274C Module name or path is required!\nUsage: modkit <module-name> OR <absolute/path/to/folder>"
  );
  process.exit(1);
}

// Resolve folder path
const folderPath = path.isAbsolute(inputArg)
  ? path.resolve(inputArg)
  : path.join(defaultBasePath, inputArg);

const name = path.basename(folderPath); // module name

// Create folder if not exists
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath, { recursive: true });
}

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

console.log(`\u2705 Module '${name}' created at: ${folderPath}`);
