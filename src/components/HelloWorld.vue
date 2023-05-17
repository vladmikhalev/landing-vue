<template>
  <div>
    <div class="container">
      <header id="masthead" class="site-header">
        <!-- <button @click="fetchPosts">get posts</button> -->
        <div class="site-branding">
          <h1 class="site-title"><a href="index.html" rel="home">Moschino</a></h1>
          <h2 class="site-description">Minimalist Portfolio HTML Template</h2>
        </div>
        <nav id="site-navigation" class="main-navigation">
          <button class="menu-toggle">Menu</button>
          <a class="skip-link screen-reader-text" href="#content">Skip to content</a>
          <div class="menu-menu-1-container">
            <ul id="menu-menu-1" class="menu">
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="shop.html">Shop</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="elements.html">Elements</a></li>
              <li><a href="#">Pages</a>
                <ul class="sub-menu">
                  <li><a href="portfolio-item.html">Portfolio Item</a></li>
                  <li><a href="blog-single.html">Blog Article</a></li>
                  <li><a href="shop-single.html">Shop Item</a></li>
                  <li><a href="portfolio-category.html">Portfolio Category</a></li>
                </ul>
              </li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>
      <!-- #masthead -->
      <div id="content" class="site-content">
        <div id="primary" class="content-area column full">
          <main v-if="posts.length > 0" id="main" class="site-main">
            <div class="grid portfoliogrid articleList">

              <!-- :src="post.image"  -->

              <article v-for="post in posts" :key="post.id" class="hentry">
                <header class="entry-header">
                  <div class="entry-thumbnail">
                    <a href="portfolio-item.html">
                      <img src="https://cdn.dribbble.com/userupload/7067483/file/original-951562a758c87c94e5e8e9df607ca127.jpg?compress=1&resize=752x"
                        class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="p1" />
                    </a>
                  </div>
                  <h2 class="entry-title"><a href="portfolio-item.html" rel="bookmark">{{ post.title }}</a></h2>
                  <a class='portfoliotype' href='portfolio-category.html'>summer</a>
                  <a class='portfoliotype' href='portfolio-category.html'>woman</a>
                  <a class='portfoliotype' href='portfolio-category.html'>yellow</a>
                </header>
              </article>

            </div>
            <!-- .grid -->

            <vue-awesome-paginate :total-items="50" v-model="page" :items-per-page="5" :max-pages-shown="5"
              :on-click="changePage" :hide-prev-next-when-ends="true" />

            <br />

          </main>
          <h2 style="text-align: center;" v-else>Нет статей</h2>
          <!-- #main -->
        </div>
        <!-- #primary -->
      </div>
      <!-- #content -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

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
        console.log(data);
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

.articleList {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
