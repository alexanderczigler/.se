<script>
  import Socials from '../components/Socials.svelte';
</script>

<div id="footer">
  <p>
    2021<br />
    Alexander Matthias Czigler
  </p>

  <span class="icon-links">
    <Socials />
  </span>

  <p>
    <a
      title="Check out the source code on GitHub"
      target="_blank"
      href="https://github.com/alexanderczigler/.nfo">Source code</a
    >
  </p>

  <p>
    Built using <a title="SvelteKit" target="_blank" href="https://kit.svelte.dev/">SvelteKit</a>
    <br />
    Icons by <a title="Iconoir" target="_blank" href="https://iconoir.com">Iconoir</a>
  </p>
</div>

<style>
  #footer {
    text-align: center;
    padding-bottom: 4em;
    background-color: var(--background-fade);
  }

  p {
    color: var(--text-fade);
    font-weight: 100;
  }
</style>
