<script context="module">
  const resumeMarkdown = import.meta.globEager(`../resume/*.md`);

  let resume = [];
  for (let path in resumeMarkdown) {
    const experience = resumeMarkdown[path];
    const metadata = experience.metadata;

    if (typeof metadata.technologies === 'string') {
      metadata.technologies = metadata.technologies.replaceAll(' ', '');
      metadata.technologies = metadata.technologies.replaceAll('_', ' ');
      metadata.technologies = metadata.technologies.split(',');
      metadata.technologies = metadata.technologies.sort();
    }

    resume.push({
      metadata,
      experience: experience,
    });
  }

  export function load() {
    return {
      props: {
        experiences: resume,
      },
    };
  }
</script>

<script>
  import '../app.scss';
  export let experiences;

  /*
   * Sort experiences according to their end year and length.
   */
  const sortDelegate = (a, b) => {
    const ongoing = new Date().getFullYear() + 1;

    let weightA = a.metadata.start;
    weightA += (a.metadata.end ? a.metadata.end : ongoing) - a.metadata.start;

    let weightB = b.metadata.start;
    weightB += (b.metadata.end ? b.metadata.end : ongoing) - b.metadata.start;

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
  <h1>Resumé</h1>

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

  <h2>Experience</h2>

  {#each experiences as experience}
    <h3>{experience.metadata.role}</h3>
    <p class="client text-fade">
      &raquo; {experience.metadata.client}
    </p>

    <p class="period text-fade">
      &raquo; {experience.metadata.start} &mdash; {experience.metadata.end ?? ''}
    </p>

    <p>
      <span class="text-fade pt-0">
        &raquo;
        {#each experience.metadata.technologies as technology}
          <span class="technology">{technology}</span>
        {/each}
      </span>
    </p>

    <svelte:component this={experience.experience.default} />
  {/each}
</div>

<style>
  .client {
    margin-bottom: 0;
  }

  .period {
    margin-top: 0;
  }

  .technology:after {
    content: ', ';
  }

  .technology:last-child:after {
    content: '';
  }
</style>
