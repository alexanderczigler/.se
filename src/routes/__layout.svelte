<script>
  import '../app.scss';

  import Footer from '../sections/Footer.svelte';
  import Header from '../sections/Header.svelte';
  import Menu from '../sections/Menu.svelte';
</script>

<Header />
<Menu />

<div id="content">
  <slot />
</div>

<Footer />
