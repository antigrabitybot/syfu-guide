declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const referralUtils = {
  /**
   * リファコードをlocalStorageに保存
   */
  saveReferralCode: (code: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('syfu_referral_code', code);
      // GTMに送信（オプション）
      if (window.gtag) {
        window.gtag('event', 'referral_code_saved', {
          referral_code: code,
          timestamp: new Date().toISOString(),
        });
      }
    }
  },

  /**
   * localStorageからリファコードを取得
   */
  getReferralCode: () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('syfu_referral_code');
    }
    return null;
  },

  /**
   * リファコードをクリップボードにコピー
   */
  copyToClipboard: async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return false;
    }
  },

  /**
   * SNS共有URL生成
   */
  getShareUrl: (platform: 'twitter' | 'line' | 'facebook') => {
    const text =
      '🎮 SyFuは超面白いGameFi! ゲーム内取引がブロックチェーン上で管理される。紹介コードで特典ゲット!';
    const url = 'https://syfu-guide.vercel.app';

    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      line: `https://line.me/R/msg/text/${encodeURIComponent(`${text}\n${url}`)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    };

    return urls[platform];
  },

  /**
   * メールで共有
   */
  getMailUrl: () => {
    const subject = 'SyFuというGameFiプラットフォームを紹介します';
    const body =
      'こんにちは！SyFuというGameFiプラットフォームをご紹介します。ゲーム内の取引データがブロックチェーン上で管理される革新的なプロジェクトです。\n\nhttps://syfu-guide.vercel.app';

    return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  },
};

/**
 * バリデーション - リファコード形式チェック
 */
export const validateReferralCode = (code: string): boolean => {
  // 英数字とハイフン/アンダースコアのみ許可（最小3文字、最大50文字）
  const regex = /^[a-zA-Z0-9_-]{3,50}$/;
  return regex.test(code.trim());
};

/**
 * 取得元情報をセッションに保存（アナリティクス用）
 */
export const trackReferralSource = (source: string) => {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('syfu_referral_source', source);
  }
};
