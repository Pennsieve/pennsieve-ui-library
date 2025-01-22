import MyButton from './components/MyButton/MyButton.vue';
import DatasetCard from './components/DatasetCard/DatasetCard.vue';

export { MyButton, DatasetCard };

export const install = (app) => {
  app.component('MyButton', MyButton);
  app.component('DatasetCard', DatasetCard)
};