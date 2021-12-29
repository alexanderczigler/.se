<script>
  import '../app.scss';

  import Link from '../components/Link.svelte';

  import links from '../lib/links.json';
</script>

<h1>Alexander Czigler</h1>
<h2>Backend Engineer at <a href="https://iteam.se">Iteam</a></h2>

<h3>Hello!</h3>
<p>
  My name is Alexander and I live in Stockholm, Sweden. I work as an IT consultant mainly focusing
  on system development and agile coaching/mentoring.
</p>

{#each links as category}
  <div>
    <h3>{category.name}</h3>
    <ul>
      {#each category.links as link}
        <li>
          <Link icon={link.icon} name={link.name} url={link.url} />
        </li>
      {/each}
    </ul>
  </div>
{/each}

<style>
</style>
