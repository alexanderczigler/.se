import experiences from '$lib/resume';

export async function get() {
  const body = Object.keys(experiences)
    .slice(0, 4)
    .map((slug) => ({
      slug,
      ...experiences[slug],
    }));

  return {
    status: 200,
    body: JSON.stringify(body),
  };
}
