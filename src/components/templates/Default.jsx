import React from 'react'

import Header from '../organisms/Header'

export default function Default(props) {
  return (
    <div>
        <Header />
        {props.children}
    </div>
  )
}
