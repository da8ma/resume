# 職務経歴書

## 基本情報

|key|value|
|---|-----|
|名前| 山田涼(Ryo Yamada) |
|生年月日| 1995年10月20日 |
|居住地| 東京都 |
|最終学歴| 明治学院大学 法学部法律学科 |


## 職歴概要・要約
ネットワークセキュリティ企業で６年に渡り、インフラエンジニアとして従事してきました。<br>
自社UTM製品のインシデント対応やバックエンドインフラの基盤更改を担当しました。<br>
また、NOCの新規立ち上げにも参画し、運用改善の功績により所属部署が「2021年度上期MVP」を獲得しました。<br>
今後はクラウドネイティブ環境の自動化及びセキュリティ領域を伸ばしていきたいと考えています。

## 得意なスキル・活かせる能力

- ミドルウェアを用いたネットワーク構築
   - リモートVPN実装
   - eBGPを使用した顧客側NWとキャリア網の接続・経路制御
- 検証業務を数多くこなしてきた関係で、新しい分野で手を動かすことに抵抗がない
- パブリッククラウド (AWS)
  - AWS VPN gatewayを用いたハイブリッドクラウド構成


## やったことはないが興味があるもの

- Ansible、Terraform を使用した構成管理 (IaC)
- Docker, k8s などのコンテナを使用した本番環境へのデプロイ
- オブザーバビリティを考慮したモニタリングの強化
- 組織のセキュリティ向上を目的としたツールの構築/実装 (SIEM, SSO)

## 職務経歴詳細

| 2018年4月 ~ 現在 バリオセキュア株式会社  グロース市場上場|
|----------------------------------------|
|事業内容: マネージド・セキュリティサービス（MSS）事業<br> 資本金: 7億5000万円（2024年2月末時点）<br> 従業員数: 88人 |
  
職種： インフラエンジニア

### AWS Site to Site VPN 技術検証

| 項目 | 内容 |
|------|------|
| 期間 | 2023年4月 ~ 2023年6月 |
| 役割 | メンバー |
| チーム規模 | 3名 |
| 担当業務 | - UTM機器で動作するOS更改に伴い,リリース判定に必要な技術検証を担当<br> - 試験項目の作成<br> - NOC試験項目の改定<br>  - トラブルシューティング項目の策定<br> |
| 利用技術 | AWS Site-to-Site VPN, strongSwan, Quagga (BGP) |

### UTM機器 納品業務 (NOC立ち上げ)

| 項目 | 内容 |
|------|------|
| 期間 | 2021年1月 ~ 2023年6月 |
| 役割 | チームリーダー |
| チーム規模 | 5名 |
| 担当業務 | - 開通時の試験項目の改善<br> - 属人化していた運用ナレッジをフローとして策定<br> - 担当営業と顧客通信要件の確認<br> - プロファイルシートに沿った、UTM機器設定<br> - 通信不可事象時のトラブルシューティング |

### UTM機器 設定効率化

| 項目 | 内容 |
|------|------|
| 期間 | 2019年3月 ~ 2019年10月 |
| 役割 | メンバー |
| チーム規模 | 3名(外部委託メンバー含む)  |
| 担当業務 | - kintone のアプリ実装・テスト (認証の管理)<br> - 実機を使用したシェルスクリプトのテスト<br> - Gitlab に上がったバグの修正<br> - プロジェクト全体のスケジュール管理 |
| 利用技術 | kintone, Bash, Gitlab, Asana + Instagannt |

### JPIX v6プラス 技術検証

| 項目 | 内容 |
|------|------|
| 期間 | 2018年10月 ~ 2018年11月 |
| 役割 | メンバー |
| チーム規模 | 2名 |
| 担当業務 | - 検証環境構築、設定投入を担当<br> - 検証項目やスケジュールの作成<br>  |
| 利用技術 | IPIP tunnel(IPv4 over IPv6), IPv6 |


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
| 2024年4月 | Google Cloud Associate Cloud Engineer | [認定証](https://www.credly.com/badges/a948aa9a-00d3-4c27-9423-c9824aa6f32a/linked_in_profile) |
| 2023年12月 | LPI Security Essentials 020-100 | [認定証](https://cs.lpi.org/caf/Xamman/certification/verify/LPI000411634/3txgcdaec8) |
| 2022年1月 | AWS Certified Cloud Practitioner | [認定証](https://www.credly.com/badges/e5d39f38-5cd7-47cf-b1d4-4ef174e82fe8/public_url) |
| 2020年12月 | AZ-900: Microsoft Azure Fundamentals | [認定証](https://www.youracclaim.com/badges/ff4cfbb2-9123-45b2-b522-c7f7b48f8cde?source=linked_in_profile) |
| 2020年3月 | LPIC Level1 | [認定証](https://cs.lpi.org/caf/Xamman/certification/verify/LPI000411634/2r4garaqyy) |
| 2019年5月 | IPA 情報セキュリティマネジメント 合格 ||

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
[![Github URL](https://img.shields.io/badge/Ryo%20Yamada%20-%2312100E.svg?&style=flat-square&logo=Github&logoColor=white)](https://github.com/da8ma)
[![Twitter URL](https://img.shields.io/badge/@da8ma2017-%231DA1F2.svg?&style=flat-square&logo=twitter&logoColor=white)](https://twitter.com/da8ma2017)
[![LinkedIn URL](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ryo-y-ethernet/)

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
