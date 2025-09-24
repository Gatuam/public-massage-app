import { Card } from '@/components/ui/card'
import { orbitCards } from '@/const'
import React from 'react'

const orbitCard = () => {
  return (
    <div>
      {
        orbitCards.map((ele, i)=> (
            <Card key={i} 
            className=' '
            >
                
            </Card>
        ))
      }
    </div>
  )
}

export default orbitCard
