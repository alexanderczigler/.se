<script>
  import Socials from '../components/Socials.svelte';
</script>

<hr />

<div id="footer">
  <p>---</p>

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
  p {
    color: var(--text-off);
    font-weight: 100;
  }

  #footer {
    text-align: center;
    padding-bottom: 4em;
  }

  hr {
    border: 0;
    border-top: 1px solid var(--oasis);
    height: 0;
    margin: 64px 0 0 0;
  }
</style>
