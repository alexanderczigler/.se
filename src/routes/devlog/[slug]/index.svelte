<script context="module">
  const allDevlogs = import.meta.globEager(`../../../devlog/*.md`);

  let logs = [];
  for (let path in allDevlogs) {
    const log = allDevlogs[path];
    const slug = log.metadata.slug;
    const title = log.metadata.title;

    logs.push({
      log,
      slug,
      title,
    });
  }

  export function load({ page }) {
    const { slug } = page.params;

    const filteredlog = logs.find((log) => {
      return log.slug.toLowerCase() === slug.toLowerCase();
    });

    return {
      props: {
        devlog: filteredlog.log.default,
        title: filteredlog.title,
      },
    };
  }
</script>

<script>
  import '../../../app.scss';

  export let devlog;
  export let title;
</script>

<svelte:head>
  <title>Alexander Czigler - {title}</title>
</svelte:head>

<svelte:component this={devlog} />
