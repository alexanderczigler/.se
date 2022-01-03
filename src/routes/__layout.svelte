<script>
  import '../app.scss';

  import Footer from '../sections/Footer.svelte';
  import Header from '../sections/Header.svelte';
  import Menu from '../sections/Menu.svelte';
</script>

<div class="meow">
  <Header />
  <Menu />

  <div id="content">
    <slot />
  </div>
</div>

<Footer />

<style>
  .meow {
    background-color: var(--background);
    background-image: radial-gradient(var(--background-fade) 0.5px, var(--background) 0.5px);
    background-size: 10px 10px;
    background-attachment: fixed;
  }
</style>
