import MyHeader from './views/MyView.vue'
export default {
    install: (app, options) => {
        app.component('my-header', MyHeader)
    }
}