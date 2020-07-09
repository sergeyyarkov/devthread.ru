import React from 'react';

const Main = ({ children, ...props }) => {
  return (
    <main {...props}>
      {children}
    </main>
  )
}


export { Main }