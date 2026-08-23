// ===== Helpers =====
function gameBySlug(slug) {
  return GAMES.find(g => g.slug === slug);
}

function statusClass(status) {
  if (/shipped/i.test(status)) return "shipped";
  if (/wip|progress/i.test(status)) return "wip";
  return "";
}

function buildMediaList(game) {
  // images numbered 01..imageCount already include video posters at the tail
  const items = [];
  const imgPad = n => String(n).padStart(2, "0");
  const videoFiles = [];
  if (game.video) {
    // figure out actual filenames: gifNN.mp4 or fullNN.mp4 - we probe both patterns client-side via <video> fallback isn't easy,
    // so we encode explicit video file lists per game below.
  }
  for (let i = 1; i <= game.imageCount; i++) {
    items.push({ type: "image", src: `assets/img/${game.slug}/${imgPad(i)}.jpg` });
  }
  return items;
}

// Explicit video file mapping (slug -> array of video src paths, matched to trailing poster images)
const VIDEO_FILES = {
  "locked-in-nonsense": ["assets/video/locked-in-nonsense/gif01.mp4", "assets/video/locked-in-nonsense/gif02.mp4"],
  "tanks": ["assets/video/tanks/full01.mp4"],
  "shootemup-64": ["assets/video/shootemup-64/full01.mp4"],
  "slowmo-kenr": ["assets/video/slowmo-kenr/gif01.mp4"],
  "twbg": ["assets/video/twbg/gif01.mp4"]
};

function buildFullMedia(game) {
  const items = buildMediaList(game);
  const vids = VIDEO_FILES[game.slug] || [];
  if (vids.length) {
    // last N images are posters for the videos, in order
    const posterStartIndex = items.length - vids.length;
    vids.forEach((vidSrc, idx) => {
      const posterItem = items[posterStartIndex + idx];
      items[posterStartIndex + idx] = {
        type: "video",
        src: vidSrc,
        poster: posterItem.src
      };
    });
  }
  return items;
}

// ===== Render: grid =====
function renderGrid() {
  const grid = document.getElementById("grid");
  grid.innerHTML = GAMES.map(g => `
    <a class="card" href="#/game/${g.slug}" data-slug="${g.slug}">
      <div class="thumb">
        <span class="status-chip ${statusClass(g.status)}">${g.status}</span>
        <img src="assets/img/${g.slug}/${g.cover}" alt="${g.title}" loading="lazy">
      </div>
      <div class="body">
        <h3>${g.title}</h3>
        <p class="hook">${g.hook}</p>
        <div class="tags">${g.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
      </div>
    </a>
  `).join("");
}

// ===== Render: detail =====
let currentMedia = [];
let currentMediaIndex = 0;

function renderDetail(slug) {
  const g = gameBySlug(slug);
  if (!g) { location.hash = "#/"; return; }

  currentMedia = buildFullMedia(g);
  currentMediaIndex = 0;

  const detail = document.getElementById("detail");
  detail.innerHTML = `
    <div class="wrap">
      <button class="back-link" onclick="location.hash='#/'">&larr; All projects</button>
      <div class="detail-hero">
        <div class="hud-row">
          <span><b>${g.engine}</b></span><span class="dot">&middot;</span>
          <span>${g.team}</span><span class="dot">&middot;</span>
          <span>${g.year}</span><span class="dot">&middot;</span>
          <span>${g.status}</span>
        </div>
        <h1>${g.title}</h1>
        <p class="hook">${g.hook}</p>
        ${g.links.length ? `<div class="detail-links">${g.links.map(l => `<a class="pill-link primary" href="${l.url}" target="_blank" rel="noopener">View on ${l.label} &rarr;</a>`).join("")}</div>` : ""}
      </div>

      <div class="media-main" id="mediaMain"></div>
      <div class="thumbstrip" id="thumbstrip"></div>

      <div class="detail-columns">
        <div>
          <h4>About the project</h4>
          ${g.description.map(p => `<p>${p}</p>`).join("")}
        </div>
        <div>
          <div class="meta-box">
            <div class="meta-row"><span class="k">Role</span><span class="v">${g.role}</span></div>
            <div class="meta-row"><span class="k">Engine</span><span class="v">${g.engine}</span></div>
            <div class="meta-row"><span class="k">Team</span><span class="v">${g.team}</span></div>
            <div class="meta-row"><span class="k">Status</span><span class="v">${g.status}</span></div>
          </div>
          <h4>Highlights</h4>
          <ul class="highlight-list">
            ${g.highlights.map(h => `<li>${h}</li>`).join("")}
          </ul>
        </div>
      </div>
    </div>
  `;

  renderMainMedia();
  renderThumbstrip();
}

function renderMainMedia() {
  const main = document.getElementById("mediaMain");
  const item = currentMedia[currentMediaIndex];
  if (!item) return;
  if (item.type === "video") {
    main.innerHTML = `<video src="${item.src}" poster="${item.poster}" controls muted loop playsinline></video>`;
  } else {
    main.innerHTML = `<img src="${item.src}" alt="">`;
  }
  main.onclick = () => openLightbox(currentMediaIndex);
}

function renderThumbstrip() {
  const strip = document.getElementById("thumbstrip");
  strip.innerHTML = currentMedia.map((item, i) => `
    <button class="${i === currentMediaIndex ? 'active' : ''}" data-i="${i}">
      <img src="${item.type === 'video' ? item.poster : item.src}" alt="">
      ${item.type === 'video' ? '<span class="play-badge">&#9654;</span>' : ''}
    </button>
  `).join("");
  strip.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      currentMediaIndex = parseInt(btn.dataset.i, 10);
      renderMainMedia();
      strip.querySelectorAll("button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
}

// ===== Lightbox =====
function openLightbox(index) {
  currentMediaIndex = index;
  const lb = document.getElementById("lightbox");
  lb.classList.add("active");
  renderLightboxMedia();
}
function closeLightbox() {
  document.getElementById("lightbox").classList.remove("active");
  document.getElementById("lightboxContent").innerHTML = "";
}
function renderLightboxMedia() {
  const content = document.getElementById("lightboxContent");
  const item = currentMedia[currentMediaIndex];
  if (item.type === "video") {
    content.innerHTML = `<video src="${item.src}" controls autoplay loop playsinline></video>`;
  } else {
    content.innerHTML = `<img src="${item.src}" alt="">`;
  }
  renderThumbstrip();
}
function lightboxNav(dir) {
  currentMediaIndex = (currentMediaIndex + dir + currentMedia.length) % currentMedia.length;
  renderLightboxMedia();
  renderMainMedia();
}

// ===== Router =====
function router() {
  const hash = location.hash || "#/";
  const homeView = document.getElementById("homeView");
  const detail = document.getElementById("detail");

  const match = hash.match(/^#\/game\/(.+)$/);
  if (match) {
    homeView.classList.add("hidden");
    detail.classList.add("active");
    renderDetail(match[1]);
    window.scrollTo(0, 0);
  } else {
    homeView.classList.remove("hidden");
    detail.classList.remove("active");
    window.scrollTo(0, 0);
  }
}

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", () => {
  renderGrid();
  router();

  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightboxPrev").addEventListener("click", () => lightboxNav(-1));
  document.getElementById("lightboxNext").addEventListener("click", () => lightboxNav(1));
  document.getElementById("lightbox").addEventListener("click", (e) => {
    if (e.target.id === "lightbox") closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (!document.getElementById("lightbox").classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") lightboxNav(-1);
    if (e.key === "ArrowRight") lightboxNav(1);
  });
});
