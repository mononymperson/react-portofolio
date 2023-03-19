import { CustomProps } from '../interfaces'
import { mergeClassName } from '../utils'

export const SectionSubtitle = (props: CustomProps) => {
  return (
    <p
      {...props}
      className={mergeClassName(
        `        
                text-base
                mb-6
            `,
        props
      )}
    >
      {props.children}
    </p>
  )
}
