import { PropsWithChildren } from 'react'

type Sizes = 'small' | 'medium' | 'large'
type Colors = 'primary' | 'secondary' | 'danger'

export interface ButtonProps extends PropsWithChildren {
  size: Sizes
  color: Colors
}
