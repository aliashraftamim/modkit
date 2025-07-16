#!/usr/bin/env node

import fs from "fs";
import path from "path";

// CLI থেকে ইনপুট পাথ
const inputPath = process.argv[2];

if (!inputPath) {
  console.error("❌ Module path is required!\nUsage: modkit <path/to/module>");
  process.exit(1);
}

// ফোল্ডার path & module name বের করা
const folderPath = path.join(process.cwd(), inputPath);
const name = path.basename(folderPath); // শেষ অংশটাই module name

// যদি না থাকে, ফোল্ডার তৈরি
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath, { recursive: true });
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
  const filePath = path.join(folderPath, fileName);
  const content = `// ${fileName}\n\nexport const ${name}_${type} = () => {\n  // TODO: implement ${type}\n};`;
  fs.writeFileSync(filePath, content);
});

console.log(`✅ '${inputPath}' module created successfully!`);
