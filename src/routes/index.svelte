<script context="module">
  import '../app.scss';

  import Footer from '../sections/Footer.svelte';
  import Header from '../sections/Header.svelte';

  export async function load({ fetch }) {
    const res = await fetch('/resume.json');
    if (res.ok) {
      return {
        props: {
          experiences: await res.json(),
        },
      };
    }
    return {
      status: res.status,
      error: new Error(`Unable to fetch experiences`),
    };
  }
</script>

<script>
  export let experiences;

  /*
   * Sort experiences according to their end year and length.
   */
  const sortDelegate = (a, b) => {
    const ongoing = new Date().getFullYear() + 1;

    let weightA = a.start;
    weightA += (a.end ? a.end : ongoing) - a.start;

    let weightB = b.start;
    weightB += (b.end ? b.end : ongoing) - b.start;

    if (weightA > weightB) {
      return -1;
    }
    if (weightA < weightB) {
      return 1;
    }
    return 0;
  };

  experiences = experiences.sort((a, b) => sortDelegate(a, b));
</script>

<Header />

<div id="content">
  <h3>Hello</h3>
  <p>
    I am a self-taught software developer currently working as a backend engingeer at <a
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

  <h3>Experience</h3>

  {#each experiences as experience}
    <h4>{experience.role}</h4>
    <h5>
      {experience.client}
    </h5>
    <h6>
      {experience.start} &mdash; {experience.end ?? ''}
    </h6>
    {@html experience.html}
  {/each}

  <p>
    I am going to add my resumé here soon. In the mean time, check out my <a
      href="https://linkedin.com/in/alexanderczigler">LinkedIn profile</a
    >.
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

<style>
  #content {
    margin: 0;
    padding-bottom: 2em;
  }

  @media (min-width: 950px) {
    #content {
      margin: 2em auto;
      max-width: 950px;
    }
  }

  a {
    background-color: var(--accent);
    color: var(--text-fade);
    text-decoration: none;
  }

  a:hover {
    background-color: var(--accent-fade);
    color: var(--text);
    text-decoration: none;
  }
</style>
