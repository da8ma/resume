# 職務経歴書

## 基本情報

|key|value|
|---|-----|
|名前| 山田涼(Ryo Yamada) |
|生年月日| 1995年10月20日 |
|居住地| 東京都 |
|最終学歴| 明治学院大学 法学部法律学科 |


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


<!--## やったことはないが興味があるもの

- Ansible、Terraform を使用した構成管理 (IaC)
- Docker, k8s などのコンテナを使用した本番環境へのデプロイ
- オブザーバビリティを考慮したモニタリングの強化
- 組織のセキュリティ向上を目的としたツールの構築/実装 (SIEM, SSO)
--->

## 職務経歴詳細

| 2018年4月 ~ 現在 | バリオセキュア株式会社 |
|----------------------------------------|-----------------|
|事業内容: マネージド・セキュリティサービス（MSS）事業<br> 資本金: 7億5000万円（2024年2月末時点）<br> 従業員数: 88人 |　正社員として勤務　|
  
職種： インフラエンジニア

<!-- <div class="page-break"></div>-->

### AWS Site to Site VPN 技術検証

| 2023年4月 ~ 2023年6月 | 開発環境 | 規模 | 
|------|------|------|
| 【プロジェクト概要】<br>- セキュリティアプライアンスのOS更新プロジェクトにおける技術検証<br><br/>【業務内容】<br>- 通信試験項目の作成・実施<br>- 新OS環境に適した設定手順の策定<br><br/>【実績・取り組み】<br> - 既存フローに存在しないトラブルシューティング項目を策定しNOCの運用改善に貢献<br> | 【AWS】<br> - AWS Site-to-Site VPN<br> 【ミドルウェア】<br> - strongsSwan<br> - Quagga<br> | 3名<br>メンバー |


### NOCチーム 新規立ち上げ

| 2021年1月 ~ 2023年6月 | 開発環境 | 規模 | 
|------|------|------|
| 【プロジェクト概要】<br>- 自社NOCチームの新規立ち上げ<br><br/>【業務内容】<br>- NOC内の設定開通チームにて、業務フローの改善・メンバーの教育を担当<br> - kintoneアプリの開発<br>- プロファイルシートに沿った、UTM機器設定<br>- BGP接続サービス提供におけるナレッジ作成 <br><br/>【実績・取り組み】<br>- 属人化していたナレッジをファイルサーバー上に集約し、一元管理化 <br> - 紙ベースの納品フローをkintoneに完全移行し、Web上で完結できるようにした<br> - メンバーの教育を担当し、個々のスキルレベルの標準化を推進。これにより、上司から『NOC内で最も信頼できるチーム』として高く評価された。 | 【SaaS/PaaS】<br> - kintone<br><br/>【クラウドPBX】<br> - Biztel | 5名<br>チームリーダー |


<!-- <div class="page-break"></div>-->

### Webフィルタリングソリューション ログ転送機能の実装

| 2018年10月 ~ 2019年2月 | 開発環境 | 規模 | 
|------|------|------|
| 【プロジェクト概要】<br>- 顧客の規定でWebのアクセスログを半永久的に残す必要があり、提供していたWebフィルタリングソリューションを顧客サーバー上に転送する要件が発生した。<br><br/>【業務内容】<br>- Webフィルタリングシステムのログ転送機能の設計と実装 <br>- ログフォーマットの提供 <br><br/>【実績・取り組み】<br>- 既存のソリューション内で機能が完結するようにし、顧客の『ランニングコストを抑えたい』という要望を達成した <br>- 2台のソリューションのログを転送するため、送信時に機器のホスト名とタイムスタンプを付与しファイル名の重複を避けるようにした | - bash<br> - scp (SSH File Transfer Protocol) | 2名<br>メンバー |


### JPIX v6プラス 技術検証

| 2018年10月 ~ 2018年11月 | 開発環境 | 規模 | 
|------|------|------|
| 【プロジェクト概要】<br>- セキュリティアプライアンスのIPoE回線対応に向けた技術検証<br><br/>【業務内容】<br> - 検証環境構築、設定投入を担当<br> - 検証項目・作成スケジュール調整<br> - 回線仕様調査<br><br/>【実績・取り組み】<br>- 関係部署と連携し、各種調整やテストを経て機能を予定通りにリリースした。  | 【習得技術】<br> - IPIP tunnel(IPv4 over IPv6)<br> - IPv6 | 2名<br>メンバー |


<div class="page-break"></div>

## スキルセット

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
|  AWS   |  Amazon VPC | 3年　| 一通りの機能は把握できている |
|     |  Amazon Site to Site VPN | 3年　| 一通りの機能は把握できている |
| Azure           |  Azure VPN Gateway ([Classic](https://docs.microsoft.com/ja-jp/azure/vpn-gateway/design#s2smulti))     | 1年   | 調べながら作業が可能 |
| モニタリング          | Zabbix         | 3年 | 1通りの機能は把握できている |
| ソースコード管理      | Github | 3年  | 調べながら作業可能 |
|                       | Gitlab | 3年  | 調べながら作業可能 |
| ベンダー機器          | Cisco         | 4年  | 自宅内で運用経験有り<br> - Router<br>  - Catalyst <br> - Access Point |
|                       | Allied Telesis | 3年 | - L2SW<br> - 基本設定は理解 |
|                       | NEC         | 3年 | 自宅内で運用経験有り<br> - UNIVERSERGE IX |
|                       | Sophos      | 0.5年  | - L2SW (CS210-8FP)<br> - 調べながら作業が可能 |
|                       | Dell (Server)       | 0.5年 |  - Dell PowerEdge<br> - iDRAC9<br> 調べながら構築可能 | 
| ドキュメントツール    | Redmine       | 4年       | 一通りの機能は理解している |
|                       | Notion        | 2年       |  一通りの機能は理解している |

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
| 2024年4月 | Google Cloud Associate Cloud Engineer | [認定証](https://www.credly.com/badges/a48a80d1-b579-4d13-896a-9d742b22fa99/public_url) |
| 2023年12月 | LPI Security Essentials 020-100 | [認定証](https://cs.lpi.org/caf/Xamman/certification/verify/LPI000411634/3txgcdaec8) |
| 2022年1月 | AWS Certified Cloud Practitioner | [認定証](https://www.credly.com/badges/e5d39f38-5cd7-47cf-b1d4-4ef174e82fe8/public_url) |
| 2020年12月 | AZ-900: Microsoft Azure Fundamentals | [認定証](https://www.credly.com/badges/ff4cfbb2-9123-45b2-b522-c7f7b48f8cde/public_url) |
| 2020年3月 | LPIC Level1 | [認定証](https://cs.lpi.org/caf/Xamman/certification/verify/LPI000411634/2r4garaqyy) |
| 2019年5月 | IPA 情報セキュリティマネジメント 合格 ||

<!-- <div class="page-break"></div>-->

### Coursera 修了コース

| 取得日 | コース名称 | 修了証リンク |
| :-----: | :------- | :-----------: |
| 2019/10 | Essential Cloud Infrastructure: Foundation<br> 日本語版 | [修了証](https://www.coursera.org/account/accomplishments/verify/M3WSKG9YR3K9) |
| 2019/08 | Google Cloud Platform Fundamentals: Core Infrastructure<br> 日本語版 | [修了証](https://www.coursera.org/account/accomplishments/verify/F9PQFFKYBPHJ) |

## Blog
[![Blog URL](https://img.shields.io/badge/Plug%20me%20in-%23E9E5E3.svg?&style=flat-square&logo=astro&logoColor=black)](https://blog.da8ma.com/)

<!--## LAPRAS-->
<!--START_SECTION:lapras-card-->
<!--END_SECTION:lapras-card-->

## 各種アカウント
[![Github URL](https://img.shields.io/badge/Ryo%20Yamada%20-%2312100E.svg?&style=&logo=Github&logoColor=white)](https://github.com/da8ma)
[![LinkedIn URL](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ryo-y-ethernet/)
[![Twitter URL](https://img.shields.io/twitter/url/https/twitter.com/cloudposse.svg?style=social&label=%20%40da8ma2017)](https://x.com/da8ma2017)


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
