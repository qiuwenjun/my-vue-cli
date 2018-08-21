import Vue from 'vue';
import app from './app.vue';
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