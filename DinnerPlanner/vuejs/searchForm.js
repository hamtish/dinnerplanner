const SearchFormVue= {
    // props to pass data from parent component to child component
    props: ["onSearch", "nav"],
    data(){  return { text:"", type:""};    },
    render(h){ return <div>
        <input type={"text"} onChange={(event)=> this.text= event.target.value}/>
        <select onChange={(event)=> this.type= event.target.value}>{["starter", "main course", "dessert"].map(k=><option key={k} >{k}</option>)}</select>
        <button onClick={e=> this.onSearch(this.type, this.text)}>Search!</button>
        <button onClick={(event)=> this.nav[0]()}>{this.nav[1]}</button>
    </div>;
    }
}