<template>
<div>
<HeaderNav />
  <!-- ======= Hero Section ======= -->

  <!-- End Hero -->

  <main id="main">

<router-view />
  </main>
  <Footer />
</div>
</template>

<script>
import HeaderNav from './components/layout/headerNav.vue';
import Footer from './components/layout/footer.vue';

export default {
  name: 'App',
  components: {
  Footer,HeaderNav
  }
}
</script>

<style>

</style>
