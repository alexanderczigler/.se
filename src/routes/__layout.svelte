<script>
  import '../app.scss';

  import Footer from '../sections/Footer.svelte';
  import Header from '../sections/Header.svelte';
  import Menu from '../sections/Menu.svelte';
</script>

<div class="layout">
  <Header />
  <Menu />

  <div id="content" role="main">
    <slot />
  </div>
</div>

<Footer />

<style>
  .layout {
    background-color: var(--background);
    background-image: radial-gradient(var(--background-fade) 0.5px, var(--background) 0.5px);
    background-size: 10px 10px;
    background-attachment: fixed;
  }
</style>
