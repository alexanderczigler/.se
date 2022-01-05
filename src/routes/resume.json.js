import experiences from '$lib/resume';

export async function get({ query }) {
  let filter = query.get('tag');
  let filtered = experiences.filter((experience) => {
    if (filter) {
      return experience.tags.indexOf(filter) > -1;
    }

    return true;
  });

  const body = Object.keys(filtered).map((slug) => {
    let experience = filtered[slug];

    if (typeof experience.tags === 'string') {
      experience.tags = experience.tags.replaceAll(' ', '');
      experience.tags = filtered[slug].tags.split(',');
    }

    return {
      slug,
      ...experience,
    };
  });

  return {
    status: 200,
    body: JSON.stringify(body),
  };
}
