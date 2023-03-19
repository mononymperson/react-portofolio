import { Icon, UilApps, UilArrow, UilMessage, UilPicture, UilTimes, UilUser } from '@iconscout/react-unicons'
import { useEffect, useRef, useState } from 'react'

import { useAppContext } from '../contexts/app-context'
import { Container } from './container'
import { ThemeToggler } from './theme-toggler'

interface Menu {
  title: string
  href: string
  icon: Icon
}

const Menus: Menu[] = [
  {
    title: 'About',
    href: '#about',
    icon: UilUser,
  },
  {
    title: 'Skills',
    href: '#skills',
    icon: UilArrow,
  },
  {
    title: 'Portofolio',
    href: '#portofolio',
    icon: UilPicture,
  },
  {
    title: 'Contactme',
    href: '#contactme',
    icon: UilMessage,
  },
]

export const AppHeader = () => {
  const appContext = useAppContext()
  const [openSidebar, setOpenSidebar] = useState(false)

  const openSidebarRef = useRef(false)

  const onResize = () => {
    if (openSidebarRef.current) {
      setOpenSidebar(false)
    }
  }

  const sidebarMode = (open: any, close: any) => {
    if (openSidebar) return open

    return close
  }

  useEffect(() => {
    openSidebarRef.current = openSidebar
  })

  useEffect(() => {
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <div
      className="
        sticky
        top-0
        z-[1]
        before:content-['']
        before:absolute
        before:left-0
        before:right-0
        before:top-0
        before:bottom-0
        before:bg-light/75
        dark:before:bg-dark/75
        before:backdrop-blur-md
    "
    >
      {/* sidebar open overlay */}

      {sidebarMode(
        <div
          onClick={() => setOpenSidebar(false)}
          className="
            fixed
            z-[1]
            left-0
            right-0
            top-0
            bottom-0
            bg-dark/50
            dark:bg-light/50
            backdrop-blur-sm
        "
        ></div>,
        ''
      )}

      <Container className="relative flex items-center gap-3.5">
        {/* open sidebar */}
        <button
          onClick={() => setOpenSidebar(true)}
          className="mobile:block hidden"
          title="close sidebar"
        >
          <UilApps size={16}></UilApps>
        </button>

        {/* title */}
        <a
          href="#home"
          className={`text-2xl font-signature ${appContext.onSectionActive(
            'home',
            'text-[var(--primary)]'
          )}`}
        >
          Mononymperson
        </a>

        {/* menu */}
        <div
          className={`
            flex-1
            flex
            items-center
            gap-3.5
            mobile:fixed
            mobile:z-[1]
            mobile:flex-col
            mobile:items-start
            mobile:p-3
            mobile:top-0
            mobile:bottom-0
            mobile:left-0
            mobile:w-[200px]
            mobile:bg-[var(--body)]
            mobile:ease-in-out
            mobile:transition-transform
            ${sidebarMode(
              'mobile:translate-x-0',
              'mobile:translate-x-[-200px]'
            )}
        `}
        >
          {/* close sidebar */}
          <button
            className="mobile:block hidden ml-auto"
            title="close sidebar"
            onClick={() => setOpenSidebar(false)}
          >
            <UilTimes size={16}></UilTimes>
          </button>

          {/* menu items */}
          {Menus.map((menu, i) => (
            <a
              href={menu.href}
              key={i}
              className={`
                flex items-center gap-3.5
                ${appContext.onSectionActive(
                  menu.href.replace('#', ''),
                  'text-[var(--primary)]'
                )}
            `}
            >
              <menu.icon className="mobile:block hidden" size={16}></menu.icon>
              <span>{menu.title}</span>
            </a>
          ))}
        </div>

        {/* theme toggler */}
        <ThemeToggler className="ml-auto"></ThemeToggler>
      </Container>
    </div>
  )
}
