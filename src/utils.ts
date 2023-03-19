import { CustomProps } from './interfaces'

export const mergeClassName = (val: string, props: CustomProps) => {
    return val + (props.className ? ' ' + props.className : '')
}