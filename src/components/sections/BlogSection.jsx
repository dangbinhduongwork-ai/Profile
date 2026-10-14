import React from 'react';
import {
  FileText,
  Code,
  Layers,
  ArrowRight,
  ExternalLink,
  Calendar,
  Clock,
} from 'lucide-react';
import { profile } from '../../data/profile';
import { useLang } from '../../hooks/useLang';

const BLOG_ICONS = {
  Code,
  Layers,
  FileText,
};

function getGradient(gradient) {
  if (Array.isArray(gradient) && gradient.length === 2) {
    return `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`;
  }
  return 'linear-gradient(135deg, #0b1e3f, #1e5fd8)';
}

export function BlogSection() {
  const { t } = useLang();

  // Get posts from i18n dictionary, with safety fallback
  const posts = t.blog?.posts || [];
  const featuredPost = posts[0] || null;
  const sidePosts = posts.slice(1, 3);
  const hasSoonPosts = posts.some((p) => p.status === 'soon');

  return (
    <section
      id="blog"
      className="card rounded-[14px] sm:rounded-2xl border border-border bg-surface p-[18px] sm:p-6 transition-colors duration-200 flex flex-col h-full min-w-0"
    >
      {/* 1. Section Header: FileText icon + Title + Post count + Optional View All */}
      <div className="flex items-center justify-between gap-3 mb-3.5 sm:mb-4 flex-none">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-text flex items-center gap-2.5 [text-wrap:balance]">
          <FileText className="w-5 h-5 text-accent flex-none" />
          <span>{t.blog?.title || profile.sectionTitles?.blog || 'Blog'}</span>
          {posts.length > 0 && (
            <span className="text-[12px] font-semibold px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
              {posts.length}
            </span>
          )}
        </h2>

        {/* Link 'Xem tất cả / View all' if more than 3 posts */}
        {posts.length > 3 && (
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[12.5px] text-accent font-semibold hover:underline"
          >
            <span>{t.blog?.viewAll || 'View all'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        )}
      </div>

      {/* 2. Empty State (if no posts exist) */}
      {posts.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center min-h-[220px] rounded-xl border border-dashed border-border bg-surface2/50">
          <div className="w-14 h-14 rounded-2xl bg-surface2 border border-border flex items-center justify-center text-muted mb-3">
            <FileText className="w-7 h-7 stroke-[1.5]" />
          </div>
          <h3 className="text-[15px] font-semibold text-text mb-1">
            {t.blog?.emptyTitle || 'No posts yet'}
          </h3>
          <p className="text-[13px] text-muted max-w-sm mb-4 leading-relaxed">
            {t.blog?.emptyMessage ||
              'The first articles are being prepared and will be published soon.'}
          </p>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] font-semibold bg-accent text-white hover:bg-accent/90 transition-colors shadow-sm"
          >
            <span>{t.blog?.followGithub || 'Follow on GitHub'}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      ) : (
        /* 3. Main Content: 2 columns (1.4fr / 1fr), 3 rows (1fr 1fr auto), gap 14px */
        <div className="flex-1 flex flex-col min-[900px]:grid min-[900px]:grid-cols-[1.4fr_1fr] min-[900px]:grid-rows-[1fr_1fr_auto] gap-3.5">
          {/* a) Bài nổi bật (bài đầu tiên): chiếm 2 hàng ở cột trái */}
          {featuredPost && (
            <article
              aria-disabled={featuredPost.status === 'soon'}
              className="min-[900px]:col-start-1 min-[900px]:col-end-2 min-[900px]:row-start-1 min-[900px]:row-end-3 rounded-[14px] border border-border bg-surface2 overflow-hidden flex flex-col h-full group transition-all duration-200"
            >
              {featuredPost.status === 'published' ? (
                <a
                  href={featuredPost.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col h-full [@media(hover:hover)]:hover:-translate-y-[3px] [@media(hover:hover)]:hover:shadow-glow transition-all duration-200"
                >
                  <FeaturedCardInner post={featuredPost} t={t} />
                </a>
              ) : (
                <div className="flex flex-col h-full cursor-default select-none">
                  <FeaturedCardInner post={featuredPost} t={t} />
                </div>
              )}
            </article>
          )}

          {/* b) Hai bài còn lại ở cột phải: thẻ NGANG */}
          {sidePosts.map((post, idx) => {
            const rowIndex = idx === 0 ? 'min-[900px]:row-start-1' : 'min-[900px]:row-start-2';
            const IconComp = BLOG_ICONS[post.cover?.icon] || FileText;

            return (
              <article
                key={post.id || idx}
                aria-disabled={post.status === 'soon'}
                className={`min-[900px]:col-start-2 ${rowIndex} rounded-[14px] border border-border bg-surface2 overflow-hidden flex flex-row items-stretch h-full group transition-all duration-200`}
              >
                {post.status === 'published' ? (
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-stretch w-full [@media(hover:hover)]:hover:-translate-y-[3px] [@media(hover:hover)]:hover:shadow-glow transition-all duration-200"
                  >
                    <SideCardInner post={post} IconComp={IconComp} t={t} />
                  </a>
                ) : (
                  <div className="flex flex-row items-stretch w-full cursor-default select-none">
                    <SideCardInner post={post} IconComp={IconComp} t={t} />
                  </div>
                )}
              </article>
            );
          })}

          {/* c) Hàng cuối chiếm cả 2 cột: chỉ hiện khi còn bài status "soon" */}
          {hasSoonPosts && (
            <div className="min-[900px]:col-span-2 min-[900px]:row-start-3 border-t border-dashed border-border pt-3.5 mt-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
              <p className="text-[12.5px] text-muted leading-relaxed">
                {t.blog?.footerNotice ||
                  'The first posts are coming soon. Follow on GitHub so you don’t miss them.'}
              </p>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[12.5px] text-accent font-semibold hover:underline whitespace-nowrap min-h-[44px] sm:min-h-0 flex-none"
              >
                <span>{t.blog?.followGithub || 'Follow on GitHub'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

/**
 * Inner content for Featured Post card
 */
function FeaturedCardInner({ post, t }) {
  const IconComp = BLOG_ICONS[post.cover?.icon] || Code;

  return (
    <>
      {/* Ảnh bìa gradient lấp phần trên (flex:1, min-h-170px trên desktop, 140px trên mobile) */}
      <div
        className="h-[140px] min-[900px]:h-auto min-[900px]:flex-1 min-[900px]:min-h-[170px] relative flex items-center justify-center overflow-hidden flex-none"
        style={{ background: getGradient(post.cover?.gradient) }}
      >
        <IconComp className="w-[46px] h-[46px] text-white stroke-[1.6] group-hover:scale-105 transition-transform duration-300" />
        {/* Nhãn chủ đề kiểu kính mờ ở góc trên trái */}
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-medium text-white bg-white/20 backdrop-blur-md border border-white/20 shadow-sm leading-none">
          {post.tag}
        </span>
      </div>

      {/* Phần nội dung dưới: Tiêu đề 16px đậm, excerpt 13px muted, status badge */}
      <div className="p-4 sm:p-5 flex flex-col gap-2 bg-surface2 flex-none">
        <h3 className="text-[16px] font-bold text-text leading-snug line-clamp-2">
          {post.title}
        </h3>
        {post.excerpt ? (
          <p className="text-[13px] text-muted leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>
        ) : null}
        <div className="pt-1">
          {post.status === 'soon' ? (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-accent/12 text-accent border border-accent/20 w-fit">
              {t.blog?.comingSoon || 'Coming Soon'}
            </span>
          ) : (
            <div className="text-[12px] text-muted flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{post.date}</span>
              <span>·</span>
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

/**
 * Inner content for Side horizontal Post card
 */
function SideCardInner({ post, IconComp, t }) {
  return (
    <>
      {/* Ô bìa vuông rộng 96px bên trái */}
      <div
        className="w-24 sm:w-[96px] min-h-[96px] flex-none relative flex items-center justify-center overflow-hidden"
        style={{ background: getGradient(post.cover?.gradient) }}
      >
        <IconComp className="w-7 h-7 text-white stroke-[1.6] group-hover:scale-105 transition-transform duration-300" />
      </div>

      {/* Phần nội dung bên phải: Tag (accent, 11px), tiêu đề, huy hiệu */}
      <div className="p-3 sm:p-3.5 flex flex-col justify-between flex-1 min-w-0">
        <div>
          <span className="text-[11px] font-semibold text-accent leading-none block uppercase tracking-wider">
            {post.tag}
          </span>
          <h3 className="text-[13.5px] sm:text-[14px] font-semibold text-text leading-snug line-clamp-2 my-1 [overflow-wrap:anywhere] break-words">
            {post.title}
          </h3>
        </div>

        <div className="pt-1 mt-auto">
          {post.status === 'soon' ? (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-accent/12 text-accent border border-accent/20 w-fit">
              {t.blog?.comingSoon || 'Coming Soon'}
            </span>
          ) : (
            <span className="text-[11.5px] text-muted">
              {post.date} · {post.readTime}
            </span>
          )}
        </div>
      </div>
    </>
  );
}

export default BlogSection;
