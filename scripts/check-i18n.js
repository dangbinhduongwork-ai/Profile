/**
 * Verification script for i18n parity between vi.js and en.js
 * Run via: npm run check:i18n
 */

import { vi } from '../src/i18n/vi.js';
import { en } from '../src/i18n/en.js';

let errors = [];

function checkObjectKeys(objA, objB, path = '', nameA = 'en', nameB = 'vi') {
  for (const key of Object.keys(objA)) {
    const currentPath = path ? `${path}.${key}` : key;
    if (!(key in objB)) {
      errors.push(`Missing key in ${nameB}: "${currentPath}" (found in ${nameA})`);
      continue;
    }

    const valA = objA[key];
    const valB = objB[key];

    if (valA !== null && typeof valA === 'object' && !Array.isArray(valA)) {
      if (valB === null || typeof valB !== 'object' || Array.isArray(valB)) {
        errors.push(`Type mismatch at "${currentPath}": ${nameA} is Object, ${nameB} is not`);
      } else {
        checkObjectKeys(valA, valB, currentPath, nameA, nameB);
      }
    } else if (Array.isArray(valA)) {
      if (!Array.isArray(valB)) {
        errors.push(`Type mismatch at "${currentPath}": ${nameA} is Array, ${nameB} is not`);
      }
    }
  }
}

// 1. Two-way key parity check
checkObjectKeys(en, vi, '', 'en', 'vi');
checkObjectKeys(vi, en, '', 'vi', 'en');

// 2. Blog posts structure validation
const requiredPostKeys = ['id', 'tag', 'title', 'excerpt', 'status', 'date', 'readTime', 'url', 'cover'];

function validatePosts(posts, langName) {
  if (!Array.isArray(posts) || posts.length === 0) {
    errors.push(`${langName}: blog.posts must be a non-empty array`);
    return;
  }
  posts.forEach((post, idx) => {
    for (const key of requiredPostKeys) {
      if (!(key in post)) {
        errors.push(`${langName}: blog.posts[${idx}] missing required property "${key}"`);
      }
    }
    if (post.status !== 'soon' && post.status !== 'published') {
      errors.push(`${langName}: blog.posts[${idx}].status must be "soon" or "published", got "${post.status}"`);
    }
    if (!post.cover || typeof post.cover !== 'object') {
      errors.push(`${langName}: blog.posts[${idx}].cover must be an object`);
    } else {
      if (!post.cover.icon) {
        errors.push(`${langName}: blog.posts[${idx}].cover.icon is required`);
      }
      if (!Array.isArray(post.cover.gradient) || post.cover.gradient.length !== 2) {
        errors.push(`${langName}: blog.posts[${idx}].cover.gradient must be an array of 2 colors`);
      }
    }
  });
}

validatePosts(en.blog?.posts, 'en');
validatePosts(vi.blog?.posts, 'vi');

// 3. Blog required footer keys
if (!en.blog?.footerNotice) errors.push('en.blog.footerNotice is required');
if (!vi.blog?.footerNotice) errors.push('vi.blog.footerNotice is required');
if (!en.blog?.followGithub) errors.push('en.blog.followGithub is required');
if (!vi.blog?.followGithub) errors.push('vi.blog.followGithub is required');

// Results
if (errors.length > 0) {
  console.error('\n❌ i18n validation failed with ' + errors.length + ' error(s):');
  errors.forEach((err) => console.error('  - ' + err));
  process.exit(1);
} else {
  console.log('\n✅ i18n validation passed successfully! (vi.js and en.js 100% matched)\n');
  process.exit(0);
}
