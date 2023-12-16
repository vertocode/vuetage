import { StyleValue } from './vue/dist/vue.esm-bundler.js'
export interface Props {
    disabled?: boolean;
    tooltipMessage?: string | null;
    size?: Size;
    variant?: Variant;
    leftIcon?: string;
    rightIcon?: string | null;
    loading?: boolean;
    customClass?: string;
    customStyle?: StyleValue | undefined;
    colorSpinner?: string;
    useBGTransition?: boolean;
    useHover?: boolean;
}
type Variant = 'primary' | 'success' | 'danger' | 'outline-primary' | 'outline-success' | 'outline-danger' | 'dark' | 'outline-dark';
type Size = 'small' | 'medium' | 'large';
export {}
