const devlogs = import.meta.globEager('../devlog/*.md');

const devlog = [];
for (const identifier in devlogs) {
  const experience = devlogs[identifier];
  if (experience) {
    experience.metadata.published = new Date(experience.metadata.published);
    devlog.push({
      ...experience.metadata,
      ...experience.default.render(),
    });
  }
}

export default devlog;
