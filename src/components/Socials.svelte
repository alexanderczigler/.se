<script>
  import GitHub from './icons/GitHub.svelte';
  import LinkedIn from './icons/LinkedIn.svelte';
  import Mail from './icons/Mail.svelte';

  import config from '../lib/config';
</script>

<span class="flex">
  <a class="mr-1" title="Send me an email" target="_blank" href="mailto:{config.email}">
    <Mail /></a
  >
  <a
    class="mr-1"
    title="Connect with me on LinkedIn"
    target="_blank"
    href="https://linkedin.com/in/alexanderczigler"><LinkedIn /></a
  >
  <a
    class="mr-1"
    title="Check out my open source projects on GitHub"
    target="_blank"
    href="https://github.com/alexanderczigler"
  >
    <GitHub /></a
  >
</span>

<style>
  a {
    background-color: unset;
    color: var(--haze);
    fill: var(--haze);
  }

  a:hover {
    color: var(--accent);
    fill: var(--accent);
  }
</style>
