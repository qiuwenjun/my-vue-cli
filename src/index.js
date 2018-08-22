import Vue from 'vue';
import app from './app.vue';
import './assets/css/style.css';
new Vue({
    template:`
        <div id="apsp">
            <app/>
        </div>
    `,
    components:{
        app
    }
}).$mount("#app");