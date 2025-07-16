# 🧩 modkit

**modkit** is a lightweight CLI tool that helps developers quickly scaffold consistent and boilerplate-ready module structures for TypeScript-based Node.js applications.

Whether you're working on a monorepo or organizing your backend using clean architecture, `modkit` helps you save time by auto-generating files like `controller`, `service`, `model`, `route`, and more — all in one command.

---

## 🚀 Features

- ⚡ Super-fast module scaffolding
- 🧱 Consistent naming convention (`feature.type.ts`)
- 🔁 Supports deeply nested paths (e.g. `src/modules/auth/user`)
- ✅ Zero configuration required
- 🆓 Open-source & free forever

---

## 📦 Installation

### Using **npm**:

```bash
npm install -g modkit
```

### Or using **Yarn**:

```bash
yarn global add modkit
```

> ℹ️ If using Yarn, ensure `yarn global bin` is added to your PATH. You can check with:
>
> ```bash
> yarn global bin
> ```

---

## ⚙️ Usage

```bash
modkit <target-path>
```

### Example:

```bash
modkit src/modules/user
```

### Output:

```
src/modules/user/
├── user.controller.ts
├── user.interface.ts
├── user.model.ts
├── user.route.ts
├── user.service.ts
└── user.validation.ts
```

Each file includes a basic default comment:

```ts
// user.service.ts
```

---

## 📁 Generated File Types

| File              | Purpose                           |
| ----------------- | --------------------------------- |
| `*.controller.ts` | Route handler or controller logic |
| `*.interface.ts`  | Interfaces & TypeScript types     |
| `*.model.ts`      | DB models or schema definition    |
| `*.route.ts`      | Express or route config           |
| `*.service.ts`    | Core business logic               |
| `*.validation.ts` | Input validation logic            |

---

## 🛠 Development Setup

To work on `modkit` locally:

```bash
git clone https://github.com/webashraf/modkit
cd modkit
yarn install         # or: npm install
```

### Run CLI in dev:

```bash
yarn start src/modules/example
```

### Build:

```bash
yarn build
```

### Link CLI for local testing:

```bash
yarn link
modkit src/modules/test
```

---

## 🤝 Contributing

We welcome contributions and suggestions!

- 🐛 Report issues
- 🌟 Star the repository
- ✨ Submit pull requests

---

## 📄 License

This project is licensed under the **ISC License**.

---

> Made with ❤️ by Ali Ashraf
