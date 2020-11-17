const summaryNav=[()=> window.location.hash="summary", "Summary"];
const backToSearch=[()=> window.location.hash="search", "Back to search"];
const addToMenu=[()=> window.location.hash="search", "Add to menu"];
const dishChoice=()=>window.location.hash="#details";

function defaultRoute(){
    if(!["#search", "#summary", "#details"].find(knownRoute=>knownRoute==window.location.hash))
        window.location.hash="#search";
}
window.addEventListener("hashchange", defaultRoute);

const App= ({model})=>
    <div class="flexParent">
        <div class="sidebar debug"><Sidebar model={model} dishChosen={dishChoice}/></div>
        <div class="mainContent">
            <div class="debug"><Show hash="#details"><Details model={model} ok={addToMenu} cancel={backToSearch}/></Show></div>
            <div class="debug"><Show hash="#search"><Search model={model} nav={summaryNav} resultChoice={dishChoice}/></Show></div>
            <Show hash="#summary"><Summary model={model} nav={backToSearch}/></Show>
        </div>
    </div> ;