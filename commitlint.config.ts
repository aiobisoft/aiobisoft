import { UserConfig } from "@commitlint/types";

const config: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "chore",
        "docs",
        "style",
        "refactor",
        "test",
        "ci",
        "build",
        "perf",
        "revert",
      ],
    ],
    "scope-enum": [
      2,
      "always",
      [
        "example",
        "config",
        // Add your project-specific scopes here
      ],
    ],
    "subject-case": [2, "always", "lowerCase"], // Enforce sentence case for the subject
    "body-max-line-length": [2, "always", 72], // Enforce a maximum line length for the body
    "footer-max-line-length": [2, "always", 72], //
  },
};

export default config;
