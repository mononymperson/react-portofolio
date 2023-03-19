interface Props {
  title: string
  items: string[]
}

export const Skills = (props: Props) => {
  const items = [props.title, ...props.items]

  return (
    <ul className="my-6  mx-12">
      {items.map((item, i) => (
        <li
          className={`
            ${i === 0 ? 'font-semibold' : 'text-sm'}
            flex
            items-center
            py-[3.5px]
            relative
            pl-[20px]

            before:content-['']
            before:absolute
            before:left-0
            before:bg-[var(--primary)]
            before:rounded-sm
            before:w-[10px]
            before:h-[10px]

            after:content-['']
            after:absolute
            after:left-0
            after:top-[50%]
            after:bg-[var(--primary)]
            after:rounded-sm
            after:w-[2.5px]
            after:h-full
            after:translate-x-[calc(100%+0.175px)]
            ${i === items.length - 1 ? 'after:hidden' : ''}
        `}
          key={i}
        >
          {i !== 0 ? (
            <div
              className="
                flex
                items-center
                relative
                ml-[5px]
                pl-[20px]
                
                before:content-['']
                before:absolute
                before:left-0
                before:bg-[var(--primary)]
                before:rounded-sm
                before:w-[10px]
                before:h-[10px]

                after:content-['']
                after:absolute
                after:left-[-20px]
                after:bg-[var(--primary)]
                after:w-[30px]
                after:h-[2.5px]
          "
            >
              {item}
            </div>
          ) : (
            item
          )}
        </li>
      ))}
    </ul>
  )
}
