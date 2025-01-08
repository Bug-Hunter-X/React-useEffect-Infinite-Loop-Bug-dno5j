# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug: an infinite loop caused by incorrectly using the `useEffect` hook.  The component attempts to update its state within the `useEffect` dependency array, which creates a cycle of updates.

## Bug Description

The `MyComponent` attempts to increment a counter using `useState` and `useEffect`. However, the `useEffect` callback includes `count` in its dependency array. Because the callback modifies `count`, the `useEffect` hook triggers again, leading to an endless loop.

## Solution

The solution involves restructuring the effect to prevent unnecessary re-renders.  We can use functional updates to avoid infinite loops.

## How to Reproduce

1. Clone the repository.
2. Navigate to the `bug` directory.
3. Run `npm install`.
4. Run `npm start`.
5. Observe the rapidly incrementing counter and potentially a browser crash or performance degradation.

## License

MIT