import React from 'react'

export default function AppIcons({url ,txt,txt2,customeStyle}) {
  return (
    <div>

<div>
<img src={url}  alt ="abuswedan.com"/>
 
</div>
<div>{txt}</div>
<p className="text-white">You have<span className="font-bold"> 4 Messages </span>in your inbox</p>

    </div>
  )
}
