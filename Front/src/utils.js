import slugify from 'slugify';

export const slugifyTitle = (title) => {
  return `/article/${slugify(title, { strict: true, lower: true })}`
}

export const slugifyKanbanTitle = (title) => {
  return `/article/${slugify(title, { strict: true, lower: true })}`
}
