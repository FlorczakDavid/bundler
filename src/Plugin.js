import MyHeader from './components/MyHeader.vue'
export default {
    install: (app, options) => {
        app.component('my-header', MyHeader)
    }
}