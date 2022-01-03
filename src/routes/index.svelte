<script context="module">
  import '../app.scss';

  import Footer from '../sections/Footer.svelte';
  import Header from '../sections/Header.svelte';
  import Menu from '../sections/Menu.svelte';
</script>

<svelte:head>
  <title>Alexander Czigler - Home</title>
</svelte:head>

<Header />

<Menu />

<div id="content">
  <h3>Hello</h3>
  <p>
    I am a self-taught software developer currently working as a backend engineer at <a
      href="https://iteam.se/">Iteam Solutions</a
    > in Stockholm.
  </p>

  <p>
    My passion for software and the web began in the late 90's when I started learning basic HTML
    and making homepages. When I got DSL in the early 00's I built my first server and started
    learning about linux and setting up networks, web servers and firewalls. Since then I have been
    learning more and more all the time by continuous exploration and by surrounding myself with
    talented people who inspire me to learn and grow.
  </p>

  <p>
    Outside of computers and technology I enjoy reading, working out and being outdoors in nature.
    One of my latest hobbies that I have picked up is dancing. I took classes learning Lindy Hop a
    few years ago and after that I switched to poledancing which I still practice regularly. Along
    with dancing I also pratice yoga and some basic acrobatics such as handbalancing.
  </p>

  <h3>Social</h3>

  <p>
    If you are curious about some of the non work-related aspects of me, you can find me on a few
    social platforms as well. Feel free to send me a friend request if you happen to use any of
    them.
  </p>

  <p>
    I use <a href="https://goodreads.com/alexanderczigler">Goodreads</a> to track the books I read.
    I rarely actually write reviews but I am quite active keeping my own library and to-read list
    updated. I also enjoy learning new languages on
    <a href="https://www.duolingo.com/profile/alexanderczigler">Duolingo</a> where I am currently learning
    Italian.
  </p>

  <p>
    If you are into deep house, techno or retrowave, check out my <a
      href="https://soundcloud.com/alexanderczigler">SoundCloud</a
    >
    profile. And last but not least you can find me on
    <a href="https://www.strava.com/athletes/60476104">Strava</a> where I track most of my workouts and
    walks.
  </p>
</div>

<Footer />
