const Show={
    // props to pass data from parent component to child component
    props:["hash"],
    // every time counter updates, render func is called
    data(){ return {counter:1}},
    mounted(){
        this.listener= ()=> this.counter= this.counter+1;
        window.addEventListener("hashchange", this.listener);
    },
    destroyed(){
        window.removeEventListener("hashchange", this.listener)
    },
    render(h){
        this.counter;
        // access children via this.$slots.default
        return this.hash===window.location.hash? this.$slots.default : false;
    }
};