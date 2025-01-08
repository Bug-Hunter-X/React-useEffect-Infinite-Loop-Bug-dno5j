```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic using functional update
    let intervalId;
    const incrementCount = () => setCount(prevCount => prevCount + 1);
    intervalId = setInterval(incrementCount, 1000);
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run only once on mount

  return <div>Count: {count}</div>;
}
```