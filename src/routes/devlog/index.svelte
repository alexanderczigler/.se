<script context="module">
  import '../../app.scss';

  import Footer from '../../sections/Footer.svelte';
  import Header from '../../sections/Header.svelte';
  import Menu from '../../sections/Menu.svelte';

  export async function load({ fetch }) {
    const res = await fetch('/devlog/devlog.json');
    if (res.ok) {
      return {
        props: {
          devlog: await res.json(),
        },
      };
    }
    return {
      status: res.status,
      error: new Error(`Unable to fetch devlog`),
    };
  }
</script>

<script>
  export let devlog;

  /*
   * Sort devlog.
   */
  const sortDelegate = (a, b) => {
    if (a.published > b.published) {
      return -1;
    }
    if (a.published < b.published) {
      return 1;
    }
    return 0;
  };

  devlog = devlog.sort((a, b) => sortDelegate(a, b));
</script>

<svelte:head>
  <title>Alexander Czigler - Resumé</title>
</svelte:head>

<Header />
<Menu />

<div id="content">
  <h3>DevLog</h3>

  <p>
    This is where I occasionally jot down some notes on things.. I do not expect you to read it nor
    enjoy it.
  </p>

  <h3>Entries</h3>

  {#each devlog as entry}
    <h4><a href={'/devlog/' + entry.slug}>{entry.title}</a></h4>
    <!-- {@html experience.html} -->
  {/each}
</div>

<Footer />
