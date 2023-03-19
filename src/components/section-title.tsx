import { CustomProps } from '../interfaces'
import { mergeClassName } from '../utils'

export const SectionTitle = (props: CustomProps) => {
  return (
    <h1
      {...props}
      className={mergeClassName(
        `
                text-[var(--primary)]
                text-xl
                font-semibold
                mb-0.5
            `,
        props
      )}
    >
      {props.children}
    </h1>
  )
}
