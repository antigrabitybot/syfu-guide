'use client';

export function Footer() {
  return (
    <footer className="relative border-t border-dark-border/50 bg-dark-surface/50 backdrop-blur-sm mt-20">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* フッターコンテンツ */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* ブランド */}
          <div>
            <h3 className="font-orbitron font-bold text-neon-cyan mb-4">SyFu</h3>
            <p className="text-sm text-slate-400">
              GameFi Payment Data Platform - ゲーム内の取引をブロックチェーン上で管理
            </p>
          </div>

          {/* 公式リンク */}
          <div>
            <h4 className="font-bold text-slate-300 mb-4">公式サイト</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://syfu.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-neon-cyan transition-colors"
                >
                  メインサイト
                </a>
              </li>
              <li>
                <a
                  href="https://syfu.io/product"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-neon-cyan transition-colors"
                >
                  ゲーム
                </a>
              </li>
              <li>
                <a
                  href="https://docs.syfu.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-neon-cyan transition-colors"
                >
                  GitBook Docs
                </a>
              </li>
            </ul>
          </div>

          {/* コミュニティ */}
          <div>
            <h4 className="font-bold text-slate-300 mb-4">コミュニティ</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://twitter.com/syfuofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-neon-cyan transition-colors"
                >
                  X（Twitter）
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@syfu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-neon-cyan transition-colors"
                >
                  Medium
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/syfuofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-neon-cyan transition-colors"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/syfupj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-neon-cyan transition-colors"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>

          {/* サポート */}
          <div>
            <h4 className="font-bold text-slate-300 mb-4">リソース</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://hub.xyz/syfu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-neon-cyan transition-colors"
                >
                  Hub（全リンク）
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/1WqmCv53QlwY8erA3G-8f27FY_7Q0gWFzn7rCJ_hVR80/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-neon-cyan transition-colors"
                >
                  White Paper
                </a>
              </li>
              <li>
                <a
                  href="https://pancakeswap.finance/swap?inputCurrency=0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d&outputCurrency=0x73b895dA1197403B8FBbb179633Ec3Fd526B2fd5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-neon-cyan transition-colors"
                >
                  EVT 取引所
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 区切り線 */}
        <div className="border-t border-dark-border/30 pt-8 mb-8" />

        {/* コピーライト */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; 2024 SyFu Community. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">
              プライバシーポリシー
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              利用規約
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              お問い合わせ
            </a>
          </div>
        </div>

        {/* 公式注意文 */}
        <div className="mt-8 p-4 rounded-lg bg-neon-pink/5 border border-neon-pink/20">
          <p className="text-xs text-slate-400">
            ⚠️ <strong>重要:</strong> このサイトは有志コミュニティにより作成されました。投資判断はご自身の責任でお願いします。公式情報は{' '}
            <a href="https://syfu.io" className="text-neon-pink hover:underline">
              syfu.io
            </a>{' '}
            をご確認ください。
          </p>
        </div>
      </div>
    </footer>
  );
}
