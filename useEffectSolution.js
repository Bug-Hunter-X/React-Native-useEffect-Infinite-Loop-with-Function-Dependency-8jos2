The solution is to use `useCallback` to memoize the function:

```javascript
import React, { useState, useEffect, useCallback } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);

  const fetchData = useCallback(async () => {
    // ... fetch data
    setData(fetchedData); 
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    // ...
  );
};

 export default MyComponent
```

`useCallback` returns a memoized version of the function.  As long as the dependencies in the second argument array (`[]` in this case, meaning no dependencies) haven't changed, the same function instance is returned, avoiding the infinite loop.