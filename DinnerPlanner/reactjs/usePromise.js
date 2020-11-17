function usePromise(promise) {
    // data: current state value, setData: function that will allow
    // updating the state value.
    // useState: returns a stateful value and a func to update it
    const [data, setData]= React.useState(null);
    const [error, setError]= React.useState(null);

    // Executes everytime the app renders
    // Whenever [promise] changes, useEffect hook runs
    React.useEffect(function(){
        setData(null);
        setError(null);
        if (promise != null)
            promise.then(data=>setData(data)).catch(error=>setError(error));
    }, [promise]);
    return [data, error];
}