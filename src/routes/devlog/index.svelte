<script context="module">
  import '../../app.scss';

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

  devlog.forEach((element) => {
    element.published = new Date(element.published);
  });
</script>

<svelte:head>
  <title>Alexander Czigler - Devlog</title>
</svelte:head>

<div id="content">
  <h1>Devlog</h1>

  <p>
    This is where I plan to occasionally jot down some notes on code and such... time will tell what
    I make of it 😊
  </p>

  <h2>Entries</h2>

  {#each devlog as entry}
    <p>
      <a href={'/devlog/' + entry.slug}>{entry.title}</a>
      <span class="text-fade">({entry.published.toLocaleDateString('sv-SE')})</span>
    </p>
  {/each}
</div>
