<script>
  import Socials from '../components/Socials.svelte';
</script>

<div id="footer">
  <p>
    2022<br />
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
    background-color: var(--background-fade);
    border-top: 1px var(--text-fade) solid;
    padding: 2em 0 4em 0;
    text-align: center;
  }

  p {
    color: var(--text-fade);
    font-weight: 100;
  }

  a,
  a:visited {
    background-color: var(--accent);
    color: var(--text-fade);
    text-decoration: none;
  }

  a:hover {
    background-color: var(--accent-fade);
    color: var(--text);
  }
</style>
