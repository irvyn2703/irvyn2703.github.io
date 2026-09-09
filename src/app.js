const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
const navigationLinks = [...document.querySelectorAll(".site-nav a")];
const sections = [...document.querySelectorAll("[data-section]")];
const revealItems = [...document.querySelectorAll(".reveal")];
const cursorLight = document.querySelector(".cursor-light");

document.querySelector("[data-year]").textContent = new Date().getFullYear();

function setMenu(open) {
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  navigation.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
}

menuButton.addEventListener("click", () => {
  setMenu(menuButton.getAttribute("aria-expanded") !== "true");
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

window.addEventListener(
  "scroll",
  () => header.classList.toggle("is-scrolled", window.scrollY > 32),
  { passive: true },
);

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
);

revealItems.forEach((item) => revealObserver.observe(item));

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;
    navigationLinks.forEach((link) => {
      link.classList.toggle(
        "is-active",
        link.getAttribute("href") === `#${visible.target.id}`,
      );
    });
  },
  { rootMargin: "-30% 0px -58% 0px", threshold: [0, 0.2, 0.6] },
);

sections.forEach((section) => sectionObserver.observe(section));

if (!reducedMotion.matches && window.matchMedia("(hover: hover)").matches) {
  window.addEventListener(
    "pointermove",
    ({ clientX, clientY }) => {
      cursorLight.style.left = `${clientX}px`;
      cursorLight.style.top = `${clientY}px`;
    },
    { passive: true },
  );

  document.querySelectorAll(".tilt-card").forEach((card) => {
    let frame;

    card.addEventListener("pointermove", (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = card.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        card.style.transform = `perspective(900px) rotateX(${-y * 7}deg) rotateY(${x * 9}deg) translateZ(5px)`;
      });
    });

    card.addEventListener("pointerleave", () => {
      cancelAnimationFrame(frame);
      card.style.transform = "";
    });
  });
}

const projectTrack = document.querySelector("[data-project-track]");
const projects = [...document.querySelectorAll("[data-project]")];
const currentProject = document.querySelector("[data-current-project]");

function getClosestProjectIndex() {
  const trackCenter = projectTrack.scrollLeft + projectTrack.clientWidth / 2;
  let closest = 0;
  let distance = Number.POSITIVE_INFINITY;

  projects.forEach((project, index) => {
    const center = project.offsetLeft + project.clientWidth / 2;
    const nextDistance = Math.abs(trackCenter - center);
    if (nextDistance < distance) {
      distance = nextDistance;
      closest = index;
    }
  });

  return closest;
}

function scrollToProject(index) {
  const normalized = (index + projects.length) % projects.length;
  const project = projects[normalized];
  const left =
    project.offsetLeft - (projectTrack.clientWidth - project.clientWidth) / 2;

  projectTrack.scrollTo({
    left,
    behavior: reducedMotion.matches ? "auto" : "smooth",
  });
}

document.querySelector("[data-project-prev]").addEventListener("click", () => {
  scrollToProject(getClosestProjectIndex() - 1);
});

document.querySelector("[data-project-next]").addEventListener("click", () => {
  scrollToProject(getClosestProjectIndex() + 1);
});

let projectScrollFrame;
projectTrack.addEventListener(
  "scroll",
  () => {
    cancelAnimationFrame(projectScrollFrame);
    projectScrollFrame = requestAnimationFrame(() => {
      currentProject.textContent = String(getClosestProjectIndex() + 1).padStart(
        2,
        "0",
      );
    });
  },
  { passive: true },
);

projectTrack.addEventListener("keydown", (event) => {
  if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
  event.preventDefault();
  scrollToProject(
    getClosestProjectIndex() + (event.key === "ArrowRight" ? 1 : -1),
  );
});

function canUseWorld() {
  if (reducedMotion.matches) return false;
  if (navigator.connection?.saveData) return false;

  const network = navigator.connection?.effectiveType;
  if (network === "slow-2g" || network === "2g") return false;

  const desktopPointer = window.matchMedia(
    "(hover: hover) and (pointer: fine)",
  ).matches;
  if (!desktopPointer) return false;

  if (window.innerWidth < 720) return false;

  return true;
}

function bootWorld() {
  if (!canUseWorld()) return;

  import("./scene.js")
    .then(({ createWorld }) =>
      createWorld(document.querySelector("#world"), { reducedMotion }),
    )
    .then((created) => {
      if (created) document.body.classList.remove("lite-scene");
    })
    .catch(() => {});
}

if ("requestIdleCallback" in window) {
  requestIdleCallback(bootWorld, { timeout: 1200 });
} else {
  setTimeout(bootWorld, 1);
}
