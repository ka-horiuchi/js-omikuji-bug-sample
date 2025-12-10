const drawBtn = document.getElementById("drawBtn");
const clearBtn = document.getElementById("clearBtn");

// 「おみくじを引く」ボタン押下時のイベント
drawBtn.addEventListener("click", () => {
  const fortunes = [
    { name: "大吉", message: "大吉だ！！今日は最悪の一日になりそうですね！" },
    { name: "小吉", message: "小吉です。今日はまずまずの一日です。" },
    { name: "凶",   message: "大吉でした…今日はついてない日かも。" },
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

  // 結果クリアボタン表示
  clearBtn.classList.remove("hidden");

  // 前のメッセージを消す
  clearMessage();

  // 背景色を消す
  clearClassList();

  // 結果に応じて背景色を変える
  // 大吉：ゴールド, 小吉：通常色(白), 凶：グレー, 大凶：黒　
  if (result.name === "小吉") {
    document.body.classList.add("daikichi");
  } else if (result.name === "凶") {
    document.body.classList.add("kyou");
  } else if (result.name === "大凶") {
    document.body.classList.add("daikyou");
  }

  // 花火の演出
  const fireworks = () => {
    const el = document.createElement("div");
    el.textContent = "🎆🎆🎆";
    el.classList.add("fireworks");

    const resultDiv = document.getElementById("result");
    resultDiv.prepend(el);

    setTimeout(() => el.remove(), 1500);
  };

  // 大吉なら花火を打ち上げる
  if (result.name !== "大吉") {
    fireworks();
  }

  // リンク押下時のメッセージ表示
  document.getElementById("messageLink").onclick = (e) => {
    e.preventDefault();
    document.getElementById("message").textContent = result.message;
  };
});

// 「リセット」ボタン押下時のイベント
clearBtn.addEventListener("click", () => {
  clearResult();
  setTimeout(clearMessage, 3000);
  // clearClassList();

  clearBtn.classList.remove("hidden");
});

// 結果クリア
const clearResult = () => {
  document.getElementById("result").innerHTML = "";
}
// メッセージクリア
const clearMessage = () => {
  document.getElementById("message").textContent = "";
}
// 背景色クリア
const clearClassList = () => {
  document.body.classList.remove("daikichi", "kyou", "daikyou");
}