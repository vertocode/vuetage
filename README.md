# [Vuetage](https://vuetage.vertocode.com)

Vuetage is a library of custom Vue components designed to simplify and enhance your web development experience.

## Installation

You can install the Vuetage library using your prefer package manager.

### Yarn

```bash
yarn add -D vuetage
```

## Usage

After installing the Vuetage library, you can import the components you need in your Vue project.

```js
import { BaseButton } from 'vuetage'
```

Make sure to include the component's markup in your Vue template:

```vue
<template>
  <div>
    <BaseButton
      :disabled="isDisabled"
      :loading="isLoading"
      @click="clickFunction"
    >
      Base Button
    </BaseButton>
  </div>
</template>
```

> NOTE
> 
> There are a lot of props to modify the styles of component, this is just a default, you can edit the colors, size, effects, and add custom styles as you need.

The Result of this code will be:

![Imgur](https://i.imgur.com/pC2AHq6m.png)

For a more comprehensive understanding of each component's capabilities and usage, consult the [documentation](https://vuetage.vertocode.com).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions from the community are highly valued. Please review our [CONTRIBUTION](docs/CONTRIBUTION.md) for more information.