<script>
  import IconLinks from '../components/IconLinks.svelte';
</script>

<hr />

<div id="footer">
  <p>
    2021<br />
    Alexander Matthias Czigler
  </p>

  <span class="icon-links">
    <IconLinks />
  </span>

  <p>
    Built using
    <a href="https://kit.svelte.dev/">SvelteKit</a> |
    <a href="https://github.com/alexanderczigler/.nfo">Source code</a>
    | Icons by
    <a href="https://iconoir.com">Iconoir</a>
  </p>
</div>

<style>
  p {
    font-weight: 100;
  }

  #footer {
    text-align: center;
  }

  hr {
    border: 0;
    border-top: 1px solid var(--oasis);
    height: 0;
    margin: 64px 0 0 0;
  }
</style>
