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
            <div class="grid portfoliogrid">

              <!-- :src="post.image"  -->

                <article v-for="post in posts" :key="post.id" class="hentry">
                  <header class="entry-header">
                    <div class="entry-thumbnail">
                      <a href="portfolio-item.html">
                        <img src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/15/2015/09/30162427/p1.jpg"
                          class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="p1" />
                      </a>
                    </div>
                    <h2 class="entry-title"><a href="portfolio-item.html" rel="bookmark">Sunset Beach</a></h2>
                    <a class='portfoliotype' href='portfolio-category.html'>summer</a>
                    <a class='portfoliotype' href='portfolio-category.html'>woman</a>
                    <a class='portfoliotype' href='portfolio-category.html'>yellow</a>
                  </header>
                </article>

<!-- 
              <article class="hentry">
                <header class="entry-header">
                  <div class="entry-thumbnail">
                    <a href="portfolio-item.html">
                      <img src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/15/2015/09/30162427/p1.jpg"
                        class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="p1" />
                    </a>
                  </div>
                  <h2 class="entry-title"><a href="portfolio-item.html" rel="bookmark">Sunset Beach</a></h2>
                  <a class='portfoliotype' href='portfolio-category.html'>summer</a>
                  <a class='portfoliotype' href='portfolio-category.html'>woman</a>
                  <a class='portfoliotype' href='portfolio-category.html'>yellow</a>
                </header>
              </article>

              <article class="hentry">
                <header class="entry-header">
                  <div class="entry-thumbnail">
                    <a href="portfolio-item.html"><img
                        src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/15/2015/09/30160348/p5.jpg"
                        class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="p1" /></a>
                  </div>
                  <h2 class="entry-title"><a href="portfolio-item.html" rel="bookmark">Earl of Moreland</a></h2>
                  <a class='portfoliotype' href='portfolio-category.html'>hat</a>
                  <a class='portfoliotype' href='portfolio-category.html'>woman</a>
                  <a class='portfoliotype' href='portfolio-category.html'>yellow</a>
                </header>
              </article>

              <article class="hentry">
                <header class="entry-header">
                  <div class="entry-thumbnail">
                    <a href="portfolio-item.html"><img
                        src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/15/2015/09/30160151/p3.jpg"
                        class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="p1" /></a>
                  </div>
                  <h2 class="entry-title"><a href="portfolio-item.html" rel="bookmark">Eliza and John</a></h2>
                  <a class='portfoliotype' href='portfolio-category.html'>summer</a>
                  <a class='portfoliotype' href='portfolio-category.html'>woman</a>
                  <a class='portfoliotype' href='portfolio-category.html'>yellow</a>
                </header>
              </article>

              <article class="hentry">
                <header class="entry-header">
                  <div class="entry-thumbnail">
                    <a href="portfolio-item.html"><img
                        src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/15/2015/09/18160911/p6.jpg"
                        class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="p1" /></a>
                  </div>
                  <h2 class="entry-title"><a href="portfolio-item.html" rel="bookmark">Hot Afternoon</a></h2>
                  <a class='portfoliotype' href='portfolio-category.html'>pink</a>
                  <a class='portfoliotype' href='portfolio-category.html'>woman</a>
                  <a class='portfoliotype' href='portfolio-category.html'>yellow</a>
                </header>
              </article>

              <article class="hentry">
                <header class="entry-header">
                  <div class="entry-thumbnail">
                    <a href="portfolio-item.html"><img
                        src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/15/2015/09/15223245/p2.jpg"
                        class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="p1" /></a>
                  </div>
                  <h2 class="entry-title"><a href="portfolio-item.html" rel="bookmark">Long Walks</a></h2>
                  <a class='portfoliotype' href='portfolio-category.html'>hat</a>
                  <a class='portfoliotype' href='portfolio-category.html'>summer</a>
                  <a class='portfoliotype' href='portfolio-category.html'>yellow</a>
                </header>
              </article>

              <article class="hentry">
                <header class="entry-header">
                  <div class="entry-thumbnail">
                    <a href="portfolio-item.html"><img
                        src="http://s3.amazonaws.com/caymandemo/wp-content/uploads/sites/15/2015/09/15222855/p7.jpg"
                        class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="p1" /></a>
                  </div>
                  <h2 class="entry-title"><a href="portfolio-item.html" rel="bookmark">Twilight</a></h2>
                  <a class='portfoliotype' href='portfolio-category.html'>hat</a>
                  <a class='portfoliotype' href='portfolio-category.html'>woman</a>
                  <a class='portfoliotype' href='portfolio-category.html'>summer</a>
                </header>
              </article> -->

            </div>
            <!-- .grid -->

            <nav class="pagination">
              <span class="page-numbers current">1</span>
              <a class="page-numbers" href="#">2</a>
              <a class="next page-numbers" href="#">Next »</a>
            </nav>

            <br />

          </main>
          <h2 v-else>Нет статей</h2>
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
    async fetchPosts() {
      try {
        const response = await axios.get('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/');
        const tenPosts = response.data.slice(0, 9);
        console.log(tenPosts);
        this.posts = tenPosts;
      } catch (error) {
        alert(error);
      }
    }
  },
  data() {
    return {
      posts: [] as IPost[],
    }
  },
  mounted() {
    this.fetchPosts();
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
