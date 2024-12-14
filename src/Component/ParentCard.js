import React from "react";
import Data from "../Data.json"
import CardComponent from "./CardComponent"

const text = "This is the heading";

const ParentCard = () => {

//   const items = [];

//  for(let x = 0; x<Data.length; x++){
//     items.push( <Card titleText={Data[x].title} description={Data[x].desc}/> )
//   }

const items = [];
 
for(let x = 0; x<Data.length; x++){
  items.push(<CardComponent key={Data[x].id} title={Data[x].title} desc={Data[x].desc}/>)
}

//   const itemsNew = Data.map((item) => <Card titleText={item.title} description={item.desc}/>)


  return (
    <div>
      <h1 className="textH1">{text}</h1>
      <div className="parent_card">
        {/* <Card title = "hello bro" desc = "marketing"/>
        <Card title = "hello bro" desc = "marketing"/>
        <Card title = "hello bro" desc = "marketing"/>
        <Card title = "hello bro" desc = "marketing"/> */}
        {items}

        {/* {Data.map((item, index) => <Card key = {index} titleText = {item.title} description = {item.desc}/>)} */}
       
      </div>


      
      <div className="parent_card">
        {/* {itemsNew} */}
       
      </div>

    </div>
  );
};

export default ParentCard;
