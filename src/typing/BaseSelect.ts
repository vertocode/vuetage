export interface Props {
    label?: string
    multiple: boolean
    selectedOptions?: NormalOption[]
    options: Option[]
}

export type Option = NormalOption[] | GroupOption[]

export interface GroupOption {
    group: string
    items: NormalOption[]
}

export interface NormalOption {
    group?: string
    value: string
    text: string
}