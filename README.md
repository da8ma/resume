# 職務経歴書

## 基本情報

|key|value|
|---|-----|
|Name| 山田涼(Ryo Yamada) |
|生年月日| 1995/10/20 |
|居住地| 東京都 |
|最終学歴| 明治学院大学法学部 |

---

## 各種アカウント

[![Github URL](https://img.shields.io/badge/Ryo%20Yamada%20-%2312100E.svg?&style=flat-square&logo=Github&logoColor=white)](https://github.com/da8ma)
[![Twitter URL](https://img.shields.io/badge/@da8ma2017-%231DA1F2.svg?&style=flat-square&logo=twitter&logoColor=white)](https://twitter.com/da8ma2017)
[![Blog URL](https://img.shields.io/badge/blog-%231DA1F2.svg?&style=flat-square&logo=twitter&logoColor=white)](https://blog.da8ma.com/)



---

## 保有資格

- 2022/01 AWS Certified Cloud Practitioner ([認定証](https://www.credly.com/badges/e5d39f38-5cd7-47cf-b1d4-4ef174e82fe8/public_url))
- 2020/12 AZ-900: Microsoft Azure Fundamentals ([認定証](https://www.youracclaim.com/badges/ff4cfbb2-9123-45b2-b522-c7f7b48f8cde?source=linked_in_profile))
- 2020/03 LPIC level 1 ([認定証](https://cs.lpi.org/caf/Xamman/certification/verify/LPI000411634/2r4garaqyy))
- 2019/05 情報セキュリティマネジメント 取得

### 補足

- 2019/08 Cousera 「Google Cloud Platform Fundamentals: Core Infrastructure 日本語版」 修了 ([修了証](https://www.coursera.org/account/accomplishments/verify/F9PQFFKYBPHJ))
- 2019/10 Cousera 「Essential Cloud Infrastructure: Foundation 日本語版」 修了 ([修了証](https://www.coursera.org/account/accomplishments/verify/M3WSKG9YR3K9))

---

<!---
### Framework

- Ruby on Rails
- Laravel
- Spring Boot
- などなど
-->

## 技術スタック

<!--
- 言語やフレームワークに限らないスキル。開発手法やプロセス、ツールなど
-->

- TCP/IP
- OS
  - RedHat
  - CentOS
  - Ubuntu

- Middleware
  - Firewall (zone based firewall)
    - [Shorewall](http://shorewall.org/) (iptables base firewall)
  - routing
    - Quagga (BGP)
  - Remote Access VPN
    - L2TP over IPsec
      - xl2tpd
      - strongSwan (ikev1)
    - IPsec VPN
       - strongSwan (ikev2)
  - Site to Site VPN
    - OpenVPN (L2/L3VPN)
  - AWS VPN
    - strongSwan
    - Quagga (eBGP)
  - Azure VPN Gateway ([Classic](https://docs.microsoft.com/ja-jp/azure/vpn-gateway/design#s2smulti))
    - strongSwan
  - Proxy
    - Squid
    - c-icap (ICAP Server)
  - DNS
    - BIND
  - IDS/ADS
    - Snort
  - L4 Loadbalancer 
    - ldirectord + ipvsadm
- Monitoring Tool
  - Zabbix
- Chat Tool
  - Slack
- Development Tool
  - Github
  - Gitlab
  - Asana
  - Instagannt
- Document Tool
  - Redmine
  - Notion

### ベンダー機器

- Router
  - Cisco
    - Catalyst
    - Access Point
  - NEC UNIVERSERGE IX
  - Juniper (Netscreen/SSG)

- L2SW
  - Allied Telesis
  - Sophos (CS210-8FP)

### 言語
- Python3
- Bash

<!--
- Honeypot
GCP上(GCE + Stackdriver logging + Big query)で  「WOWHoneypot」と「Cowrie」を運用中。
-->

<!--## Language

- 日本語
  - ネイティブ
- 英語
  - かんたんな日常会話ができる
  - TOEIC: xxx点
-->

---
## 強み

* ミドルウェアを用いたNW構築が得意。
* 検証業務を多くこなしてきた関係で、新しい分野でも手を動かすことに抵抗がない。

---

## やったことはないが興味があるもの

- クラウド環境を用いたNetwork構築。
- Ansible、Terraformを使用した構成管理(インフラコード)
- Docker, k8sなどのコンテナを使用した本番環境へのデプロイ。

---

## 職務経歴

### 2018/04 - 現在 : バリオセキュア株式会社

職務: ネットワーク・インフラエンジニア

#### config automation (2019/03 ~ 2019/10)

外部に委託している自社のUTM機器の設定投入作業を効率化するProject。<br> Projectのスケジュール管理、kintoneを使用した設定入力画面の作成、<br>設定を自動化するscriptの試験と改修を行った。

##### 業務内容

- kintoneのアプリ実装・テスト (アカウント、セキュリティの管理も行っていた。)
- 実機を使用したスクリプトのテスト。
- Gitlabに上がったbugの改修
- プロジェクト全体のスケジュール管理

##### PJ体制

- 人数
    - 3名 <br>(実機の検証は自分一人で、kintoneのアプリは私と常駐の方含めた2名で開発。)

##### 工夫した点

- Asana + Instaganntt でプロジェクト管理<br>
従来のExcelでの管理から無料で無期限かつWEB GUIで閲覧できるAsanaに移行を提案。<br> InstagannttはAsanaのタスクをガントチャートで閲覧するために使用。

- Gitlabでのversion管理<br>
部署内でファイルの変更のたびにfile nameにrevision番号をつけて送信する文化が根付いていたので、当時社内で使用を検討されていた「Gitlab」でのversion管理を率先して実施した。

- wikiの充実化<br>
情報の集約を目的として過去chatやMtgであがった議論をGitlab Wikiに文献としてまとめた。

#### JPNE v6プラス サービス検証 (2018/10 ~ 2018/11)

自社で提供しているUTM機器のv6プラスサービス対応に向け、<br>某大手通信キャリアの環境をお借りし検証を実施した。

- 検証のためのNW構築や設定投入を担当。
- 検証項目やスケジュールの作成。

**参考リンク** <br>
https://www.jpne.co.jp/service/v6plus/

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
