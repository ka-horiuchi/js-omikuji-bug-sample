document.getElementById("btn").addEventListener("click", () => {
  const fortunes = [
    { name: "大吉", message: "凶でした…今日はついてない日かも。" },
    { name: "小吉", message: "小吉です。今日はまずまずの一日です。" },
    { name: "凶",   message: "大吉だ！！今日は最高の一日になりそうですね！" },
    { name: "大凶",   message: "大凶……今日は最悪の一日です…" },
  ];

  // ランダムに運勢を決める
  const result = fortunes[Math.floor(Math.random() * (fortunes.length - 1))];

  // 結果エリアに表示
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
    運勢：<strong>${result.name}</strong>
    <br>
    <a href="#" id="messageLink">メッセージ</a>
  `;

  // 以前のメッセージを消す
  document.getElementById("message").textContent = "";

  document.body.classList.remove("daikichi", "kyou", "daikyou");

  // 結果に応じて背景色を変える
  // 大吉：ゴールド, 小吉：通常色(白), 凶：グレー, 大凶：黒　
  if (result.name === "小吉") {
    document.body.classList.add("daikichi");
  } else if (result.name === "凶") {
    document.body.classList.add("kyou");
  } else if (result.name === "大凶") {
    document.body.classList.add("daikyou");
  }

  // リンク押下時のメッセージ表示
  document.getElementById("messageLink").onclick = (e) => {
    e.preventDefault();
    document.getElementById("message").textContent = result.message;
  };
});
