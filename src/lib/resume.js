const resumeExperience = import.meta.globEager('../../content/resume/*.md');

const experiences = [];
for (const identifier in resumeExperience) {
  const experience = resumeExperience[identifier];
  if (experience) {
    experiences.push({
      ...experience.metadata,
      ...experience.default.render(),
    });
  }
}

export default experiences;
