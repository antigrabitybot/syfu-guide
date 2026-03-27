import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ReferralForm } from '@/components/ReferralForm';
import { ShareButtons } from '@/components/ShareButtons';
import { Section, FeatureCard, StepCard } from '@/components/Section';

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-bg text-slate-100">
      <Header />

      {/* ========================
          ヒーロー セクション
          ======================== */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden">
        {/* アニメーション背景 */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-neon-purple/10 blur-3xl opacity-50" />
          <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-neon-cyan/5 blur-3xl opacity-30" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            {/* メインタイトル */}
            <h1 className="text-5xl md:text-7xl font-orbitron font-bold leading-tight">
              <span className="glow-text">SyFu</span> へようこそ
            </h1>

            {/* サブタイトル */}
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              🎮 <strong>ゲーム内の取引データ</strong>をブロックチェーン上で安全に管理。
              <br />
              🚀 <strong>GameFi革命</strong>の最前線で、友達と一緒にプレイして報酬をゲット！
            </p>

            {/* CTA ボタン */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a
                href="#referral"
                className="btn-cta text-center text-lg py-4"
              >
                🔓 アクティベーションコード取得
              </a>
              <a
                href="https://syfu.io/product"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-lg border-2 border-neon-cyan text-neon-cyan font-bold hover:bg-neon-cyan/10 transition-all duration-300 text-lg"
              >
                ゲームをプレイ →
              </a>
            </div>

            {/* 統計情報 */}
            <div className="grid md:grid-cols-3 gap-4 pt-12 max-w-2xl mx-auto">
              <div className="card-glass">
                <div className="text-3xl font-bold text-neon-purple mb-2">10K+</div>
                <p className="text-sm text-slate-400">アクティブユーザー</p>
              </div>
              <div className="card-glass">
                <div className="text-3xl font-bold text-neon-cyan mb-2">$50K+</div>
                <p className="text-sm text-slate-400">取引高</p>
              </div>
              <div className="card-glass">
                <div className="text-3xl font-bold text-neon-pink mb-2">24/7</div>
                <p className="text-sm text-slate-400">サポート</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================
          ゲーム詳細セクション
          ======================== */}
      <Section
        id="game-details"
        title="SyFuゲームって何？"
        subtitle="日常の買い物がゲームになる。次世代GameFi"
      >
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-neon-cyan">ゲームの流れ</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-neon-purple/20 border border-neon-purple flex items-center justify-center flex-shrink-0 font-bold text-neon-purple">
                  ①
                </div>
                <div>
                  <p className="font-bold text-slate-200">Check-in</p>
                  <p className="text-sm text-slate-400">カフェやコンビニなど、利用するお店でチェックイン</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-neon-cyan/20 border border-neon-cyan flex items-center justify-center flex-shrink-0 font-bold text-neon-cyan">
                  ②
                </div>
                <div>
                  <p className="font-bold text-slate-200">Payment</p>
                  <p className="text-sm text-slate-400">いつも通りお支払い（カード・電子決済）</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-neon-pink/20 border border-neon-pink flex items-center justify-center flex-shrink-0 font-bold text-neon-pink">
                  ③
                </div>
                <div>
                  <p className="font-bold text-slate-200">BIND</p>
                  <p className="text-sm text-slate-400">支払い記録をゲームに連動させる</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-neon-lime/20 border border-neon-lime flex items-center justify-center flex-shrink-0 font-bold text-neon-lime">
                  ④
                </div>
                <div>
                  <p className="font-bold text-slate-200">Growth & Rewards</p>
                  <p className="text-sm text-slate-400">キャラ成長 + EVTトークン報酬獲得</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-neon-cyan">なぜ稼げるのか？</h3>
            <div className="space-y-3">
              <div className="p-4 rounded-lg bg-dark-surface/50 border border-dark-border">
                <p className="font-bold text-neon-purple mb-2">🔗 ブロックチェーン記録</p>
                <p className="text-sm text-slate-400">あなたの支払い記録がブロックチェーンに記録される = 改ざん不可</p>
              </div>
              <div className="p-4 rounded-lg bg-dark-surface/50 border border-dark-border">
                <p className="font-bold text-neon-purple mb-2">💰 経済ループ</p>
                <p className="text-sm text-slate-400">プレイヤーの消費 → システム手数料 → EVT報酬配分</p>
              </div>
              <div className="p-4 rounded-lg bg-dark-surface/50 border border-dark-border">
                <p className="font-bold text-neon-purple mb-2">🎮 ゲーム性</p>
                <p className="text-sm text-slate-400">キャラ成長 + NFT育成 + 取引 = やりがい無限</p>
              </div>
              <div className="p-4 rounded-lg bg-dark-surface/50 border border-dark-border">
                <p className="font-bold text-neon-purple mb-2">📈 複利効果</p>
                <p className="text-sm text-slate-400">友達招待 + キャラ拡張 = 報酬加速</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ========================
          MANEKINEKO NFT セクション
          ======================== */}
      <Section
        id="nft"
        title="MANEKINEKO NFT"
        subtitle="あなたが育てるパートナー。成長するほど稼げる。"
        className="bg-gradient-to-b from-transparent via-dark-surface/20 to-transparent"
      >
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-neon-cyan mb-6">MANEKINEKO とは？</h3>
            <div className="space-y-4 text-slate-300">
              <p>
                MANEKINEKO は、SyFu ゲームにおける<strong>メインキャラクター</strong>です。
              </p>
              <p>
                あなたが毎日お店でチェック-インし、支払い記録をBINDすることで、MANEKINEKO が成長します。
              </p>
              <p className="text-neon-cyan font-bold">
                成長 → 報酬獲得 → さらに成長 → 繁殖
              </p>
              <p>
                という無限ループが実現します。
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-neon-cyan mb-6">成長ステージ</h3>
            <div className="space-y-3">
              <div className="card-glass">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🥚</div>
                  <div>
                    <p className="font-bold text-neon-cyan">Pod</p>
                    <p className="text-sm text-slate-400">初期段階。EXP を集める</p>
                  </div>
                </div>
              </div>
              <div className="card-glass">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🐱</div>
                  <div>
                    <p className="font-bold text-neon-cyan">Mini (Lv 3以上)</p>
                    <p className="text-sm text-slate-400">報酬獲得開始 → EVT がもらえる</p>
                  </div>
                </div>
              </div>
              <div className="card-glass">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">👑</div>
                  <div>
                    <p className="font-bold text-neon-cyan">Prime (Lv 10以上)</p>
                    <p className="text-sm text-slate-400">完全体。繁殖機能 Unlock → 新しい NFT 作成可能</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NFT 機能 */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-neon-cyan mb-6 text-center">MANEKINEKO でできること</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="card-glass">
              <p className="text-3xl mb-3">🌱</p>
              <p className="font-bold text-neon-cyan mb-2">成長させる</p>
              <p className="text-sm text-slate-400">毎日チェックイン + BIND でレベルアップ</p>
            </div>
            <div className="card-glass">
              <p className="text-3xl mb-3">💎</p>
              <p className="font-bold text-neon-cyan mb-2">報酬獲得</p>
              <p className="text-sm text-slate-400">Mini 段階以上で EVT 報酬スタート</p>
            </div>
            <div className="card-glass">
              <p className="text-3xl mb-3">👨‍👩‍👧</p>
              <p className="font-bold text-neon-cyan mb-2">繁殖させる</p>
              <p className="text-sm text-slate-400">Prime 段階で新しい NFT を生成可能</p>
            </div>
            <div className="card-glass">
              <p className="text-3xl mb-3">🏪</p>
              <p className="font-bold text-neon-cyan mb-2">売買できる</p>
              <p className="text-sm text-slate-400">マーケットプレイスで他のプレイヤーと取引</p>
            </div>
          </div>
        </div>
      </Section>
      <Section id="about" title="SyFuの特徴" subtitle="GameFiの次世代プラットフォーム">
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon="🔐"
            title="ブロックチェーン"
            description="ゲーム内すべての取引をブロックチェーン上に記録。透明で改ざん不可能。"
          />
          <FeatureCard
            icon="💰"
            title="報酬システム"
            description="プレイするたび、取引するたび報酬獲得。EVTトークンで稼げます。"
          />
          <FeatureCard
            icon="👥"
            title="リファコード機能"
            description="友達を招待して報酬GET。プレイしながら収入を増やしましょう。"
          />
          <FeatureCard
            icon="📱"
            title="iOS/Android対応"
            description="スマートフォンでいつでもどこでもプレイ可能。通勤・通学時間も有効活用。"
          />
          <FeatureCard
            icon="🎮"
            title="楽しくプレイ"
            description="ゲーム性と報酬を両立。ゲーム好きなら絶対ハマる。"
          />
          <FeatureCard
            icon="🌍"
            title="グローバルコミュニティ"
            description="世界中のプレイヤーと繋がる。Discord・Telegramで24時間サポート。"
          />
        </div>
      </Section>

      {/* ========================
          EVT トークン解説
          ======================== */}
      <Section
        id="evt-token"
        title="EVT トークン"
        subtitle="SyFuでの報酬。稼ぐ・貯める・売る・増やす。"
      >
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="card-glass">
            <p className="text-4xl font-bold text-neon-purple mb-4">📊</p>
            <h4 className="text-lg font-bold text-neon-cyan mb-3">EVT とは？</h4>
            <p className="text-sm text-slate-300">
              SyFu ゲーム内での報酬トークン。あなたの遊びが報酬に変わります。
            </p>
          </div>

          <div className="card-glass">
            <p className="text-4xl font-bold text-neon-cyan mb-4">💰</p>
            <h4 className="text-lg font-bold text-neon-cyan mb-3">どうやって稼ぐ？</h4>
            <ul className="text-sm text-slate-300 space-y-2">
              <li>✓ 毎日チェック-イン</li>
              <li>✓ BIND 成功</li>
              <li>✓ マイニング</li>
              <li>✓ 友達招待</li>
            </ul>
          </div>

          <div className="card-glass">
            <p className="text-4xl font-bold text-neon-pink mb-4">🔄</p>
            <h4 className="text-lg font-bold text-neon-cyan mb-3">何に使える？</h4>
            <ul className="text-sm text-slate-300 space-y-2">
              <li>✓ 仮想通貨に売却</li>
              <li>✓ 日本円に両替</li>
              <li>✓ ゲーム内で使用</li>
              <li>✓ ブリード（繁殖）</li>
            </ul>
          </div>
        </div>

        {/* EVT 取引情報 */}
        <div className="bg-dark-surface/50 border border-dark-border rounded-xl p-8">
          <h3 className="text-2xl font-bold text-neon-cyan mb-6">EVT はどこで売る？</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-neon-purple mb-4 flex items-center gap-2">
                <span className="text-2xl">🥞</span> PancakeSwap
              </h4>
              <div className="space-y-3 text-sm">
                <p className="text-slate-300">
                  <strong className="text-neon-cyan">おすすめ度:</strong> ★★★★★
                </p>
                <p className="text-slate-400">
                  スワップ機能で EVT を BNB に交換 → BUSD に交換 → 日本円化
                </p>
                <p className="text-slate-500">手数料: 約 0.3%（業界最安）</p>
                <a
                  href="https://pancakeswap.finance/swap?inputCurrency=0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d&outputCurrency=0x73b895dA1197403B8FBbb179633Ec3Fd526B2fd5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-2 bg-neon-purple/20 hover:bg-neon-purple/30 border border-neon-purple/50 rounded text-neon-purple transition-all"
                >
                  PancakeSwap へ
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-neon-purple mb-4 flex items-center gap-2">
                <span className="text-2xl">📈</span> DexScreener
              </h4>
              <div className="space-y-3 text-sm">
                <p className="text-slate-300">
                  <strong className="text-neon-cyan">おすすめ度:</strong> ★★★★☆
                </p>
                <p className="text-slate-400">
                  リアルタイムチャート表示。詳細な売却価格設定が可能
                </p>
                <p className="text-slate-500">価格追跡・分析に最適</p>
                <a
                  href="https://dexscreener.com/bsc/0x73b895dA1197403B8FBbb179633Ec3Fd526B2fd5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-2 bg-neon-purple/20 hover:bg-neon-purple/30 border border-neon-purple/50 rounded text-neon-purple transition-all"
                >
                  DexScreener へ
                </a>
              </div>
            </div>
          </div>

          {/* CA 表示 */}
          <div className="mt-8 p-4 rounded-lg bg-dark-bg/50 border border-neon-cyan/30">
            <p className="text-xs text-slate-400 mb-2 uppercase tracking-wider font-bold">
              EVT コントラクトアドレス
            </p>
            <code className="font-mono text-neon-cyan break-all">
              0x73b895dA1197403B8FBbb179633Ec3Fd526B2fd5
            </code>
          </div>
        </div>
      </Section>

      {/* ========================
          NFT パラメータ＆ステータス
          ======================== */}
      <Section
        id="nft-parameters"
        title="MANEKINEKO のパラメータ"
        subtitle="4つのコアパラメータがあなたの NFT の強さを決定"
        className="bg-gradient-to-b from-transparent via-dark-surface/20 to-transparent"
      >
        <div className="space-y-8">
          {/* パラメータ説明 */}
          <div>
            <h3 className="text-2xl font-bold text-neon-cyan mb-6">4つのコアパラメータ</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-glass">
                <p className="font-bold text-neon-purple mb-3 flex items-center gap-2">
                  <span className="text-2xl">💎</span> Charm（魅力）
                </p>
                <p className="text-sm text-slate-400">
                  トークン獲得効率（Econ / EVT）に影響します。高いほど報酬がより多く獲得できます。
                </p>
              </div>

              <div className="card-glass">
                <p className="font-bold text-neon-purple mb-3 flex items-center gap-2">
                  <span className="text-2xl">🍀</span> Luck（幸運）
                </p>
                <p className="text-sm text-slate-400">
                  アイテムボックス（Lucky Bag）のドロップ率に影響します。高いほどレアアイテムが手に入りやすい。
                </p>
              </div>

              <div className="card-glass">
                <p className="font-bold text-neon-purple mb-3 flex items-center gap-2">
                  <span className="text-2xl">🔧</span> Durability（耐久性）
                </p>
                <p className="text-sm text-slate-400">
                  ライフスパン消費量とメンテナンス間隔に影響します。高いほどメンテナンスの頻度が少なくなります。
                </p>
              </div>

              <div className="card-glass">
                <p className="font-bold text-neon-purple mb-3 flex items-center gap-2">
                  <span className="text-2xl">💕</span> Bond（愛着度）
                </p>
                <p className="text-sm text-slate-400">
                  使用を続けることで増加します。再販時にはリセットされます。将来の拡張機能で活躍予定。
                </p>
              </div>
            </div>
          </div>

          {/* Pararank と Elite */}
          <div className="bg-dark-surface/50 border border-dark-border rounded-xl p-8">
            <h3 className="text-2xl font-bold text-neon-cyan mb-6">パラランク＆エリートステータス</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-neon-cyan mb-4">🏆 Pararank（P0～P4）</h4>
                <p className="text-sm text-slate-300 mb-4">
                  各 NFT の総合ランク。上位ランクほど獲得効率が向上します。
                </p>
                <ul className="text-sm text-slate-400 space-y-2">
                  <li><strong className="text-neon-purple">P4:</strong> 最強ランク</li>
                  <li><strong className="text-neon-purple">P3:</strong> 優秀</li>
                  <li><strong className="text-neon-purple">P2:</strong> 標準</li>
                  <li><strong className="text-neon-purple">P1:</strong> 初心者向け</li>
                  <li><strong className="text-neon-purple">P0:</strong> 初期段階</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-neon-cyan mb-4">👑 Elite（エリート）</h4>
                <p className="text-sm text-slate-300 mb-4">
                  特定の条件で NFT がエリート昇格。強力な遺伝子を次世代に受け継ぎます。
                </p>
                <div className="space-y-3 text-sm text-slate-400">
                  <p><strong className="text-neon-purple">条件:</strong> White Taiyaki 使用時に 50% の確率</p>
                  <p><strong className="text-neon-purple">効果:</strong> 最大3世代の子供が Pararank を継承可能</p>
                  <p className="text-xs text-slate-500">※孫世代で Pararank はリセット</p>
                </div>
              </div>
            </div>
          </div>

          {/* HP & Lifespan */}
          <div className="bg-dark-surface/50 border border-dark-border rounded-xl p-8">
            <h3 className="text-2xl font-bold text-neon-cyan mb-6">HP & Lifespan（重要な指標）</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-neon-purple mb-4 flex items-center gap-2">
                  <span className="text-2xl">❤️</span> HP（短期指標）
                </h4>
                <p className="text-sm text-slate-300 mb-4">
                  チェックイン時に消費される短期的な指標。
                </p>
                <ul className="text-sm text-slate-400 space-y-1">
                  <li>✓ 毎回のチェックインで消費</li>
                  <li>✓ ゲーム内アクションで回復</li>
                  <li>✓ ゲーム継続に必須</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-neon-purple mb-4 flex items-center gap-2">
                  <span className="text-2xl">⏳</span> Lifespan（長期指標）
                </h4>
                <p className="text-sm text-slate-300 mb-4">
                  EVT 獲得に応じて消費される長期的な指標。
                </p>
                <ul className="text-sm text-slate-400 space-y-1">
                  <li>✓ EVT 獲得で消費</li>
                  <li>✓ ゲーム内アクションで回復</li>
                  <li>✓ ゲーム継続に不可欠</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ========================
          ブリード（繁殖）機能
          ======================== */}
      <Section
        id="breeding"
        title="ブリード"
        subtitle="Prime キャラを組み合わせて新しい NFT を生成"
      >
        <div className="space-y-8">
          {/* ブリードとは */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-neon-cyan mb-4">ブリードって何？</h3>
              <p className="text-slate-300 mb-6">
                Prime ステージに達した MANEKINEKO 2体を組み合わせて、<strong>新しいMANEKINEKO を生成</strong>する機能です。
              </p>
              <p className="text-slate-300 mb-6">
                親のパラメータや遺伝子が子に受け継がれるため、<strong>計画的に育成すれば超強いキャラが誕生</strong>します。
              </p>
              <div className="p-4 rounded-lg bg-neon-purple/10 border border-neon-purple/30">
                <p className="text-sm font-bold text-neon-purple mb-2">🔥 重要</p>
                <p className="text-sm text-slate-300">
                  ブリードには Econ / EVT が必要です。つまり、<strong>経済貢献を通じて新しい NFT が生まれる</strong>仕組み。
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-neon-cyan mb-4">ブリードの流れ</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-neon-purple/20 border border-neon-purple flex items-center justify-center flex-shrink-0 font-bold text-neon-purple text-sm">
                    1
                  </div>
                  <div>
                    <p className="font-bold text-slate-200">Prime に到達</p>
                    <p className="text-sm text-slate-400">2体とも Lv 10以上が条件</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-neon-cyan/20 border border-neon-cyan flex items-center justify-center flex-shrink-0 font-bold text-neon-cyan text-sm">
                    2
                  </div>
                  <div>
                    <p className="font-bold text-slate-200">コストを支払う</p>
                    <p className="text-sm text-slate-400">Econ / EVT を消費（個数未公開）</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-neon-pink/20 border border-neon-pink flex items-center justify-center flex-shrink-0 font-bold text-neon-pink text-sm">
                    3
                  </div>
                  <div>
                    <p className="font-bold text-slate-200">新しい NFT 誕生</p>
                    <p className="text-sm text-slate-400">親の遺伝子を受け継いだ子が誕生</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-neon-lime/20 border border-neon-lime flex items-center justify-center flex-shrink-0 font-bold text-neon-lime text-sm">
                    4
                  </div>
                  <div>
                    <p className="font-bold text-slate-200">親も育成継続</p>
                    <p className="text-sm text-slate-400">親はそのままプレイ継続可能</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ブリード戦略 */}
          <div className="bg-dark-surface/50 border border-dark-border rounded-xl p-8">
            <h3 className="text-2xl font-bold text-neon-cyan mb-6">ブリード戦略</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card-glass">
                <p className="font-bold text-neon-purple mb-3">🎯 パラメータ最適化</p>
                <p className="text-sm text-slate-400">
                  STR 高い親 × INT 高い親 → バランス型の子が誕生。目的に合わせて計画育成。
                </p>
              </div>

              <div className="card-glass">
                <p className="font-bold text-neon-purple mb-3">📈 系統育成</p>
                <p className="text-sm text-slate-400">
                  優秀な系統を何世代も育てることで、独自の最強系統を確立。希少性アップ。
                </p>
              </div>

              <div className="card-glass">
                <p className="font-bold text-neon-purple mb-3">💎 マーケット価値</p>
                <p className="text-sm text-slate-400">
                  高パラメータ ＋ 優秀系統 ＝ 高値で売却可能。稀少な子は市場で取引可能。
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-slate-500 p-4 rounded-lg bg-dark-surface/30">
            ⚠️ ブリード の詳細なルール＆確率は、メインネット ベータ版リリース時に公開予定です。
            <br />詳細は<a href="https://docs.syfu.io/breed/overview" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">GitBook</a>をご確認ください。
          </p>
        </div>
      </Section>

      {/* ========================
          コラボレーション＆NFTセール情報
          ======================== */}
      <Section
        id="collaborations"
        title="コラボレーション＆NFTセール"
        subtitle="SyFu の過去・現在・未来のプロジェクト情報"
      >
        <div className="space-y-8">
          {/* 説明 */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-slate-300 mb-6">
              SyFu は様々なプロジェクト・企業とのコラボレーション、定期的な NFT セール、限定イベントを開催しています。
            </p>
            <p className="text-slate-400 mb-6">
              最新情報は公式 Medium ブログで随時更新されます。
            </p>
          </div>

          {/* メディアム リンク */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href="https://medium.com/@syfu"
              target="_blank"
              rel="noopener noreferrer"
              className="card-glass group flex flex-col items-center justify-center py-8 cursor-pointer hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
            >
              <p className="text-5xl mb-4">📰</p>
              <h4 className="font-bold text-neon-cyan mb-2 text-center">
                SyFu Official Medium
              </h4>
              <p className="text-sm text-slate-400 text-center">
                最新ニュース・コラボ情報・セール告知
              </p>
              <p className="text-xs text-neon-purple mt-4 font-bold">
                → クリックして Medium を開く
              </p>
            </a>

            <div className="card-glass flex flex-col items-center justify-center py-8">
              <p className="text-5xl mb-4">🎯</p>
              <h4 className="font-bold text-neon-cyan mb-2 text-center">
                情報更新
              </h4>
              <p className="text-sm text-slate-400 text-center">
                毎週複数の記事が投稿されます
              </p>
              <p className="text-xs text-slate-500 mt-4">
                フォロー推奨！
              </p>
            </div>
          </div>

          {/* 情報カテゴリ */}
          <div className="bg-dark-surface/50 border border-dark-border rounded-xl p-8">
            <h3 className="text-2xl font-bold text-neon-cyan mb-6 text-center">
              Medium で読める情報
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-bold text-neon-purple mb-4">📢 コラボレーション</h4>
                <ul className="text-sm text-slate-400 space-y-2">
                  <li>✓ 企業パートナーシップ</li>
                  <li>✓ ブランドコラボ情報</li>
                  <li>✓ 限定 NFT 企画</li>
                  <li>✓ イベント開催告知</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-neon-purple mb-4">🎪 NFT セール</h4>
                <ul className="text-sm text-slate-400 space-y-2">
                  <li>✓ Genesis NFT セール</li>
                  <li>✓ Limited Edition 販売</li>
                  <li>✓ マーケットプレイス更新</li>
                  <li>✓ ホワイトリスト情報</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-neon-purple mb-4">📈 プロジェクト進捗</h4>
                <ul className="text-sm text-slate-400 space-y-2">
                  <li>✓ メインネット ベータ版情報</li>
                  <li>✓ 新機能ローンチ</li>
                  <li>✓ アップデート詳細</li>
                  <li>✓ ロードマップ更新</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-neon-purple mb-4">🌍 コミュニティ</h4>
                <ul className="text-sm text-slate-400 space-y-2">
                  <li>✓ AMA（質問会）開催</li>
                  <li>✓ コミュニティイベント</li>
                  <li>✓ ユーザー事例紹介</li>
                  <li>✓ 攻略ガイド</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 購読推奨 */}
          <div className="p-6 rounded-lg bg-gradient-to-r from-neon-purple/10 to-neon-cyan/10 border border-neon-purple/30">
            <p className="text-center text-slate-300">
              <strong className="text-neon-cyan">💡 おすすめ:</strong> Medium を<strong>フォロー</strong>すれば、最新情報がメールで届きます。
            </p>
            <p className="text-center text-sm text-slate-400 mt-2">
              セール開始や限定企画を見落とさないために、今すぐフォロー！
            </p>
          </div>
        </div>
      </Section>
      <Section
        id="guide"
        title="はじめ方ガイド"
        subtitle="3ステップで始められる。難しいことは一切なし。"
        className="bg-gradient-to-b from-transparent via-dark-surface/20 to-transparent"
      >
        <div className="space-y-6 max-w-3xl">
          <StepCard
            number={1}
            title="アプリをダウンロード"
            description="iOS または Android のアプリストアから「SyFu」を検索してダウンロード。無料で使えます。"
          />
          <StepCard
            number={2}
            title="登録してリファコード入力"
            description="アプリを開いて新規登録。このページで取得したリファコードを入力してボーナスGET！"
          />
          <StepCard
            number={3}
            title="ゲームをプレイして報酬獲得"
            description="ゲーム内でミッションクリア、アイテム取引、友達招待。すべてが報酬になります。"
          />
        </div>

        {/* ダウンロードボタン */}
        <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-2xl mx-auto">
          <a
            href="https://apps.apple.com/us/app/syfu-gamefi-payment-data/id6474672518"
            target="_blank"
            rel="noopener noreferrer"
            className="card-glass flex items-center justify-center gap-4 py-6 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.05 13.5c-.91 0-1.64.76-1.64 1.74s.73 1.74 1.64 1.74 1.64-.76 1.64-1.74-.73-1.74-1.64-1.74zM4.37 11h9.65c1.05 0 1.95-.85 1.95-1.9V6.06c0-1.05-.9-1.9-1.95-1.9H4.37C3.32 4.16 2.42 5.01 2.42 6.06v3.04c0 1.05.9 1.9 1.95 1.9zm13.68-9.36c1.41 0 2.56 1.15 2.56 2.56v15.48c0 1.41-1.15 2.56-2.56 2.56H3.76c-1.41 0-2.56-1.15-2.56-2.56V4.2c0-1.41 1.15-2.56 2.56-2.56h14.29z" />
            </svg>
            <div>
              <div className="font-bold">App Store</div>
              <div className="text-sm text-slate-400">iOS版</div>
            </div>
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=io.syfu"
            target="_blank"
            rel="noopener noreferrer"
            className="card-glass flex items-center justify-center gap-4 py-6 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.609-.914V2.728c0-.408.217-.785.609-.914zm16.959 1.64L6.514 12l14.054 8.546c.489.297.895.121.895-.469V3.923c0-.59-.406-.766-.895-.469zM3.609 1.814L13.792 12 3.609 22.186" />
            </svg>
            <div>
              <div className="font-bold">Google Play</div>
              <div className="text-sm text-slate-400">Android版</div>
            </div>
          </a>
        </div>
      </Section>

      {/* ========================
          リファコードセクション（重要！）
          ======================== */}
      <section className="relative py-20 md:py-28 px-4 bg-gradient-to-b from-dark-surface/30 to-transparent">
        <div className="mx-auto max-w-6xl">
          {/* スポットライト効果 */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-96 h-96 rounded-full bg-neon-purple/5 blur-3xl" />
          </div>

          <ReferralForm />

          {/* SNS共有 */}
          <div className="mt-16 max-w-2xl mx-auto">
            <ShareButtons title="SyFuを友達に紹介" />
          </div>
        </div>
      </section>

      {/* ========================
          FAQ
          ======================== */}
      <Section
        id="faq"
        title="よくある質問"
        subtitle="新規ユーザーの疑問をすべて解決"
      >
        <div className="space-y-4 max-w-3xl mx-auto">
          {[
            {
              q: '🚀 アクティベーションコードって何ですか？',
              a: 'SyFuをプレイするために絶対に必要なコード。アプリをインストール後、登録画面でこのコード（FoHcVDPS）を入力しないとゲームが始められません。',
            },
            {
              q: 'アクティベーションコードはどこに入力しますか？',
              a: 'アプリの登録画面に「Activation Code」または「アクティベーションコード」という入力欄があります。そこに「FoHcVDPS」をコピペして入力してください。',
            },
            {
              q: 'リファコードって何ですか？',
              a: 'あなたの紹介コード。友達がゲーム登録時にこのコードを入力すると、あなたも友達も報酬がもらえます。アクティベーションコードの後に入力します。',
            },
            {
              q: 'アクティベーションコードとリファコードの違いは？',
              a: '【アクティベーションコード】= ゲームプレイに必須（FoHcVDPS）\n【リファコード】= 友達招待で報酬をもらう（オプション、あなたが作成）',
            },
            {
              q: 'ゲームは本当に無料ですか？',
              a: 'はい、完全無料。課金なしでプレイできます。ただし早くレベルを上げたい場合は任意で課金できます。',
            },
            {
              q: 'EVTトークンって何ですか？',
              a: 'SyFuのゲーム内報酬トークン。ゲームでの活動で獲得でき、PancakeSwap や DexScreener で仮想通貨に換金できます。',
            },
            {
              q: 'PancakeSwapでEVTを取引できますか？',
              a: 'はい。PancakeSwap や DexScreener で取引可能。CA: 0x73b895dA1197403B8FBbb179633Ec3Fd526B2fd5',
            },
            {
              q: '日本語サポートはありますか？',
              a: '完備しています。Discord / Telegram で日本語コミュニティが24時間サポートしています。わからないことはすぐ質問できます。',
            },
            {
              q: 'このサイトは公式ですか？',
              a: 'いいえ、有志コミュニティが作成しました。公式情報は syfu.io をご確認ください。アクティベーションコードは公式から提供されたものです。',
            },
          ].map((item, idx) => (
            <details
              key={idx}
              className="card-glass group cursor-pointer"
              open={idx === 0 || idx === 1 || idx === 3}
            >
              <summary className="font-bold text-lg text-neon-cyan flex justify-between items-center">
                {item.q}
                <span className="group-open:rotate-180 transition-transform duration-300">
                  ▼
                </span>
              </summary>
              <p className="text-slate-400 mt-4 whitespace-pre-wrap">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* ========================
          最終CTA
          ======================== */}
      <section className="relative py-16 md:py-24 px-4 bg-gradient-to-b from-dark-surface/20 to-dark-bg">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold">
            <span className="glow-text">アクティベーションコードを取得</span>
          </h2>
          <p className="text-lg text-slate-300">
            コード入力 → アプリをダウンロード → ゲーム登録 → 遊び始める！
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a href="#referral" className="btn-cta text-lg py-4">
              コードを取得へ
            </a>
            <a
              href="https://docs.syfu.io"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg border-2 border-neon-cyan text-neon-cyan font-bold hover:bg-neon-cyan/10 transition-all duration-300 text-lg"
            >
              公式Docsを読む
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
