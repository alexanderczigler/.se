<script>
  import Socials from '../components/Socials.svelte';

  import { url } from 'gravatar';
  let gravatarUrl = url('dev@ilix.se', { s: 256 });
</script>

<div id="header">
  <span class="title">
    <img src={gravatarUrl} alt="Alexander" />
    <span>
      <h1>Alexander M. Czigler</h1>
      <h2>Backend Engineer & Partner at Iteam Solutions</h2></span
    >
  </span>

  <span class="socials">
    <Socials />
  </span>
</div>

<style>
  #header {
    margin: 0 1em;

    display: flex;
    justify-content: space-between;
  }

  span.title {
    margin-left: 1em;
    display: flex;
    justify-content: flex-start;
  }

  span.title img {
    width: 5em;
    height: 5em;
    border-radius: 50%;
    margin: 0 1em 0 0;
    border: 1px var(--text-fade) solid;
  }

  span.socials {
    margin-right: 1em;
  }

  @media (min-width: 1000px) {
    #header {
      margin-top: 2em;
      margin-right: auto;
      margin-left: auto;

      max-width: 1000px;

      border-bottom: 1px var(--accent) solid;
    }
  }
</style>
