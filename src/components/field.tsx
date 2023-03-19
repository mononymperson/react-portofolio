interface Props {
  label: string
  type: 'text' | 'email' | 'textarea'
}

export const Field = (props: Props) => {
  return (
    <div
      className="
            w-full
            flex
            flex-col
            gap-1.5
            pb-3.5
            rounded-lg
            bg-[var(--secondary)] text-[var(--secondary-text)] p-1.5"
    >
      <label className="text-sm block p-1.5">{props.label}</label>
      {props.type === 'textarea' ? (
        <textarea
          rows={5}
          className="
                w-full
                outline-0
                bg-transparent
                pl-1
            "
          title={props.label}
        />
      ) : (
        <input
          className="
                w-full
                outline-0
                bg-transparent
                pl-3
            "
          title={props.label}
          type={props.type}
        />
      )}
    </div>
  )
}
