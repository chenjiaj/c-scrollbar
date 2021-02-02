import { App } from 'vue';
import CScrollbar from './Scrollbar/Index.vue';

export default {
  install(app: App) {
    app.component(CScrollbar.name, CScrollbar);
    return app;
  },
  CScrollbar,
};
