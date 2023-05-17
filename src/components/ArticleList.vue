<template>
  <div>
    <div class="container">
      <header id="masthead" class="site-header">
        <div class="site-branding">
          <h1 class="site-title"><a href="index.html" rel="home">Moschino</a></h1>
          <h2 class="site-description">Minimalist Portfolio HTML Template</h2>
        </div>
        <nav id="site-navigation" class="main-navigation">
          <button class="menu-toggle">Menu</button>
          <a class="skip-link screen-reader-text" href="#content">Skip to content</a>
          <div class="menu-menu-1-container">
            Тестовое задание QTIM
          </div>
        </nav>
      </header>
      <div id="content" class="site-content">
        <div id="primary" class="content-area column full">
          <main v-if="posts.length > 0" id="main" class="site-main">
            <div class="grid portfoliogrid articleList">

              <Article v-for="post in posts" :key="post.id" :post="post" />

            </div>
            <vue-awesome-paginate :total-items="50" v-model="page" :items-per-page="5" :max-pages-shown="5"
              :on-click="changePage" :hide-prev-next-when-ends="true" />

            <br />

          </main>
          <h2 style="text-align: center;" v-else>....Загрузка</h2>
        </div>
      </div> 
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import Article from '@/components/Article.vue';

interface IPost {
  id: string;
  createdAt: string;
  title: string;
  preview: string;
  image: string;
  description: string;
}

export default defineComponent({
  name: 'HelloWorld',
  components: {Article},
  methods: {
    changePage(pageNumber: number) {
      this.page = pageNumber;
      
    },
    async fetchPosts() {
      try {
        const response = await axios.get('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts', {
          params: {
            page: this.page,
            limit: this.limit,
          },
        });
        const data = response.data;
        this.totalPages = Math.ceil(data.length / this.limit);
        this.posts = data;
      } catch (error) {
        alert(error);
      }
    },
  },
  data() {
    return {
      page: 1,
      limit: 9,
      totalPages: 0,
      isPostsLoading: false,
      posts: [] as IPost[],

    }
  },
  created() {
    this.fetchPosts();
  },
  watch: {
    page() {
      this.fetchPosts();
    }
  }
});
</script>

<style scoped>
.pagination-container {
  display: flex;
  column-gap: 10px;
}

.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}

.paginate-buttons:hover {
  background-color: #d8d8d8;
}

.active-page {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}

.active-page:hover {
  background-color: #2988c8;
}


</style>
