# Contributing to Kradle

Thanks for helping improve Kradle, a focused multi-format reading platform.

## Before You Start

1. Check existing issues and pull requests before starting work.
2. For significant changes, open an issue or discuss the approach with the maintainers first.
3. Keep changes focused on one bug, feature, or documentation improvement.

## Development Setup

Kradle currently has a Next.js frontend and a FastAPI processing engine.

### Prerequisites

- Node.js 18.17 or newer
- Python 3.10 or newer
- npm or pnpm
- Git
- An Appwrite Cloud or self-hosted instance

Follow the setup instructions in the [README](README.md#-getting-started). In particular:

- Copy the environment template to `apps/web/.env.local`.
- Never commit credentials, API keys, or private environment files.
- Run the FastAPI engine from `apps/engine`.
- Run the Next.js frontend from `apps/web`.

## Branches and Pull Requests

Use the following branch model:

- `main` contains stable, production-ready code.
- `dev` is the integration branch.
- `feature/*` branches contain individual changes.

Create a feature branch from the latest `dev` branch:

```bash
git checkout dev
git pull origin dev
git checkout -b feature/your-feature
```

Before opening a pull request:

1. Test the change locally.
2. Update documentation when behavior or setup changes.
3. Review the diff and remove unrelated changes.
4. Push the branch and open a pull request against `dev`.
5. Describe the change, testing performed, and any configuration or migration steps.

At least one teammate approval is required before merging.

## Commit Messages

Use conventional commit-style messages with a short, imperative description:

```text
<type>: <description>
```

Common types include:

- `feat`: New functionality
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Styling or formatting
- `refactor`: Code restructuring
- `perf`: Performance improvement
- `test`: Tests
- `chore`: Maintenance

Examples:

```text
feat: add Urdu RTL reader
fix: prevent duplicate document imports
docs: update Appwrite setup
```

## Code and Documentation Guidelines

- Follow the conventions used by the surrounding code.
- Keep UI changes accessible and usable for both English and Urdu content where relevant.
- Preserve the reader's distraction-free experience.
- Add or update tests for behavior changes when test coverage exists.
- Keep user-facing text and setup instructions accurate.

## Reporting Issues

When reporting a bug, include:

- A clear summary of the problem
- Steps to reproduce it
- Expected and actual behavior
- Relevant browser, operating system, and runtime versions
- Safe-to-share logs or screenshots

Please remove secrets and personal data from logs before sharing them.
