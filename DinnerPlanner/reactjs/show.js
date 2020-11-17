function Show({hash, children}){
    // route: current state value, setRoute: function that will allow
    // updating the state value.
    // useState: returns a stateful value and a func to update it
    const [route, setRoute]= React.useState(window.location.hash);
    const handleHash = () => setRoute(window.location.hash);

    // Executes everytime the app renders
    React.useEffect(()=> {
        window.addEventListener("hashchange",
            handleHash)
        return () => window.removeEventListener("hashchange", handleHash);
    }, []);
    // children property returns a collection of the element's child elements
    return hash===window.location.hash? children : false;
}