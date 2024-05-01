import { useState, useEffect } from 'react'
import LoaderBlock from './LoaderBlock'
export default function Loader({ len, speed }) {
  speed = speed || 500
  len = len || 5

  let blocks = []
  const [activeBlock, setActiveBlock] = useState(0); 
  
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBlock((activeBlock + 1) % len)
    }, speed)
    return () => clearInterval(interval)
  })

  for(let i=0;i<len;i++) {
    blocks.push(<LoaderBlock key={i} isActive={i===activeBlock} />)
  }
  return <div className='loader flex'>{blocks}</div>
}
