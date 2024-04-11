// const heading = React.createElement("h1", {id:"heading"},"hello mansi");
// console.log(heading) //object 
// console.log(root)
// root.render(heading) //convert this object to tag and put in root element 
/**
 * <div id:"parent">
 *      <div id : "child">
 * *    <h1 > i am h1 tag</h1>
 *   </div>
 * </div>
*/
const parent = React.createElement("div", { id: "parent" },
  [
    React.createElement("div", { id: "child1" },[
        React.createElement("h1", {}, "i am h1 tag"),React.createElement("h2", {}, "i am h2 tag")]
      ),React.createElement("div", { id: "child2" },[
        React.createElement("h1", {}, "i am h1 tag"),React.createElement("h2", {}, "i am h2 tag")]
      )
  ]
); //core jsx 
 
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


