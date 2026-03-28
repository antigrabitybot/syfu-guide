'use client';

import { referralUtils } from '@/lib/utils';

interface ShareButtonsProps {
  title?: string;
  className?: string;
}

export function ShareButtons({ className = '' }: ShareButtonsProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      <p className="text-sm font-bold text-slate-300 uppercase tracking-wider">
        📢 SNSで共有
      </p>

      <div className="flex flex-wrap gap-3">
        {/* Twitter */}
        <a
          href={referralUtils.getShareUrl('twitter')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 rounded-lg border border-dark-border hover:border-neon-cyan/50 bg-dark-surface/50 hover:bg-dark-surface text-slate-300 hover:text-neon-cyan transition-all duration-200"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z" />
          </svg>
          <span className="text-sm font-bold">X（Twitter）</span>
        </a>

        {/* LINE */}
        <a
          href={referralUtils.getShareUrl('line')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 rounded-lg border border-dark-border hover:border-neon-lime/50 bg-dark-surface/50 hover:bg-dark-surface text-slate-300 hover:text-neon-lime transition-all duration-200"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.365 9.863c.349 0 .63.281.63.63 0 .344-.281.625-.63.625H4.634c-.348 0-.63-.281-.63-.625 0-.349.282-.63.63-.63zm0 5.25h-5.13v3.521c0 .348-.281.63-.63.63-.344 0-.625-.282-.625-.63v-3.521H7.88c-.349 0-.63-.281-.63-.625 0-.344.281-.625.63-.625h5.13V10.488c0-.349.281-.63.625-.63.349 0 .63.281.63.63v4.625zm0-8.5H4.634c-2.034 0-3.68 1.645-3.68 3.68v5.13c0 2.034 1.646 3.68 3.68 3.68h14.731c2.034 0 3.68-1.646 3.68-3.68v-5.13c0-2.035-1.646-3.68-3.68-3.68z" />
          </svg>
          <span className="text-sm font-bold">LINE</span>
        </a>

        {/* メール */}
        <a
          href={referralUtils.getMailUrl()}
          className="flex items-center gap-2 px-4 py-3 rounded-lg border border-dark-border hover:border-neon-pink/50 bg-dark-surface/50 hover:bg-dark-surface text-slate-300 hover:text-neon-pink transition-all duration-200"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
          <span className="text-sm font-bold">メール</span>
        </a>
      </div>
    </div>
  );
}
