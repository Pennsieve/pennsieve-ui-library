# Dataset UI Library

A lightweight, reusable UI component library built with **Vue.js**.  
Currently features the `DatasetCard` component — perfect for displaying dataset summaries, metadata, and actions in a clean card layout.

---

## 📦 Installation

```bash
npm install pennsieve-ui-library
```

or

```bash
yarn add pennsieve-ui-library
```

---

## 🔧 Setup

### Global Registration

```javascript
// main.js or main.ts
import { createApp } from 'vue';
import App from './App.vue';
import PennsieveUILibrary from 'pennsieve-ui-library';

const app = createApp(App);
app.use(PennsieveUILibrary);
app.mount('#app');
```

### Local Registration

```vue
<script setup>
import { DatasetCard } from 'pennsieve-ui-library';
</script>
```

---

## 📄 Usage

```vue
<template>
  <DatasetCard
    :key="dataset.id"
    :dataset="dataset"
  />
</template>
```

---

## 🎛️ Props

| Prop           | Type     | Required | Description                                              |
|----------------|----------|----------|----------------------------------------------------------|
| `dataset`      | `Dataset`| Yes      | Pennsieve dataset input                                  |

---

## 🛠️ Development

```bash
git clone https://github.com/Pennsieve/pennsieve-ui-library.git
cd pennsieve-ui-library
yarn install
yarn dev
```

---

## 📃 License

This project is licensed under the [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0).

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to open a [pull request](https://github.com/Pennsieve/pennsieve-ui-library/pulls) or [issue](https://github.com/Pennsieve/pennsieve-ui-library/issues).

