import { ClassType, PropsWithChildren } from 'react'

type Theme = 'light' | 'dark' | 'invertedLight' | 'invertedDark'
type Colors = 'base' | 'primary' | 'tertiary' | 'inverted'
type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
type Weights = 'normal' | 'bold'

export interface TitleProps extends PropsWithChildren {
  theme: Theme
  color: Colors
  size: Sizes
  weight: Weights
  isCentered: boolean
  isInline: boolean
  style: ClassType
}
