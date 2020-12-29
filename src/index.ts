class Main {
  private BUTTON_STYLE = `
  .nagano-button {
    position:fixed;
    left:10px;
    top:10px;
    padding:10px;
    z-index: 999;
}
  `;

  constructor() {
    const button = document.createElement('button');
    button.onclick = this.createTables;
    button.innerText = 'テーブルにする！';
    button.classList.add('nagano-button');
    document.body.appendChild(button);
    this.addStyleTag(this.BUTTON_STYLE);
  }

  private addStyleTag(css: string) {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = css;
    document.getElementsByTagName("head")[0].appendChild(styleTag);
  }

  private createTables() {
    Array.from(document.getElementsByClassName('type_tweet')).forEach((el) => {
      //TweetURLを取得
      const tweet_url = el.getElementsByClassName('twitter_logo')[0].getAttribute('href');

      //画像を取得
      const image_urls = Array.from(el.getElementsByClassName('list_photo')).map(el_img =>
        el_img.getElementsByTagName('img')[0].src
      )

      //ツイート内容を取得
      const el_tweet = el.getElementsByClassName('tweet')[0];
      //ハッシュタグと写真のurlを削除
      // const tweet = el_tweet.textContent.replace(/pic\.twitter\.com\/\w+/g, '').replace(/#[\u3041-\u3096\u30A1-\u30FA[々〇〻\u3400-\u9FFF\uF900-\uFAFF]|[\uD840-\uD87F][\uDC00-\uDFFF]]+$/g, '');
      const tweet = Array.from(el_tweet.childNodes).map(node => {
        // return node.nodeName;
        return node.nodeName === 'A' ? '' : node.textContent;
      }).join('');
      //node =>

      // const tweet = Array.from(el_tweet.getElementsByTagName('span')).map(el => el['innerText']).join('');

      const table = document.createElement('table');

      for (let i = 0; i < image_urls.length; i++) {
        const tr = document.createElement('tr');

        const el_tweet_url = document.createElement('td');
        el_tweet_url.innerText = tweet_url;
        tr.appendChild(el_tweet_url);

        const el_num = document.createElement('td');
        el_num.innerText = (i + 1).toString();
        tr.appendChild(el_num);

        const el_img = document.createElement('td');
        el_img.innerText = image_urls[i];
        tr.appendChild(el_img);

        const el_tweet = document.createElement('td');
        el_tweet.innerText = tweet;
        tr.appendChild(el_tweet);

        table.appendChild(tr)
      }
      el.appendChild(table);
    })
  }
}

try {
  new Main();
} catch (error) {
  console.log(error);
}
