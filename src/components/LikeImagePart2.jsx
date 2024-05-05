import React, { useState } from 'react'

const LikeImagePart2=(props) => {

    const{count,handleCount} = props

//   const [likeImageCounter, setLikeImageCounter] = useState(0);

//   const handleLikeImageCount = ()=>{
//     setLikeImageCounter(likeImageCounter+1);
//   }

  return (
    <div>
      <button onClick={handleCount}>Like Image {count}</button>
    </div>
  )
}

export default LikeImagePart2