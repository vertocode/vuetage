# [vuetage](https://vuetage.vertocode.com)

<p align="center">
  <img width="150" src="https://i.imgur.com/E8WdocW.png">
  <br>
  <a href="https://npm.im/vuetage">
    <img src="https://badgen.net/npm/v/vuetage?color=blue">
  </a>
  <a href="https://npm.im/vuetage">
    <img src="https://badgen.net/npm/dw/vuetage?color=blue">
  </a>
  <a href="https://npm.im/vuetage">
    <img src="https://badgen.net/npm/types/tslib">
  </a>
  <a href="https://bundlephobia.com/result?p=vuetage">
    <img src="https://badgen.net/bundlephobia/minzip/vuetage?color=blue">
  </a>
  <a href="https://bundlephobia.com/result?p=vuetage">
    <img src="https://badgen.net/npm/license/vuetage">
  </a>
</p>

Vuetage is a library of custom Vue components designed to simplify and enhance your web development experience.


## Installation

You can install the Vuetage library using your prefer package manager.

### [Bun](https://bun.sh/)

```bash
bun i -D vuetage
```

## Usage

After installing the Vuetage library, you can import the components you need in your Vue project.

```js
import { BaseButton, BaseSelect, BaseTextField } from 'vuetage'
```

Make sure to include the component's markup in your Vue template:

```vue
<template>
  <form @submit.prevent style="width: 240px; margin: 2em auto;">
      <BaseTextField
          label="Name"
          placeholder="Enter your name"
          v-model="name"
      />
      <BaseTextField
          label="Email"
          placeholder="Enter your email"
          v-model="email"
      />
      <BaseSelect
          label="Country"
          :options="countries"
          v-model="country"
      />
      <BaseButton
          rightIcon="fa fa-rocket"
          size="small"
          :disabled="isDisabled"
          :loading="isLoading"
          @click="submit"
      >
        Submit form
      </BaseButton>
  </form>
</template>
```

> NOTE
> 
> There are a lot of props to modify the styles of component, this is just a default, you can edit the colors, size, effects, and add custom styles as you need.

The Result of this code will be:

![Imgur](https://i.imgur.com/HdgLOzLm.png)

If you want to see it in action, you can check it on [storybook](https://vuetage-components.vertocode.com/?path=/story/doc-formexample--form-example).

For a more comprehensive understanding of each component's capabilities and usage, consult the [documentation](https://vuetage.vertocode.com).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions from the community are highly valued. Please review our [CONTRIBUTION](https://vuetage.vertocode.com/docs/contribute) for more information.