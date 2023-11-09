# [Vuetage](https://vuetage.vertocode.com)

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
    <BaseButton
      variant="primary"
      size="large"
      left-icon="fa fa-cart-plus"
      tooltip-message="Add product to cart"
      :disabled="isDisabled"
      :loading="isLoading"
      @click="addToCart"
    >
      Add to Cart
    </BaseButton>
  </div>
</template>

<script setup>
import { BaseButton } from 'vuetage'
import { ref } from 'vue'

const isDisabled = ref(false)
const isLoading = ref(false)
const addToCart = () => { 
  // logic to add here
}
</script>
```

The Result of this code will be:

![Imgur](https://i.imgur.com/Tn3vkIp.png)

For more information on each component's usage, please refer to the [documentation](https://vuetage.vertocode.com).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

We welcome contributions from the community. Please see our [CONTRIBUTION](docs/CONTRIBUTION.md) for more information.