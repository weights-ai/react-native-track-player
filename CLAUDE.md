# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build/Lint/Test Commands
- Build: `yarn build`
- Lint: `yarn lint` (checks with ESLint)
- Format: `yarn format` (applies Prettier formatting)
- Type check: `yarn types`
- Run example app: `yarn example ios` or `yarn example android`
- Run tests: `yarn example test`
- Run single test: `yarn example test -t 'test name'`

## Code Style Guidelines
- Use single quotes for strings
- Use TypeScript with strict mode enabled
- Follow the Angular Conventional Changelog commit format
- Use camelCase for variables and functions, PascalCase for classes/interfaces
- Import ordering: React/RN imports first, then third-party, then local
- Handle promises with async/await where possible
- Properly type all function parameters and return values
- Use explicit typing rather than type inference where clarity is needed
- Use React hooks for state management
- Document public interfaces and complex functions