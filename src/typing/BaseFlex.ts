import { StyleValue } from "vue";

export interface Props {
    gap?: string
    direction?: 'row' | 'column'
    wrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
    justify?: 'start' | 'end' | 'center' | 'between' | 'around'
    align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
    style?: StyleValue
}