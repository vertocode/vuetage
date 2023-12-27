export interface Props {
    label: string
    options: Option[]
}

export type Option = NormalOption[] | GroupOption[]

export interface GroupOption {
    group: string
    items: NormalOption[]
}

export interface NormalOption {
    value: string
    text: string
}