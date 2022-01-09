import devlog from '$lib/devlog';

export async function get() {
  const body = Object.keys(devlog)
    .slice(0, 4)
    .map((slug) => ({
      slug,
      ...devlog[slug],
    }));

  return {
    status: 200,
    body: JSON.stringify(body),
  };
}
