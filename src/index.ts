class Main {
  constructor() {
    //「Duetへアクセス」リンクを表題に追加する
    Array.from(document.getElementsByClassName('type_tweet')).forEach((el) => {
      //TweetURLを取得
      const tweet_url = el.getElementsByClassName('twitter_logo')[0].getAttribute('href');

      //画像を取得
      const image_urls = Array.from(el.getElementsByClassName('list_photo')).map(el_img =>
        el_img.getElementsByTagName('img')[0].src
      )

      //ツイート内容を取得
      const el_tweet = el.getElementsByClassName('tweet')[0];
      const tweet = el_tweet.textContent;

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
