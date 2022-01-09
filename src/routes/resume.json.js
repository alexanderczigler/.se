import experiences from '$lib/resume';

export async function get() {
  const body = Object.keys(experiences).map((slug) => {
    let experience = experiences[slug];

    if (typeof experience.technologies === 'string') {
      experience.technologies = experience.technologies.replaceAll(' ', '');
      experience.technologies = experience.technologies.replaceAll('_', ' ');
      experience.technologies = experiences[slug].technologies.split(',');
      experience.technologies = experience.technologies.sort();
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
