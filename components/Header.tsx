'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-dark-border/50 bg-dark-bg/80 backdrop-blur-md">
      <nav className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        {/* ロゴ */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-purple to-neon-cyan flex items-center justify-center font-orbitron font-bold text-lg group-hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300">
            Sy
          </div>
          <span className="hidden sm:inline font-orbitron font-bold text-lg glow-text">
            SyFu Guide
          </span>
        </Link>

        {/* デスクトップナビ */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#about"
            className="text-slate-300 hover:text-neon-cyan transition-colors duration-200"
          >
            ゲーム概要
          </Link>
          <Link
            href="#guide"
            className="text-slate-300 hover:text-neon-cyan transition-colors duration-200"
          >
            攻略ガイド
          </Link>
          <Link
            href="#faq"
            className="text-slate-300 hover:text-neon-cyan transition-colors duration-200"
          >
            FAQ
          </Link>
          <a
            href="https://docs.syfu.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-neon-cyan transition-colors duration-200"
          >
            公式Docs
          </a>
        </div>

        {/* CTA ボタン */}
        <div className="hidden sm:block">
          <a
            href="#referral"
            className="btn-cta text-sm"
          >
            リファコード取得
          </a>
        </div>

        {/* モバイルメニュー */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-neon-cyan hover:text-neon-purple transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* モバイルメニュー展開 */}
      {isOpen && (
        <div className="md:hidden border-t border-dark-border/50 bg-dark-surface/50 backdrop-blur-sm">
          <div className="px-4 py-4 space-y-3">
            <a href="#about" className="block text-slate-300 hover:text-neon-cyan">
              ゲーム概要
            </a>
            <a href="#guide" className="block text-slate-300 hover:text-neon-cyan">
              攻略ガイド
            </a>
            <a href="#faq" className="block text-slate-300 hover:text-neon-cyan">
              FAQ
            </a>
            <a href="https://docs.syfu.io" target="_blank" rel="noopener noreferrer" className="block text-slate-300 hover:text-neon-cyan">
              公式Docs
            </a>
            <a href="#referral" className="block btn-cta text-center text-sm">
              リファコード取得
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
