<script>
  import DevLog from '../components/icon-links/DevLog.svelte';
  import GitHub from '../components/icon-links/GitHub.svelte';
  import Goodreads from '../components/icon-links/Goodreads.svelte';
  import LinkedIn from '../components/icon-links/LinkedIn.svelte';
  import Mail from '../components/icon-links/Mail.svelte';
  import SoundCloud from '../components/icon-links/SoundCloud.svelte';
</script>

<hr />

<div id="footer">
  <p>
    2021<br />
    Alexander Matthias Czigler
  </p>

  <span class="icon-links">
    <Mail />
    <LinkedIn />
    <GitHub />
    <DevLog />
    <Goodreads />
    <SoundCloud />
  </span>

  <p>Icons by <a href="https://iconoir.com">Iconoir</a></p>
</div>

<style>
  #footer {
    text-align: center;
  }

  .icon-links a {
    background-color: var(--blizzard);
  }

  hr {
    border: 0;
    border-top: 1px solid var(--earth);
    height: 0;
    margin: 16px 0 0 0;
  }
</style>
