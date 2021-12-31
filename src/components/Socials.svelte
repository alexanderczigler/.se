<script>
  import GitHub from './icons/GitHub.svelte';
  import LinkedIn from './icons/LinkedIn.svelte';
  import Mail from './icons/Mail.svelte';
</script>

<a title="Send me an email" target="_blank" href="mailto:dev@ilix.se"> <Mail /></a>
<a
  title="Connect with me on LinkedIn"
  target="_blank"
  href="https://linkedin.com/in/alexanderczigler"><LinkedIn /></a
>
<a
  title="Check out my open source projects on GitHub"
  target="_blank"
  href="https://github.com/alexanderczigler"
>
  <GitHub /></a
>

<style>
  a {
    background-color: var(--background);
    color: var(--haze);
    fill: var(--haze);
  }

  a:hover {
    color: var(--accent);
    fill: var(--accent);
  }
</style>
