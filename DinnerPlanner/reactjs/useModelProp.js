function useModelProp(model, prop) {
    // propValue: current state value, setPropValue: function that will allow
    // updating the state value.
    // useState: returns a stateful value and a func to update it
    const [propValue, setPropValue]= React.useState(model[prop]);

    // Executes everytime the app renders
    // Whenever [model, prop] changes, useEffect hook runs
    React.useEffect(function() {
        const obs= ()=>setPropValue(model[prop]);
        model.addObserver(obs);
        return ()=> model.removeObserver(obs);
    }, [model, prop]);
    return propValue;
}