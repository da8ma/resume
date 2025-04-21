# 職務経歴書

## 基本情報

|key|value|
|---|-----|
|名前| 山田涼(Ryo Yamada) |
|生年月日| 1995年10月20日 |
|居住地| 東京都 |
|最終学歴| 明治学院大学 法学部 法律学科 |


## 職歴概要・要約
ネットワークセキュリティ企業で 6 年に渡り、インフラエンジニアとして従事してきました。<br>
自社 UTM 製品のインシデント対応やバックエンドインフラの基盤更改を担当しました。<br>
また、NOC の新規立ち上げにも参画し、運用改善の功績により所属部署が「2021 年度上期 MVP」を獲得しました。<br>
今後はクラウドネイティブ環境の自動化及びセキュリティ領域を伸ばしていきたいと考えています。

## 得意なスキル・活かせる能力

- ミドルウェアを用いたネットワーク構築
   - リモート VPN 実装
   - eBGP を使用した顧客側 NW とキャリア網の接続・経路制御
- 検証業務を数多くこなしてきた関係で、新しい分野で手を動かすことに抵抗がない
- パブリッククラウド (AWS)
  - AWS VPN gateway を用いたハイブリッドクラウド構成

<div style="page-break-after: always;"></div>

### スキルセット

<!--
- 言語やフレームワークに限らないスキル。開発手法やプロセス、ツールなど
-->

| カテゴリ              | 種別          | 経験年数  | レベル |
|-----------------------|----------------|-----------|------------|
| プログラミング言語    | bash           | 2年       | - 調べながら作業が可能<br> - POSIX準拠を意識した開発が可能 |
|                       | Google App Script | 0.5年 | - 調べながら作業が可能<br> - 実運用で採用実績有り |
| Linux                 | CentOS        | 6年       | - 設計・構築まで可能 |
|                       | Ubuntu        | 3年       | - 調べながら構築が可能 |
| ミドルウェア          | [Shorewall](https://shorewall.org/) <br> (iptables base firewall)      | 6年<br>  | セキュアなゾーンの設計、<br>ファイアウォールルールの策定が可能 |
|                       | Quagga<br> (ルーティングデーモン)       | 6年 | - L2TP/IPsec、IPsec VPN構築を経験<br> - キャリア網とのBGP接続を経験<br> - トラブルシューティングが可能 |
|                       | strongSwan       | 4年 | - 一通りの機能は把握できている<br> - トラブルシューティングが可能 |
|                       | xl2tpd       | 4年 | - 一通りの機能は把握できている<br> - トラブルシューティングが可能 |
|                       | ldirectord (LVS)<br> (L4ロードバランサー) | 4年  | 一通りの機能は把握できている |
|                       | Snort <br> (IDS/IPS)      | 2年<br>  | - Cisco Talos Intelligence Group提供のシグネチャセットを活用したIDS/IPS運用を経験 |
|                       | BIND       | 2年<br>  | - キャッシュ、権威DNSの運用を経験 |
|                       | Pacemaker       | 1年<br>  | - 調べながら構築可能 |
|                       | Squid     | 1年 | - c-icapと連携し、URLフィルタ機能を実装<br> - 調べながら構築が可能 |
| RAID   | Linux Software RAID | 0.5年 | - RAID1構築経験有り<br> - mdadmによるRAIDアレイの操作が一通り可能 |
|  AWS   |  Amazon EC2 | 3年 | 一通りの機能は把握できている |
|     |  Amazon VPC | 3年 | 一通りの機能は把握できている |
|     |  Amazon Site to Site VPN | 3年 | 一通りの機能は把握できている |
| Azure           |  Azure VPN Gateway ([Classic](https://docs.microsoft.com/ja-jp/azure/vpn-gateway/design#s2smulti))     | 1年   | 調べながら作業が可能 |
|  Cloudflare   | Cloudflare Registrar  | 3年 | 個人ブログで使用するドメイン管理に使用 |
|     | Cloudflare Pages  | 3年 | 個人ブログの静的ホスティング先として使用 |
| モニタリング          | Zabbix         | 3年 | 1通りの機能は把握できている |
| ソースコード管理      | Github | 3年  | 調べながら作業可能 |
|                       | Gitlab | 3年  | 調べながら作業可能 |
| ベンダー機器          | Cisco         | 4年  | 自宅内で運用経験有り<br> - Router<br>  - Catalyst <br> - Access Point |
|                       | Allied Telesis | 3年 | - L2SW<br> - 基本設定は理解 |
|                       | NEC         | 3年 | 宅内NWで運用中<br> - UNIVERSERGE IX |
|                       | Sophos      | 0.5年  | - L2SW (CS210-8FP)<br> - 調べながら作業が可能 |
|                       | Dell (Server)       | 0.5年 |  - Dell PowerEdge<br> - iDRAC9<br> 調べながら構築可能 | 
| ドキュメントツール    | Redmine       | 4年       | 一通りの機能は理解している |
|                       | Notion        | 2年       |  一通りの機能は理解している |

<div style="page-break-after: always;"></div>

## 職務経歴詳細

| 2018年4月 ~ 現在 | バリオセキュア株式会社 |
|----------------------------------------|-----------------|
|事業内容: マネージド・セキュリティサービス（MSS）事業<br> 資本金: 7億5000万円（2024年2月末時点）<br> 従業員数: 88人 |　正社員として勤務　|
  
職種： インフラエンジニア<br>
**※ 2018 年 4 月 ~ 2018 年 6 月 : 研修期間のためプロジェクトなし。**

### 📌 AWS Site to Site VPN 技術検証（2023年4月 ~ 2023年6月）

| 項目 | 内容 |
|------|------|
| 📅 期間 | 2023年4月 ~ 2023年6月 |
| 📝 プロジェクト概要 | セキュリティアプライアンスのOS更新プロジェクトにおける技術検証（AWS Site-to-Site VPN、CloudFormation 等） |
| 🧪 業務内容 | - strongSwan（IPsec VPN）とQuagga（BGP）を使用しオンプレミス接続を検証<br><br>- 通信試験項目の作成・実施<br><br>- 新OS環境に適した設定手順の策定 |
| 🏆 実績・取り組み | - AWS CloudFormationを活用し、EC2やVPC構成の自動化に貢献<br><br>- VPN接続の冗長化と経路制御を実現<br><br>- Zabbixによる監視体制強化<br><br>- トラブルシューティング項目を策定し運用改善に貢献 |
| 🧠 習得技術 | - AWS Site-to-Site VPN<br><br>- AWS CloudFormation<br><br>- strongSwan<br><br>- Quagga |
| 👥 規模 | 3名（メンバー） |

---

### 📌 NOCチーム 新規立ち上げ（2021年1月 ~ 2023年6月）

| 項目 | 内容 |
|------|------|
| 📅 期間 | 2021年1月 ~ 2023年6月 |
| 📝 プロジェクト概要 | 自社NOCチームの新規立ち上げおよび業務フロー改善 |
| 🧪 業務内容 | - 設定開通チームで業務フロー改善と教育を担当<br><br>- kintoneアプリ開発<br><br>- UTM機器の設定<br><br>- BGPナレッジ作成 |
| 🏆 実績・取り組み | - ナレッジをファイルサーバに集約し一元管理化<br><br>- 紙ベースの納品フローをkintoneに完全移行<br><br>- メンバーのスキル標準化を推進し、上司から高評価を得る |
| 🧠 習得技術 | - kintone<br><br>- Biztel（クラウドPBX） |
| 👥 規模 | 5名（チームリーダー） |

---

### 📌 Webフィルタリングソリューション ログ転送機能の実装（2018年10月 ~ 2019年2月）

| 項目 | 内容 |
|------|------|
| 📅 期間 | 2018年10月 ~ 2019年2月 |
| 📝 プロジェクト概要 | 顧客要件によりアクセスログを顧客サーバへ転送する機能を実装 |
| 🧪 業務内容 | - ログ転送機能の設計と実装<br><br>- ログフォーマットの提供 |
| 🏆 実績・取り組み | - ランニングコストを抑えた提案を実現<br><br>- ログファイル名にホスト名とタイムスタンプを付与し重複防止 |
| 🧠 習得技術 | - bash<br><br>- scp（SSH File Transfer Protocol） |
| 👥 規模 | 2名（メンバー） |

---

### 📌 JPIX v6プラス 技術検証（2018年10月 ~ 2018年11月）

| 項目 | 内容 |
|------|------|
| 📅 期間 | 2018年10月 ~ 2018年11月 |
| 📝 プロジェクト概要 | - セキュリティアプライアンスのIPv6対応（IPoE接続）に向けた技術検証プロジェクト |
| 🧪 業務内容 | - 検証環境構築・設定投入<br><br>- 検証項目作成・スケジュール調整<br><br>- 回線仕様調査 |
| 🏆 実績・取り組み | - 関係部署と連携し、予定通り機能をリリース |
| 🧠 習得技術 | - IPIP tunnel (IPv4 over IPv6)実装・設定<br><br>- IPv6 |
| 👥 規模 | 2名（メンバー） |

<div style="page-break-after: always;"></div>

### プロジェクト期間外
そのほか入社～現在まで、プロジェクト外の定常業務として下記を対応。
- 運用チームからエスカレーションされたネットワーク障害の原因調査
- 顧客要望による自社 UTM のサイジング対応
  - トラフィック使用量計測
  - システムリソース使用状況モニタリング
- 他ベンダー機器の config を自社 UTM 向けにコンバート
  - 対応ベンダー
    - Juniper NetScreen/SSG
    - YAMAHA RTX
    - Fortigate
- 顧客の UTM 導入サポート
  - 設置時のトラブルシューティング
- 脆弱性調査
  - 影響を受けるホストの特定
  - パッチ適用、設定変更、回避策（ワークアラウンド）の検討
  - 対応した脆弱性
    - FragmentSmack (CVE-2018-5391)
    - TCP SACK PANIC (CVE-2019-11477, 2019-11478, 2019-11479)
    - Apache モジュールの脆弱性 (CVE-2019-0211, CVE-2019-0217, CVE-2019-0220)
- データセンターマネジメント
  - ルーター、スイッチ、ファイアウォールの設定変更
  - IP アドレス管理
  - サーバーの導入・撤去（ラックマウント、ケーブリング）
  - 仮想化基盤の管理 (VMware ESXi)

<div style="page-break-after: always;"></div>
<!--
Google App Script: kintoneのメンテナンス情報をSlack channelに通知する処理が実運用で採用された
-->

<!--## Language

- 日本語
  - ネイティブ
- 英語
  - かんたんな日常会話ができる
  - TOEIC: xxx点
-->


## 保有資格

| 取得日 | 資格名称 | 認定証リンク |
| :-----: | ------- | :--------: |
| 2025年2月 | LPIC-2 Certification | [認定証](https://www.credly.com/badges/0fefe727-f740-436e-bcfa-0b381142a08b/public_url) |
| 2024年4月 | Google Cloud Associate Cloud Engineer | [認定証](https://www.credly.com/badges/a48a80d1-b579-4d13-896a-9d742b22fa99/public_url) |
| 2023年12月 | LPI Security Essentials 020-100 | [認定証](https://www.credly.com/badges/ba69e638-52ec-4a8b-8e46-210fdb0cbb56/public_url) |
| 2022年1月 | AWS Certified Cloud Practitioner | [認定証](https://www.credly.com/badges/e5d39f38-5cd7-47cf-b1d4-4ef174e82fe8/public_url) |
| 2020年12月 | AZ-900: Microsoft Azure Fundamentals | [認定証](https://learn.microsoft.com/api/credentials/share/ja-jp/RyoYamada-4053/A3148925C4E0657E?sharingId=E375F49FE8EB812C) |
| 2020年3月 | LPIC-1 Certification | [認定証](https://www.credly.com/badges/df3f4c2b-247a-4a9a-8f30-6dfbb83aa804/public_url) |
| 2019年5月 | IPA 情報セキュリティマネジメント 合格 ||

### AWS Skill Builder

| 取得日 | 資格名称 | 認定証リンク |
| :-----: | ------- | :--------: |
| 2025年1月 | AWS Cloud Quest: Cloud Practitioner | [認定証](https://www.credly.com/badges/60a69832-06a0-4031-915b-62e89a60a62b/public_url) |

<div style="page-break-after: always;"></div>

### Coursera 修了証

| 取得日 | コース名称 | 修了証リンク |
| :-----: | :------- | :-----------: |
| 2019/10 | Essential Cloud Infrastructure: Foundation<br> 日本語版 | [修了証](https://www.coursera.org/account/accomplishments/verify/M3WSKG9YR3K9) |
| 2019/08 | Google Cloud Platform Fundamentals: Core Infrastructure<br> 日本語版 | [修了証](https://www.coursera.org/account/accomplishments/verify/F9PQFFKYBPHJ) |

## Blog
[![Blog URL](https://img.shields.io/badge/Plug%20me%20in-%23E9E5E3.svg?&style=flat-square&logo=astro&logoColor=black)](https://blog.da8ma.com/)

## 各種アカウント
[![Github URL](https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white)](https://github.com/da8ma)
[![LinkedIn URL](https://custom-icon-badges.demolab.com/badge/LinkedIn-0A66C2?logo=linkedin-white&logoColor=fff)](https://www.linkedin.com/in/ryo-y-ethernet/)


<!---
## 課外活動

### 社外プロジェクト
* [運営に携わっているコミュニティ](そのコミュニティのconnpassやカンファレンスページのリンクとか)
* [副業で携わっているサービス](そのサービスのランディングページのリンクとか)

### 過去の登壇資料
* [Speaker Deck](Speaker Deckの自分の資料のページとか)

### 受賞歴
* [イベント名と受賞した賞](イベントのランディングページのリンクや、結果がわかる記事など)

### 執筆歴
* [書籍の名前](Amazonのリンクとか)
* [Qiita](Qiitaの自分のプロフィールのリンクとか)
* [ネットメディアの記事](記事のリンクとか)
* [SoftwareDesignやWEB+DBのこの月の特集](その月のアーカイブのリンクとか)
* [技術系同人誌](boothのリンクとか自分のサイトの紹介リンクとか)
-->
