import React, { useState } from 'react'


function Card() {
  const data = useState(false);

  console.log(data[0]);
  console.log(data[1]);

  const [status, updateStatus] = useState(true);
  return (
    <div>
      <h1>{status.toString()}</h1>
      <button className='bg-blue-300 px-2py-2' onClick={()=>updateStatus(!status)}>Click</button>
    </div>
  )
}

export default Card
