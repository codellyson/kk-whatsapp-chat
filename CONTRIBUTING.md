# Contributing to WhatsApp Widget

## Conventional Commits

This project uses [Conventional Commits](https://www.conventionalcommits.org/) to automatically generate version numbers and changelogs.

### Commit Message Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- **feat**: A new feature (triggers a minor version bump)
- **fix**: A bug fix (triggers a patch version bump)
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (formatting, missing semicolons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **build**: Changes that affect the build system or external dependencies
- **ci**: Changes to CI configuration files and scripts
- **chore**: Other changes that don't modify src or test files
- **revert**: Reverts a previous commit

### Breaking Changes

Add `BREAKING CHANGE:` in the footer or append `!` after the type to trigger a major version bump.

### Examples

#### Patch release (1.0.0 → 1.0.1)

```
fix: resolve widget positioning issue on mobile devices
```

#### Minor release (1.0.0 → 1.1.0)

```
feat: add dark mode support for widget
```

#### Major release (1.0.0 → 2.0.0)

```
feat!: change API structure for widget configuration

BREAKING CHANGE: The `config` parameter is now required and must include a `members` array
```

### Scopes (optional)

You can add a scope to provide additional context:

- `core`
- `ui`
- `api`
- `docs`
- `build`

Examples:

- `feat(ui): add animation effects to chat widget`
- `fix(core): handle undefined phone numbers gracefully`
- `docs(readme): update installation instructions`

## Release Process

When you push commits to the `main` branch, semantic-release will:

1. Analyze your commit messages
2. Calculate the next version number
3. Generate a changelog
4. Create a GitHub release
5. Update the package.json version
6. Attach build artifacts to the release

### Dry Run

To test what version would be released without actually releasing:

```bash
pnpm release:dry-run
```
