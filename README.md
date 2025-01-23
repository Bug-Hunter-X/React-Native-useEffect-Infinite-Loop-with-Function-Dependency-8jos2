# React Native useEffect Infinite Loop with Function Dependency

This repository demonstrates a common error in React Native involving the `useEffect` hook and function dependencies, leading to an infinite loop.  The example shows how to fix the issue by using `useCallback` to memoize the function.

## Bug Description
The `useEffect` hook is incorrectly dependent on a function that's recreated on every render. This causes the effect to run repeatedly, creating an infinite loop.

## Solution
Use `useCallback` from `react` to memoize the function, ensuring the dependency remains consistent across renders.