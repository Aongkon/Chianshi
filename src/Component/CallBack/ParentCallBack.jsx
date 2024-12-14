import React from 'react';
import ChildCallBack from './ChildCallBack';

const ParentCallBack = () => {

  const ChildToParent = (data_stor) =>{
    console.log(data_stor)
  }

  return (
    <div style={{ margin: "0 0 50px 100px" }}>
      <ChildCallBack title='here i am just trying improve my self' ChildToParentHandler={ChildToParent}/>
    </div>
  );
}

export default ParentCallBack;
