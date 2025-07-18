# Project Structure

## Core Files
- **observable.js**: Main implementation file containing the Observable class and related functionality
- **index.js**: Entry point that auto-applies the polyfill when needed
- **observable.d.ts**: TypeScript type definitions for the Observable API
- **index-fn.d.ts**: TypeScript type definitions for manual polyfill application
- **observable.min.js**: Minified bundle (generated)

## Test Files
- **test/index.html**: Simple test runner HTML file
- **test/wpt/**: Web Platform Tests for Observable implementation
  - Contains test files for each Observable method and feature
  - Based on the official WPT test suite for the Observable specification

## Configuration Files
- **package.json**: NPM package configuration and scripts
- **package-lock.json**: NPM dependency lock file

## Code Organization

### Observable Implementation
The core implementation in `observable.js` follows the WICG Observable specification closely:
- Uses ES modules
- Implements the Observable class with all specified methods
- Provides utility functions for polyfill detection and application
- Extends EventTarget with the `when()` method

### Export Structure
The package provides two main ways to use the polyfill:
1. **Automatic application**: Import the main entry point
2. **Manual application**: Import from the `/fn` subpath

### TypeScript Support
Type definitions are provided for:
- The Observable class and its methods
- EventTarget extensions
- Helper functions for polyfill application

## Coding Conventions
- ES Modules syntax for imports/exports
- Detailed code comments referencing the specification
- Specification-compliant implementation
- Comprehensive error handling
- Clean separation between automatic and manual polyfill application