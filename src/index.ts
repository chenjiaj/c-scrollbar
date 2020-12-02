import ScrollBar from './Scrollbar/Index.vue';

const cScrollbar = {
  install(app: any) {
    app.component(ScrollBar.name, ScrollBar);
    return app;
  },
};

export default cScrollbar;
