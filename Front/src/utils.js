import slugify from 'slugify';

export const slugifyTitle = (title) => slugify(title, { strict: true, lower: true });

