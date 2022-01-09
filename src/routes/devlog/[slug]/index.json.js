import devlog from '$lib/devlog';

export function get({ params }) {
  const entry = devlog.find((x) => x.slug === params.slug);
  if (entry) {
    return {
      status: 200,
      body: entry,
    };
  }

  return {
    status: 404,
  };
}
