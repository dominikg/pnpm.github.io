---
id: remove
title: pnpm remove
---

Removes packages from `node_modules` and from the project's `package.json`.

Aliases: rm, uninstall, un

## Options

### --recursive, -r

When used inside a [workspace](../workspaces), removes a dependency (or
dependencies) from every workspace package.

When used not inside a workspace, removes a dependency (or dependencies) from
every package found in subdirectories.

### --global

Remove a global package.

### --save-dev, -D

Only remove the dependency from `devDependencies`.

### --save-optional, -O

Only remove the dependency from `optionalDependencies`.

### --save-prod, -P

Only remove the dependency from `dependencies`.

### --filter &lt;package_selector\>

[Read more about filtering.](../filtering)
