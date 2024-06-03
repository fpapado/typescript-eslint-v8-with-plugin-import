# typescritp-eslint@rc-v8 with eslint-plugin-import

This repository has a minimal reproduction of a bug with typescript-eslint@rc-v8 `projectService` with eslint-plugin-import.

The core issue is that the `projectService` key is not deleted from `eslint-plugin-import`'s parse function. This is similar to <https://github.com/import-js/eslint-plugin-import/issues/2962>, but for a new key.

## How to run

You will need node and pnpm.

```shell
pnpm i
pnpm eslint .
```

You should see two errors, relating to the default project service including files over the limit.
