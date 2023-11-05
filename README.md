# Vuetage

Vuetage is a library of custom Vue components designed to simplify and enhance your web development experience.

## Installation

You can install the Vuetage library using either npm or yarn.

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
    <BaseButton />
  </div>
</template>

<script>
import { BaseButton } from 'vuetage';

export default {
  components: {
    BaseButton,
  },
};
</script>
```

For more information on each component's usage, please refer to the documentation.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

We welcome contributions from the community. Please see our [CONTRIBUTION.md] for more information.