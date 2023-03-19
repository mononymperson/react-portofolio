import { UilMoon, UilSun } from '@iconscout/react-unicons'

import { useAppContext } from '../contexts/app-context'
import { CustomProps } from '../interfaces'
import { mergeClassName } from '../utils'

export const ThemeToggler = (props: CustomProps) => {
  const appContext = useAppContext()

  return (
    <div
      onClick={() => appContext.toggleTheme()}
      className={mergeClassName(
        `
        rounded-full
        bg-[var(--primary)]
        text-[var(--primary-text)]
        p-[3.5px]
        flex
        items-center
        gap-[3.5px]
        relative
        after:content-['']
        after:absolute
        after:top-[3.5px]
        after:left-[3.5px]
        after:rounded-full
        after:w-[18px]
        after:h-[18px]
        after:bg-[var(--primary-text)]
        after:ease-in-out
        after:transition-transform
        ${appContext.themeMode(
          'after:translate-x-0',
          'after:translate-x-[calc(18px+3.5px)]'
        )}
    `,
        props
      )}
    >
      <UilMoon size={18}></UilMoon>
      <UilSun size={18}></UilSun>
    </div>
  )
}
