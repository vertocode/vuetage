import { Props } from '../../typing/BaseButton';
declare const _default: __VLS_WithTemplateSlots<import('./vue/dist/vue.esm-bundler.js').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    disabled: boolean;
    tooltipMessage: null;
    variant: string;
    size: string;
    rightIcon: null;
    loading: boolean;
    customStyle: undefined;
    useBGTransition: boolean;
    useHover: boolean;
}>, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    disabled: boolean;
    tooltipMessage: null;
    variant: string;
    size: string;
    rightIcon: null;
    loading: boolean;
    customStyle: undefined;
    useBGTransition: boolean;
    useHover: boolean;
}>>>, {
    size: "small" | "medium" | "large";
    variant: "dark" | "primary" | "success" | "danger" | "outline-primary" | "outline-success" | "outline-danger" | "outline-dark";
    disabled: boolean;
    loading: boolean;
    customStyle: import('./vue/dist/vue.esm-bundler.js').StyleValue;
    tooltipMessage: string | null;
    rightIcon: string | null;
    useBGTransition: boolean;
    useHover: boolean;
}, {}>, {
    spinner?(_: {}): any;
    leftIcon?(_: {}): any;
    default?(_: {}): any;
    rightIcon?(_: {}): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
