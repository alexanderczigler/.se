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

    const filteredLog = logs.find((log) => {
      return log.slug.toLowerCase() === slug.toLowerCase();
    });

    return {
      props: {
        devlog: filteredLog.log.default,
        title: filteredLog.title,
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

<h1>{title}</h1>

<svelte:component this={devlog} />
