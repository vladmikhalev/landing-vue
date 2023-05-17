<template>
  <h1 class="detail-header">Detail info id {{ $route.params.id }}</h1>
  <div id="primary" class="">
    <main id="main" class="site-main">

      <article class="portfolio hentry">
        <header class="entry-header">
          <div class="entry-thumbnail">
            <img width="800" height="533"
              src="https://cdn.dribbble.com/userupload/7067483/file/original-951562a758c87c94e5e8e9df607ca127.jpg?compress=1&resize=752x"
              class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="p1" />
          </div>
          <h2 class="entry-title detail-title">{{ post.title }}</h2>
        </header>
        <div class="entry-content">
          <p class="detailArticle__text">
            {{ post.preview }}
          </p>
          <p class="detailArticle__text">
            {{ post.description }}
          </p>
        </div>
      </article>
    </main>
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
  name: 'DetailArticleView',
  methods: {
    async fetchPosts() {
      try {
        const response = await axios.get(`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${this.$route.params.id }`);
        const data = response.data;
        this.post = data;
      } catch (error) {
        alert(error);
      }
    },
  },
  data() {
    return {
      post: {} as IPost,

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
.detail-header {
  text-align: center;
}
.detail-title {
  text-align: center;
  margin: 20px 0;
}
</style>
