// props are used to make your components reusable, cosider karo ki aapke paas ek button hai and aapko uss button ko alaga alag jgah par daalna hai , to aap ek button component banaaye and uska data hard coded karne ki jgah parent component se send krdein and child component par use krlein 



import React from 'react'

function Props({buttonText, color}) {
  return (
    <div>
        <button className={`${color} px-2 py-2 m-2 rounded-full hover:bg-pink-400 hover:border-yellow-300 hover:border-4 `}> {buttonText} </button>
      
    </div>
  )
}

export default Props
