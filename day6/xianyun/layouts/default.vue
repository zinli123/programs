<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-01 11:05:07
 * @LastEditTime: 2019-09-08 19:12:54
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <!-- 渲染头部组件 -->
    <Header />
    <!-- 页面的占位符,类似于router-view -->
    <nuxt />
    <!-- 渲染底部组件 -->
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
export default {
  components: {
    Header,
    Footer
  }
};
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
}

ul,
li,
ol {
  list-style: none;
}

i,
em {
  font-style: normal;
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  color: inherit;
}
</style>
