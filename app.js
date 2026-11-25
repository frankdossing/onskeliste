(function () {
  const L = window.WISHLIST;
  const fmt = new Intl.NumberFormat("da-DK", { style: "currency", currency: "DKK", maximumFractionDigits: 0 });
  const $ = (sel) => document.querySelector(sel);

  $("#title").textContent = L.title;
  document.title = "WishiCloud – " + L.title;

  // ===== Render =====
  L.sections.forEach((sec) => {
    const el = document.createElement("section");
    el.className = "cat";
    el.innerHTML = `<h2>${sec.icon} ${sec.title} <span class="pill">${sec.wishes.length} ønsker</span></h2><div class="grid"></div>`;
    const grid = el.querySelector(".grid");
    sec.wishes.forEach((w) => grid.appendChild(renderWish(w)));
    $("#sections").appendChild(el);
  });

  function priceText(w) {
    const prices = w.options.map((o) => o.price).filter((p) => p != null);
    if (!prices.length) return "Find i butik";
    const min = fmt.format(Math.min(...prices));
    return w.options.length > 1 ? "fra " + min : min;
  }

  function renderWish(w) {
    const card = document.createElement("article");
    card.className = "card";
    const media = w.image
      ? `<img src="${w.image}" alt="${w.name}" loading="lazy">`
      : `<span>${w.emoji}</span>`;
    card.innerHTML = `
      <div class="media">${media}</div>
      <div class="body">
        <h3>${w.name}</h3>
        ${w.desc ? `<p>${w.desc}</p>` : ""}
        <p class="price">${priceText(w)}</p>
        <div class="actions">
          <button class="reserve" type="button">Reservér</button>
          <button class="buy" type="button">Se i butik${w.options.length > 1 ? ` (${w.options.length})` : ""}</button>
        </div>
      </div>`;

    card.querySelector(".buy").addEventListener("click", () => openShops(w));
    card.querySelector(".reserve").addEventListener("click", (e) => reserve(card, w, e.currentTarget));
    return card;
  }

  // ===== "Se i butik": open one tab per shop option =====
  function openShops(w) {
    let blocked = 0;
    const urls = [...new Set(w.options.map((o) => o.url))]; // same page only once
    urls.forEach((url) => {
      const win = window.open(url, "_blank");
      if (win) win.opener = null; else blocked++;
    });
    if (blocked > 0) showShopDialog(w);
  }

  function showShopDialog(w) {
    $("#shops-title").textContent = w.name;
    const list = $("#shops-list");
    list.innerHTML = "";
    w.options.forEach((o) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = o.url;
      a.target = "_blank";
      a.rel = "noopener";
      a.innerHTML = `<span>${o.shop}: ${o.label}</span><span>${o.price != null ? fmt.format(o.price) : "→"}</span>`;
      li.appendChild(a);
      list.appendChild(li);
    });
    $("#shops").showModal();
  }

  // ===== Fake reservation: nothing is saved, something weird happens =====
  const SURPRISES = [sheepParade, stolenByCloud, santaVisit, upsideDown];

  function reserve(card, w, btn) {
    if (card.classList.contains("reserved")) {
      toast("Den er allerede reserveret. Af en får, sandsynligvis.");
      return;
    }
    card.classList.add("reserved");
    btn.textContent = "Reserveret ✓";
    const surprise = SURPRISES[Math.floor(Math.random() * SURPRISES.length)];
    surprise(card);
  }

  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => t.classList.remove("show"), 4200);
  }

  function sheepParade() {
    const fx = $("#fx");
    for (let i = 0; i < 6; i++) {
      const s = document.createElement("span");
      s.className = "sheep";
      s.textContent = "🐑";
      s.style.animationDelay = i * 0.35 + "s";
      fx.appendChild(s);
      setTimeout(() => s.remove(), 6000);
    }
    toast("🐑 Reserveret af en får. Den betaler med græs. (Ingen rigtig reservation – bare sjov.)");
  }

  function stolenByCloud(card) {
    const media = card.querySelector(".media");
    const storm = document.createElement("div");
    storm.className = "storm";
    storm.innerHTML =
      '<span class="cl">🌩️</span>' +
      Array.from({ length: 10 }, (_, i) =>
        `<span class="drop" style="left:${6 + i * 9}%;animation-delay:${(i % 5) * 0.15}s">💧</span>`
      ).join("");
    media.appendChild(storm);
    setTimeout(() => storm.remove(), 4000);
    toast("☁️ En sky har taget gaven. Den leveres om 3–5 regndage. (Ingen rigtig reservation.)");
  }

  function santaVisit() {
    const s = document.createElement("div");
    s.className = "santa";
    s.innerHTML = '🎅<span>Hemmeligt! Ho ho ho.</span>';
    $("#fx").appendChild(s);
    setTimeout(() => s.remove(), 3200);
    toast("🎅 Julemanden har reserveret den. Han siger, det er hemmeligt. (Ingen rigtig reservation.)");
  }

  function upsideDown() {
    document.body.classList.add("flipped");
    toast("🙃 Siden stod lidt på hovedet, men nu er gaven reserveret. (Ingen rigtig reservation.)");
    setTimeout(() => document.body.classList.remove("flipped"), 2600);
  }

  // ===== Share =====
  $("#share").addEventListener("click", () => {
    navigator.clipboard.writeText(location.href).then(
      () => toast("Linket er kopieret. Send det til familien!"),
      () => toast("Kopiér linket fra adresselinjen.")
    );
  });
})();
