import MyHeader from './components/MyView.vue'
export default {
    install: (app, options) => {
        app.component('my-header', MyHeader)
    }
}