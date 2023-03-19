import { CustomProps } from '../interfaces'
import { mergeClassName } from '../utils'

export const Container = (props: CustomProps) => {
  return (
    <div className={mergeClassName('px-6 py-3 mx-auto max-w-screen-lg', props)}>
      {props.children}
    </div>
  )
}
