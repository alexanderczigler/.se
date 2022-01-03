const devlogs = import.meta.globEager('../../content/devlog/*.md');

const devlog = [];
for (const identifier in devlogs) {
  const experience = devlogs[identifier];
  if (experience) {
    devlog.push({
      ...experience.metadata,
      ...experience.default.render(),
    });
  }
}

export default devlog;
