<script>
  import Socials from '../components/Socials.svelte';
</script>

<div id="footer" role="contentinfo">
  <p>
    2022<br />
    Alexander Czigler
  </p>

  <div class="socials">
    <Socials />
  </div>

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
    color: var(--text);
    text-decoration: none;
  }

  a:hover {
    background-color: var(--text);
    color: var(--highlight);
  }

  .socials {
    margin-bottom: 24px;
    margin-top: 24px;
  }
</style>
