<script>
  import Socials from '../components/Socials.svelte';

  import config from '../lib/config';
  import { url } from 'gravatar';
  let gravatarUrl = url(config.email, { s: 256 });
</script>

<div id="header" class="flex flex-col justify-center items-center pt-12">
  <img src={gravatarUrl} alt="Alexander" class="h-20 rounded-full border border-gray-300" />

  <span class="block text-5xl text-center font-extralight mt-4 pt-0 leading-10"
    >Alexander Czigler</span
  >
  <span class="block text-lg text-center font-thin mt-4 lg:mt-0 mb-5"
    >Backend Engineer & Partner at Iteam Solutions</span
  >

  <Socials />
</div>
