import React, { useState } from 'react'

const LikePostPart2=(props) => {

    const{count,handleCount} = props

//   const [likePostCounter, setPostCounter] = useState(0);

//   const handlePostCount = ()=>{
//     setPostCounter(likePostCounter+1);
//   }

  return (
    <div>
      <button onClick={handleCount}>Like Post {count}</button>
    </div>
  );
}

export default LikePostPart2