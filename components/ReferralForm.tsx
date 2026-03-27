'use client';

import { useState, useEffect } from 'react';
import { referralUtils, validateReferralCode } from '@/lib/utils';

const ACTIVATION_CODE = 'FoHcVDPS'; // アクティベーションコード（必須）

export function ReferralForm() {
  const [code, setCode] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [activationCopied, setActivationCopied] = useState(false);
  const [savedCode, setSavedCode] = useState('');

  useEffect(() => {
    const saved = referralUtils.getReferralCode();
    if (saved) {
      setSavedCode(saved);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setCode(value);
    setIsValid(validateReferralCode(value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      referralUtils.saveReferralCode(code);
      setSavedCode(code);
      setCode('');
      setIsValid(false);
      
      alert(`✅ リファコード「${code}」を保存しました！\nゲームプレイ時に使用してください。`);
    }
  };

  const handleCopy = async (text: string, type: 'referral' | 'activation') => {
    const success = await referralUtils.copyToClipboard(text);
    if (success) {
      if (type === 'referral') {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } else {
        setActivationCopied(true);
        setTimeout(() => setActivationCopied(false), 2000);
      }
    }
  };

  return (
    <div id="referral" className="w-full max-w-3xl mx-auto px-4">
      <div className="space-y-6">
        {/* =====================================
            最優先：アクティベーションコード
            ===================================== */}
        <div className="relative p-8 md:p-10 rounded-xl border-2 border-neon-pink/60 bg-gradient-to-br from-neon-pink/15 to-neon-purple/5 shadow-[0_0_40px_rgba(236,72,153,0.3)]">
          {/* バッジ */}
          <div className="absolute -top-4 left-6 bg-gradient-to-r from-neon-pink to-neon-purple px-4 py-1 rounded-full">
            <span className="text-xs font-bold text-white uppercase tracking-widest">
              🚀 必須！
            </span>
          </div>

          <div className="space-y-4">
            <div className="pt-2">
              <h3 className="text-2xl md:text-3xl font-orbitron font-bold mb-2">
                <span className="text-neon-pink">アクティベーションコード</span>
              </h3>
              <p className="text-slate-300">
                これを入力しないとゲームをプレイできません。アプリダウンロード後、真っ先にコピー＆ペースト！
              </p>
            </div>

            {/* コード表示 */}
            <div className="flex items-center justify-between gap-4 p-4 rounded-lg bg-dark-surface/80 border border-neon-pink/30 hover:border-neon-pink/60 transition-all">
              <div className="flex-1">
                <p className="text-xs text-slate-500 mb-1 uppercase tracking-wider font-bold">
                  コード
                </p>
                <code className="font-orbitron text-2xl md:text-3xl text-neon-pink font-bold tracking-widest">
                  {ACTIVATION_CODE}
                </code>
              </div>
              <button
                onClick={() => handleCopy(ACTIVATION_CODE, 'activation')}
                className="flex-shrink-0 px-6 py-4 bg-gradient-to-r from-neon-pink to-neon-purple hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] rounded-lg font-bold text-white transition-all duration-200 text-sm md:text-base"
              >
                {activationCopied ? '✓ コピー済み' : 'コピー'}
              </button>
            </div>

            {/* 使用方法 */}
            <div className="grid md:grid-cols-3 gap-3 text-sm">
              <div className="flex gap-3 p-3 rounded-lg bg-dark-surface/50">
                <span className="text-neon-pink font-bold text-lg flex-shrink-0">①</span>
                <p className="text-slate-400">アプリをダウンロード</p>
              </div>
              <div className="flex gap-3 p-3 rounded-lg bg-dark-surface/50">
                <span className="text-neon-pink font-bold text-lg flex-shrink-0">②</span>
                <p className="text-slate-400">このコードをコピー</p>
              </div>
              <div className="flex gap-3 p-3 rounded-lg bg-dark-surface/50">
                <span className="text-neon-pink font-bold text-lg flex-shrink-0">③</span>
                <p className="text-slate-400">アプリで貼り付け＆実行</p>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================
            リファコード（オプション：友達を招待）
            ===================================== */}
        <div className="glow-box glow-box-hover rounded-xl p-8 md:p-10">
          {/* ヘッダー */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-orbitron font-bold mb-3">
              <span className="glow-text">リファコード</span>で友達を招待
            </h2>
            <p className="text-slate-300 text-sm md:text-base">
              あなたの紹介コードを作成。友達が登録時に入力すると、あなたも友達も報酬をゲット！
            </p>
          </div>

          {/* 保存済みコード表示 */}
          {savedCode && (
            <div className="mb-8 p-4 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30">
              <p className="text-sm text-slate-400 mb-3">💾 保存済みリファコード</p>
              <div className="flex items-center justify-between gap-4">
                <code className="font-mono text-lg text-neon-cyan break-all font-bold">
                  {savedCode}
                </code>
                <button
                  onClick={() => handleCopy(savedCode, 'referral')}
                  className="px-4 py-2 bg-neon-cyan/20 hover:bg-neon-cyan/30 border border-neon-cyan/50 rounded-lg text-neon-cyan font-bold whitespace-nowrap transition-all duration-200"
                >
                  {isCopied ? '✓ コピー済み' : 'コピー'}
                </button>
              </div>
            </div>
          )}

          {/* フォーム */}
          <form onSubmit={handleSubmit} className="space-y-4 mb-8">
            <div>
              <label htmlFor="code" className="block text-sm font-bold text-slate-300 mb-2">
                あなたのリファコード（紹介コード）
              </label>
              <input
                type="text"
                id="code"
                value={code}
                onChange={handleChange}
                placeholder="例: syfu_user_abc123"
                className="ref-input"
                minLength={3}
                maxLength={50}
              />
              {code && !isValid && (
                <p className="text-sm text-neon-pink mt-2">
                  ⚠️ 英数字、ハイフン、アンダースコアのみ使用可能（3～50文字）
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={!isValid || code === savedCode}
              className="w-full btn-cta disabled:opacity-50 disabled:cursor-not-allowed"
            >
              リファコードを保存
            </button>
          </form>

          {/* 情報パネル */}
          <div className="grid md:grid-cols-2 gap-4 p-4 bg-dark-surface/50 rounded-lg border border-dark-border">
            <div>
              <p className="text-xs font-bold text-neon-purple uppercase tracking-wider mb-3">
                🎁 あなたがもらえる報酬
              </p>
              <ul className="text-sm text-slate-300 space-y-2">
                <li>✓ 招待ボーナス（EVT）</li>
                <li>✓ レベルアップボーナス</li>
                <li>✓ エクスクルーシブアイテム</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold text-neon-cyan uppercase tracking-wider mb-3">
                👥 友達がもらえる報酬
              </p>
              <ul className="text-sm text-slate-300 space-y-2">
                <li>✓ 登録ボーナス（EVT）</li>
                <li>✓ スターターパック</li>
                <li>✓ 継続ボーナス</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
