This error occurs when using the `useEffect` hook in React Native with a dependency array that includes a function.  The function is recreated on every render, causing the effect to run unnecessarily.

```javascript
useEffect(() => {
  const fetchData = async () => {
    // ...
  };
  fetchData();
}, [fetchData]); // This is incorrect
```

This is because `fetchData` is a new function on every render, triggering the `useEffect` hook. 