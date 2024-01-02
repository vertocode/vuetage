import { StyleValue } from 'vue'

// @ts-expect-error - This is a generic type, so it's not possible to define the type of the object.
export interface CustomStyle extends StyleValue {
    hover: StyleValue
}