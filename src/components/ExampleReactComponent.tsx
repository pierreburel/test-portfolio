import type { ReactNode } from 'react'

export interface Props {
  children: ReactNode
  title: ReactNode
}

export default function ExampleReactComponent({ children, title }: Props) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  )
}
