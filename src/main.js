import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
const app = craeteApp({
  data() {
    return {
      count: 0,
    };
  },
});
createApp(App).mount('#app');
