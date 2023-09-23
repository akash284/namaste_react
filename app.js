const heading=React.createElement("h1",
{
    id:"title"
},"Namaste Everyone");

  const heading1=React.createElement("h1",
  {
    id:"id1",
  
 },"heading 1");
  console.log(heading);
  const heading2=React.createElement("h2",
  {
    id:"id1",
   
  },"heading 2");
  

  //when we have to pass multiple chilren then we have to use 3rd parameter as [](array)
  const container=React.createElement("div",{
    id:"container"
  },[heading1,heading2]);
  

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
