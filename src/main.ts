import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')


const post = {
  "id": "1",
  "createdAt": "2021-04-23T05:11:54.250Z",
  "title": "Licensed Granite Chair",
  "preview": "programming the port won't do anything,we need to copy the auxiliary USB system!",
  "image": "http://lorempixel.com/640/480/technics",
  "description": "Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}
