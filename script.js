(function () {
  "use strict";
  const P = window.PROFILE || PROFILE;
  const $ = (id) => document.getElementById(id);
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;

  const ICONS = {
    github: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
    scholar: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.84 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.16 4.44L24 9.5z"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z"/></svg>',
    email: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>',
    paper: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/></svg>',
  };

  /* =============================== CONTENT =============================== */
  document.title = `${P.name} — ${P.roles[0]}`;
  $("handle").textContent = `@${P.handle}`;
  $("status").textContent = P.status;
  $("intro").textContent = P.intro;
  $("footerName").textContent = P.name;
  $("year").textContent = new Date().getFullYear();

  // Stats
  $("stats").innerHTML = P.stats
    .map((s) => `<div class="stat"><div class="stat__value grad" data-count="${s.value}" data-suffix="${esc(s.suffix)}" data-plain="${s.plain ? 1 : 0}">${s.plain ? s.value : 0}${esc(s.suffix)}</div><div class="stat__label">${esc(s.label)}</div></div>`)
    .join("");

  // About (paragraphs may contain <b> — content is your own, so HTML is allowed here)
  $("aboutText").innerHTML = P.about.map((p) => `<p>${p}</p>`).join("");
  $("interests").innerHTML = P.interests.map((i) => `<li>${esc(i)}</li>`).join("");
  $("facts").innerHTML = P.facts.map((f) => `<li><span>${esc(f.label)}</span><span>${esc(f.value)}</span></li>`).join("");

  // Featured — with an animated search-tree illustration
  const treeSvg = () => {
    const nodes = [
      [200, 40], [90, 110], [200, 110], [310, 110],
      [50, 180], [125, 180], [170, 180], [235, 180], [290, 180], [350, 180],
      [150, 250], [200, 250], [260, 250],
    ];
    const edges = [[0, 1], [0, 2], [0, 3], [1, 4], [1, 5], [2, 6], [2, 7], [3, 8], [3, 9], [6, 10], [7, 11], [7, 12]];
    const hot = new Set(["0-2", "2-7", "7-11"]);
    const hotNodes = new Set([0, 2, 7]);
    const e = edges.map(([a, b]) => {
      const [x1, y1] = nodes[a], [x2, y2] = nodes[b];
      const my = (y1 + y2) / 2;
      return `<path class="tree-edge${hot.has(a + "-" + b) ? " hot" : ""}" d="M${x1} ${y1} C ${x1} ${my}, ${x2} ${my}, ${x2} ${y2}"/>`;
    }).join("");
    const n = nodes.map(([x, y], i) =>
      i === 11
        ? `<circle class="tree-halo" cx="${x}" cy="${y}" r="9"/><circle class="tree-node leaf" cx="${x}" cy="${y}" r="9"/>`
        : `<circle class="tree-node${hotNodes.has(i) ? " hot" : ""}" cx="${x}" cy="${y}" r="${hotNodes.has(i) ? 8 : 6}"/>`
    ).join("");
    return `<svg viewBox="0 0 400 290" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Monte Carlo Tree Search illustration">
      <defs><linearGradient id="edgeGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7c5cff"/><stop offset="1" stop-color="#00e0c6"/></linearGradient></defs>
      ${e}${n}</svg>`;
  };
  $("featuredList").innerHTML = P.featured
    .map(
      (f) => `<article class="feature glass glow reveal">
        <div>
          <span class="feature__badge">★ ${esc(f.badge)}</span>
          <h3 class="grad">${esc(f.title)}</h3>
          <p class="feature__subtitle">${esc(f.subtitle)}</p>
          <p class="feature__desc">${esc(f.desc)}</p>
          <ul class="tags">${f.tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
          <div class="feature__actions">
            ${f.code ? `<a class="btn btn--ghost magnetic" href="${esc(f.code)}" target="_blank" rel="noopener">${ICONS.github}<span>Code</span></a>` : ""}
            ${f.paper ? `<a class="btn btn--ghost magnetic" href="${esc(f.paper)}" target="_blank" rel="noopener">${ICONS.paper}<span>Paper</span></a>` : ""}
          </div>
        </div>
        <figure class="feature__viz" style="margin:0">${treeSvg()}<figcaption>uncertainty-aware tree search</figcaption></figure>
      </article>`
    )
    .join("");

  // Projects + filters
  const cats = ["All", ...P.categories];
  $("filters").innerHTML = cats
    .map((c, i) => {
      const n = c === "All" ? P.projects.length : P.projects.filter((p) => p.category === c).length;
      return `<button role="tab" aria-selected="${i === 0}" data-cat="${esc(c)}">${esc(c)}<span class="count">${n}</span></button>`;
    })
    .join("");
  $("projectList").innerHTML = P.projects
    .map(
      (p, i) => `<article class="project glass glow tilt reveal" data-cat="${esc(p.category)}" style="--d:${(i % 3) * 0.08}s">
        <div class="project__top">
          <span class="project__cat">${esc(p.category)}</span>
          ${p.code ? `<a class="project__link" href="${esc(p.code)}" target="_blank" rel="noopener" aria-label="Open ${esc(p.title)} on GitHub">${ICONS.arrow}</a>` : ""}
        </div>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.desc)}</p>
        <ul class="tags">${p.tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
      </article>`
    )
    .join("");
  $("filters").addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    $("filters").querySelectorAll("button").forEach((b) => b.setAttribute("aria-selected", b === btn));
    const cat = btn.dataset.cat;
    document.querySelectorAll(".project").forEach((card) => {
      const show = cat === "All" || card.dataset.cat === cat;
      card.classList.toggle("hidden", !show);
      if (show && !reduce) card.animate([{ opacity: 0, transform: "translateY(16px) scale(.98)" }, { opacity: 1, transform: "none" }], { duration: 420, easing: "cubic-bezier(.2,.8,.2,1)" });
    });
  });

  // Skills
  const allSkills = P.skills.flatMap((g) => g.items);
  const marqueeItems = allSkills.map((s) => `<span>${esc(s)}</span>`).join("");
  $("marquee").innerHTML = marqueeItems + marqueeItems; // duplicated for a seamless loop
  $("skillGroups").innerHTML = P.skills
    .map(
      (g, i) => `<div class="skill glass glow reveal" style="--d:${i * 0.08}s">
        <h3><i></i>${esc(g.group)}</h3>
        <ul>${g.items.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
      </div>`
    )
    .join("");

  // Journey
  $("timeline").innerHTML =
    '<span class="timeline__line" id="tlLine"></span>' +
    P.journey
      .map(
        (j) => `<li class="timeline__item reveal">
          <span class="timeline__dot"></span>
          <span class="timeline__time">${esc(j.time)}</span>
          <h3>${esc(j.title)}</h3>
          <span class="timeline__place">${esc(j.place)}</span>
          <p>${esc(j.desc)}</p>
        </li>`
      )
      .join("");

  // Contact + socials
  const c = P.contact;
  $("contactText").textContent = c.text;
  $("contactBtn").href = `mailto:${c.email}`;
  const socials = [
    ["github", c.github, "GitHub"],
    ["linkedin", c.linkedin, "LinkedIn"],
    ["scholar", c.scholar, "Google Scholar"],
    ["facebook", c.facebook, "Facebook"],
    ["email", c.email && `mailto:${c.email}`, "Email"],
  ].filter(([, url]) => url);
  const socialHtml = socials
    .map(([k, url, label]) => `<a class="magnetic" href="${esc(url)}" ${k === "email" ? "" : 'target="_blank" rel="noopener"'} aria-label="${label}" title="${label}">${ICONS[k]}</a>`)
    .join("");
  $("heroSocial").innerHTML = socialHtml;
  $("contactLinks").innerHTML = socialHtml;

  /* =============================== EFFECTS =============================== */

  // Name: decode / scramble effect
  const nameEl = $("name");
  const scramble = (el, text) => {
    if (reduce) { el.textContent = text; return; }
    const glyphs = "!<>-_\\/[]{}—=+*^?#01ABXYZ";
    let frame = 0;
    const total = 38;
    const tick = () => {
      el.textContent = text
        .split("")
        .map((ch, i) => {
          if (ch === " ") return " ";
          const reveal = (i / text.length) * total * 0.7 + 8;
          return frame >= reveal ? ch : glyphs[(Math.random() * glyphs.length) | 0];
        })
        .join("");
      if (++frame <= total) requestAnimationFrame(tick);
      else el.textContent = text;
    };
    tick();
  };
  nameEl.setAttribute("aria-label", P.name);
  setTimeout(() => scramble(nameEl, P.name), 250);

  // Role typing effect
  const roleEl = $("role");
  if (reduce || P.roles.length < 2) roleEl.textContent = P.roles[0];
  else {
    let r = 0, i = 0, deleting = false;
    (function type() {
      const word = P.roles[r];
      i += deleting ? -1 : 1;
      roleEl.textContent = word.slice(0, i);
      let delay = deleting ? 30 : 65;
      if (!deleting && i === word.length) { deleting = true; delay = 1800; }
      else if (deleting && i === 0) { deleting = false; r = (r + 1) % P.roles.length; delay = 350; }
      setTimeout(type, delay);
    })();
  }

  // Reveal on scroll + count-up stats
  const countUp = (el) => {
    const target = +el.dataset.count, suffix = el.dataset.suffix;
    if (el.dataset.plain === "1" || reduce) { el.textContent = target + suffix; return; }
    const t0 = performance.now(), dur = 1400;
    const step = (t) => {
      const p = Math.min((t - t0) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduce) {
    document.querySelectorAll(".hero .reveal").forEach((el, i) => el.style.setProperty("--d", `${0.1 + i * 0.1}s`));
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          en.target.classList.add("shown");
          en.target.querySelectorAll("[data-count]").forEach(countUp);
          io.unobserve(en.target);
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("shown"));
    document.querySelectorAll("[data-count]").forEach(countUp);
  }

  // Scroll: progress bar, nav state, active link, timeline fill
  const nav = $("nav"), progress = $("progress"), tl = $("timeline"), tlLine = $("tlLine");
  const navLinks = [...document.querySelectorAll(".nav__links a")];
  const sections = navLinks.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  const tlItems = [...tl.querySelectorAll(".timeline__item")];
  let ticking = false;
  const onScroll = () => {
    const y = window.scrollY, h = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
    nav.classList.toggle("scrolled", y > 20);
    let current = null;
    sections.forEach((s) => { if (s.getBoundingClientRect().top < innerHeight * 0.4) current = s.id; });
    navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${current}`));
    const r = tl.getBoundingClientRect();
    const fill = Math.max(0, Math.min(r.height - 16, innerHeight * 0.6 - r.top));
    tlLine.style.height = `${fill}px`;
    tlItems.forEach((it) => it.classList.toggle("lit", it.offsetTop + 10 <= fill));
    ticking = false;
  };
  window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();

  // Mobile menu
  const menuBtn = $("menuToggle"), links = $("navLinks");
  menuBtn.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });
  links.addEventListener("click", (e) => {
    if (e.target.tagName === "A") { links.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
  });

  // Pointer effects: spotlight, card glow, tilt, magnetic buttons
  if (finePointer && !reduce) {
    const root = document.documentElement;
    window.addEventListener("pointermove", (e) => {
      root.style.setProperty("--mx", e.clientX + "px");
      root.style.setProperty("--my", e.clientY + "px");
    }, { passive: true });

    document.querySelectorAll(".glow").forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--x", e.clientX - r.left + "px");
        el.style.setProperty("--y", e.clientY - r.top + "px");
      });
    });

    document.querySelectorAll(".tilt").forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transition = "transform 0.1s";
        el.style.transform = `rotateX(${(-py * 8).toFixed(2)}deg) rotateY(${(px * 8).toFixed(2)}deg) translateY(-4px)`;
      });
      el.addEventListener("pointerleave", () => { el.style.transition = ""; el.style.transform = ""; });
    });

    document.querySelectorAll(".magnetic").forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${dx * 0.18}px, ${dy * 0.28}px)`;
      });
      el.addEventListener("pointerleave", () => { el.style.transform = ""; });
    });
  }

  // Particle network background
  const canvas = $("bg"), ctx = canvas.getContext("2d");
  let W, H, dpr, particles = [];
  const mouse = { x: -9999, y: -9999 };
  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = innerWidth; H = innerHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(90, Math.floor((W * H) / 16000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.4 + 0.4,
      hue: Math.random() < 0.5 ? "124,92,255" : "0,224,198",
    }));
  };
  const draw = () => {
    ctx.clearRect(0, 0, W, H);
    const LINK = 130;
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      if (!reduce) {
        const dx = mouse.x - p.x, dy = mouse.y - p.y, d2 = dx * dx + dy * dy;
        if (d2 < 160 * 160) { p.vx += dx * 0.00003; p.vy += dy * 0.00003; }
        p.vx *= 0.995; p.vy *= 0.995;
        p.x += p.vx + Math.sign(p.vx) * 0.05; p.y += p.vy + Math.sign(p.vy) * 0.05;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.hue},0.8)`;
      ctx.fill();
      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const dx = p.x - q.x, dy = p.y - q.y, d = Math.hypot(dx, dy);
        if (d < LINK) {
          ctx.strokeStyle = `rgba(150,140,255,${(1 - d / LINK) * 0.16})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
        }
      }
      const md = Math.hypot(mouse.x - p.x, mouse.y - p.y);
      if (md < 180) {
        ctx.strokeStyle = `rgba(0,224,198,${(1 - md / 180) * 0.35})`;
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
      }
    }
  };
  let running = true;
  const loop = () => { if (running) { draw(); requestAnimationFrame(loop); } };
  resize();
  if (reduce) draw();
  else {
    loop();
    document.addEventListener("visibilitychange", () => {
      running = !document.hidden;
      if (running) loop();
    });
  }
  window.addEventListener("resize", () => { resize(); if (reduce) draw(); });
  window.addEventListener("pointermove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
  document.addEventListener("pointerleave", () => { mouse.x = mouse.y = -9999; });
})();
