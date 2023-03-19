import { CustomProps } from '../interfaces'
import { mergeClassName } from '../utils'

export const SectionLink = (
  props: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement & CustomProps
  >
) => {
  return (
    <a
      {...props}
      className={mergeClassName(
        `
            px-3
            py-1.5
            bg-[var(--primary)]
            text-[var(--primary-text)]
            text-sm
            flex
            items-center
            gap-1.5
            rounded-md
            mt-3.5
    `,
        props
      )}
    >
      {props.children}
    </a>
  )
}
