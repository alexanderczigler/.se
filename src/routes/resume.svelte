<script context="module">
  import '../app.scss';

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

<svelte:head>
  <title>Alexander Czigler - Resumé</title>
</svelte:head>

<div id="content">
  <h3>Resumé</h3>

  <p>
    I have many years experience being a consultant. First from work as a freelance developer and
    then from working at three different consultancy firms since 2008 and forward. As a consultant I
    have been lucky to work with many different clients. I have help startups take off; I have
    helped an international bank adopt container technology and becoming more agile and many things
    in-between.
  </p>

  <p>
    What characterizes my career and each project I have worked on is learning. I love learning new
    things and what I love even more is learning and growing alongside other people who share the
    same goals. I think that we are quickly approaching a time where organizations need to adopt a
    culture of learning and high functioning teams to be able to survive. Those who fail will find
    it hard to keep up and reinvent themselves.
  </p>

  <p>
    I am in the process of adding projects to this page. As long as your see this paragraph here the
    list below may not be complete. In the mean time, check out my <a
      href="https://linkedin.com/in/alexanderczigler">LinkedIn profile</a
    >.
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
</div>
