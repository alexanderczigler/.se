<script>
  import GitHub from '../components/icon-links/GitHub.svelte';
  import LinkedIn from '../components/icon-links/LinkedIn.svelte';
  import Mail from '../components/icon-links/Mail.svelte';

  import { url } from 'gravatar';
  let gravatarUrl = url('dev@ilix.se', { s: 256 });
</script>

<span id="icons" class="icon-links">
  <Mail />
  <LinkedIn />
  <GitHub />
</span>

<div class="section">
  <img src={gravatarUrl} alt="Alexander" />
  <span>
    <h1>Alexander M. Czigler</h1>
    <h2>Backend Engineer & Partner at Iteam Solutions</h2></span
  >
</div>

<hr />

<style>
  #icons {
    float: right;
  }

  h1 {
    color: var(--pearl);
    font-family: 'Josefin Sans', sans-serif;
    font-size: 3em;
    font-weight: 100;
    margin: 0.2em 0 0 4px;
    text-transform: capitalize;
  }

  h2 {
    color: var(--pearl);
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.1em;
    font-weight: 200;
    margin: 0 0 16px 4px;
  }

  hr {
    border: 0;
    border-top: 1px solid var(--earth);
    height: 0;
    margin: 16px 0 64px 0;
  }

  img {
    width: 5em;
    height: 5em;
    display: inline-block;
    border-radius: 50%;
    margin: 0 1em 0 0;
    border: 1px var(--white) solid;
  }

  div.section {
    background-color: var(--black);
    border-bottom: 8px var(--azure) solid;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: stretch;
    align-content: stretch;
  }
</style>
