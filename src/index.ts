import cScrollbar from './Scrollbar/Index.vue';

export default {
  install(app: any) {
    app.component(cScrollbar.name, cScrollbar);
    return app;
  },
  cScrollbar,
};

export { cScrollbar };
