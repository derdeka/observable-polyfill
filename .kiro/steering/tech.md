# Technical Stack & Build System

## Technology Stack
- **Language**: JavaScript (ES Modules)
- **Type Definitions**: TypeScript declaration files (.d.ts)
- **Bundler**: esbuild
- **Testing**: Web Platform Tests (WPT)

## Build System
The project uses npm scripts for building and testing:

```
npm run minify        # Bundles and minifies index.js to observable.min.js using esbuild
npm run prepublishOnly # Runs minify before publishing
npm run test-serve    # Serves the test directory using http-server
```

## Testing
Tests are based on Web Platform Tests (WPT). To run tests:

```
# Serve the tests
npm run test-serve

# Alternative manual testing method
./wpt serve --inject-script=../observables-polyfill/observable.js
```

## Package Structure
- **Main Entry**: index.js (auto-applies polyfill)
- **Manual Entry**: observable.js (exports functions for manual polyfill application)
- **Type Definitions**: observable.d.ts and index-fn.d.ts
- **Minified Bundle**: observable.min.js (generated)

## Export Formats
The package supports multiple import methods:
- ES Modules: `import "observable-polyfill"`
- Manual application: `import { isSupported, apply } from "observable-polyfill/fn"`
- Browser script: `<script src="https://unpkg.com/observable-polyfill@latest/observable.min.js"></script>`

## Development Workflow
1. Modify implementation in observable.js
2. Run tests in the browser (e.g. chrome, firefox, safari) to verify changes
