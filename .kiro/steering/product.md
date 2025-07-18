# Observable Polyfill

This project is a polyfill implementation of the WICG Observable specification. It provides the DOM `Observable` class and `EventTarget.prototype.when` method for browsers that don't natively support these features.

## Key Features

- Full implementation of the WICG Observable specification
- Automatic polyfill application when needed
- Manual polyfill application option
- Support for both module imports and direct script inclusion
- Event handling through the `.when()` method on EventTarget objects

## Project Purpose

The Observable pattern is a powerful way to handle asynchronous data streams in JavaScript. This polyfill enables developers to use the proposed Observable standard API even in browsers that don't yet support it natively.

## Documentation

For more information about the Observable specification, visit: https://github.com/WICG/observable