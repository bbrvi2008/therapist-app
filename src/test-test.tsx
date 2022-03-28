import React from 'react'

export type ITestProps = {
  prop: string
}

export const Test: React.FC<ITestProps> = ({ prop }) => {
  const b = [1, 2, 4].map((text) => {
    return text + 1
  })

  return (
    <>
      <div>{prop}</div>
      <ul>
        {b.map((item) => {
          return <li>{item}</li>
        })}
      </ul>
    </>
  )
}
