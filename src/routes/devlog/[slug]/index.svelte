<script context="module">
  const allDevlogs = import.meta.globEager(`../../../devlog/*.md`);

  let logs = [];
  for (let path in allDevlogs) {
    const log = allDevlogs[path];
    const slug = log.metadata.slug;

    logs.push({
      log,
      slug,
    });
  }
  export function load({ page }) {
    const { slug } = page.params;

    const filteredlog = logs.find((p) => {
      return p.slug.toLowerCase() === slug.toLowerCase();
    });
    return {
      props: {
        devlog: filteredlog.log.default,
      },
    };
  }
</script>

<script>
  import '../../../app.scss';

  export let devlog;
</script>

<svelte:component this={devlog} />
