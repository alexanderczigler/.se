<script>
  import Socials from '../components/Socials.svelte';

  import { url } from 'gravatar';
  let gravatarUrl = url('nfo@ilix.se', { s: 256 });
</script>

<div id="header">
  <span class="title">
    <img src={gravatarUrl} alt="Alexander" />
    <span>
      <span class="heading">Alexander Czigler</span>
      <span class="subheading">Backend Engineer & Partner at Iteam Solutions</span></span
    >
  </span>

  <span class="socials">
    <Socials />
  </span>
</div>

<style>
  #header {
    border-bottom: 1px var(--accent) solid;
    display: flex;
    flex-direction: column;
    margin: 2em 0;
    padding-bottom: 1em;
    text-align: center;
  }

  span.title {
    margin-left: 1em;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
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
    margin-top: 24px;
  }

  span.heading {
    font-size: 3em;
    font-weight: 200;
    margin: 0.2em 0 0 4px;
    display: block;
  }

  span.subheading {
    font-size: 1.1em;
    font-weight: 100;
    margin: 0 0 16px 4px;
  }

  @media (min-width: 768px) {
    #header {
      flex-direction: row;
      justify-content: space-between;

      text-align: left;
    }

    span.socials {
      margin-top: 0;
    }

    span.title {
      flex-direction: row;
      align-items: flex-start;
    }
  }

  @media (min-width: 950px) {
    #header {
      justify-content: space-between;
      margin: 2em auto;
      max-width: 950px;
    }
  }
</style>
