import React from 'react'
type Params = {
    params: {
        userId: string
    }
}

export default function UserMainPage({params: {userId}}: Params) {
  return (
    <div>page</div>
  )
}
