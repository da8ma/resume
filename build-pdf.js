import fs from 'fs';
import { marked } from 'marked';
import puppeteer from 'puppeteer';

// 入力ファイルと出力ファイルの指定
const inputFile = './docs/README.md'; // 入力Markdownファイル
const outputFile = './docs/職務経歴書.pdf'; // 出力するPDFファイル

(async () => {
  try {
    // Markdownファイルの存在確認
    if (!fs.existsSync(inputFile)) {
      throw new Error(`入力ファイルが見つかりません: ${inputFile}`);
    }

    // Markdownファイルを読み込み
    const markdown = fs.readFileSync(inputFile, 'utf-8');

    // MarkdownをHTMLに変換し、HTMLテンプレートに挿入
    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>職務経歴書</title>
      <style>
        @page {
          size: A4;
          margin: 2cm;
          @bottom-right {
            content: "Page " counter(page) " of " counter(pages);
            font-size: 12px;
            color: #555;
          }
          @bottom-left {
            content: "職務経歴書";
            font-size: 12px;
            color: #555;
          }
        }
        body {
          font-family: 'Noto Sans', 'Noto Sans JP', sans-serif;
          font-size: 16px;
          line-height: 1.8;
          margin: 0;
          padding: 0;
          color: #333;
        }
        h1, h2, h3 {
          color: #007ACC;
          margin-top: 20px;
          margin-bottom: 10px;
        }
        p {
          margin: 10px 0;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
        }
        th, td {
          border: 1px solid #ccc;
          padding: 10px;
          text-align: left;
          vertical-align: top;
        }
        th {
          background-color: #f4f4f4;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      ${marked(markdown)}
    </body>
    </html>
    `;

    // PuppeteerでPDFを生成
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // コンテンツ設定
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

    // PDF出力
    await page.pdf({
      path: outputFile,
      format: 'A4',
      printBackground: true,
    });

    await browser.close();
    console.log(`PDFが正常に生成されました: ${outputFile}`);
  } catch (error) {
    console.error(`エラーが発生しました: ${error.message}`);
    process.exit(1);
  }
})();