import { CustomProps } from '../interfaces'
import { mergeClassName } from '../utils'

export const SectionDescription = (props: CustomProps) => {
  return (
    <p
      {...props}
      className={mergeClassName(
        `
                text-base
                mt-30
            `,
        props
      )}
    >
      {props.children}
    </p>
  )
}
