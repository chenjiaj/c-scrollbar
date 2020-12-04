import { App } from 'vue';
import cScrollbar from './Scrollbar/Index.vue';

export default {
  install(app: App) {
    app.component(cScrollbar.name, cScrollbar);
    return app;
  },
};
