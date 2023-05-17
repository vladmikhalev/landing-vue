<template>
  <article class="hentry" @click="$router.push(`/DetailArticle/${post.id}`)">
    <header class="entry-header">
      <div class="entry-thumbnail">
        <img
          src="https://cdn.dribbble.com/userupload/7067483/file/original-951562a758c87c94e5e8e9df607ca127.jpg?compress=1&resize=752x"
          class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="p1" />
      </div>
      <h2 class="entry-title">
        <a href="portfolio-item.html" rel="bookmark">{{ post.title }}</a>
      </h2>
      <a class='portfoliotype' href='#'>summer</a>
      <a class='portfoliotype' href='#'>woman</a>
      <a class='portfoliotype' href='#'>yellow</a>
    </header>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';



export default defineComponent({
    name: 'Article',
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
});
</script>
