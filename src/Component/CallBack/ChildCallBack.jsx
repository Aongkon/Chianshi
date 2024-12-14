import React from 'react';

const ChildCallBack = (props) => {

    props.ChildToParentHandler({bio: "Hello; I am aongkon. Everyone call me Ratul. I am nothing just learning and trying improve my own self." ,  age: 20})

  return (
    <div>
      <h2>{props.title}</h2>
    </div>
  );
}

export default ChildCallBack;
