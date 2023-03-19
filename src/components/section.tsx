import { useEffect, useRef } from 'react'

import { useAppContext } from '../contexts/app-context'
import { CustomProps } from '../interfaces'
import { mergeClassName } from '../utils'

export const Section = (props: CustomProps) => {
  const sectionRef = useRef<HTMLDivElement>(null)

  const appContext = useAppContext()

  const onScroll = () => {
    if (sectionRef.current) {
      const top = sectionRef.current.offsetTop
      const height = sectionRef.current.offsetHeight

      if (
        window.scrollY >= top - 100 &&
        window.scrollY <= top + (height - 100)
      ) {
        appContext.setSectionActive(props.id as string)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      {...props}
      className={mergeClassName(
        `
                pt-[90px]
                px-6
                mb-[30px]
            `,
        props
      )}
    >
      {props.children}
    </section>
  )
}
