declare const _default: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    modelValue: {
        type: StringConstructor;
        default: null;
    };
    bind: {
        type: ObjectConstructor;
        default: null;
    };
    variant: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    useBorderLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    loadingColor: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: {
        type: StringConstructor;
        default: null;
    };
    placeholder: {
        type: StringConstructor;
        default: null;
    };
    disableOnLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxLength: {
        type: NumberConstructor;
        default: null;
    };
    minLength: {
        type: NumberConstructor;
        default: number;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    rules: {
        type: {
            (arrayLength: number): (() => string | boolean)[];
            (...items: (() => string | boolean)[]): (() => string | boolean)[];
            new (arrayLength: number): (() => string | boolean)[];
            new (...items: (() => string | boolean)[]): (() => string | boolean)[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        };
        default: never[];
    };
    customStyle: {
        type: StringConstructor;
        default: string;
    };
    customStyleLabel: {
        type: StringConstructor;
        default: string;
    };
    disableRequiredRule: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    'input:value': (...args: any[]) => void;
    'change:value': (...args: any[]) => void;
    'blur:value': (...args: any[]) => void;
}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        default: null;
    };
    bind: {
        type: ObjectConstructor;
        default: null;
    };
    variant: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    useBorderLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    loadingColor: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: {
        type: StringConstructor;
        default: null;
    };
    placeholder: {
        type: StringConstructor;
        default: null;
    };
    disableOnLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxLength: {
        type: NumberConstructor;
        default: null;
    };
    minLength: {
        type: NumberConstructor;
        default: number;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    rules: {
        type: {
            (arrayLength: number): (() => string | boolean)[];
            (...items: (() => string | boolean)[]): (() => string | boolean)[];
            new (arrayLength: number): (() => string | boolean)[];
            new (...items: (() => string | boolean)[]): (() => string | boolean)[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        };
        default: never[];
    };
    customStyle: {
        type: StringConstructor;
        default: string;
    };
    customStyleLabel: {
        type: StringConstructor;
        default: string;
    };
    disableRequiredRule: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    'onInput:value'?: ((...args: any[]) => any) | undefined;
    'onChange:value'?: ((...args: any[]) => any) | undefined;
    'onBlur:value'?: ((...args: any[]) => any) | undefined;
}, {
    required: boolean;
    label: string;
    modelValue: string;
    bind: Record<string, any>;
    variant: string;
    useBorderLoading: boolean;
    loadingColor: string;
    disabled: boolean;
    readonly: boolean;
    loading: boolean;
    placeholder: string;
    disableOnLoading: boolean;
    maxLength: number;
    minLength: number;
    width: string;
    height: string;
    rules: (() => string | boolean)[];
    customStyle: string;
    customStyleLabel: string;
    disableRequiredRule: boolean;
}, {}>
export default _default
