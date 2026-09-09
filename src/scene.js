const THREE_URL =
  "https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js";

function seededRandom(seed = 2703) {
  let value = seed >>> 0;
  return () => {
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 4294967296;
  };
}

export async function createWorld(canvas, { reducedMotion }) {
  if (!canvas) return false;

  let THREE;
  try {
    THREE = await import(THREE_URL);
  } catch (error) {
    console.warn("El paisaje 3D no pudo cargarse.", error);
    return false;
  }

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false,
      powerPreference: "high-performance",
      stencil: false,
      depth: true,
    });
  } catch (error) {
    console.warn("WebGL no está disponible.", error);
    return false;
  }

  const random = seededRandom();
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 80);
  const world = new THREE.Group();
  const mountains = new THREE.Group();
  const trees = new THREE.Group();
  const contourRings = new THREE.Group();
  const birds = [];
  const dummy = new THREE.Object3D();

  scene.fog = new THREE.FogExp2(0x071820, 0.027);
  camera.position.set(0, 5.4, 22);
  camera.lookAt(0, 0, -7);
  scene.add(world);

  renderer.setClearColor(0x06141b, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.08;

  scene.add(new THREE.HemisphereLight(0xb8ead9, 0x071217, 2.7));

  const keyLight = new THREE.DirectionalLight(0xf4dfa1, 3.8);
  keyLight.position.set(9, 12, 5);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0x47bcb7, 1.5);
  fillLight.position.set(-11, 4, 5);
  scene.add(fillLight);

  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(90, 70, 1, 1),
    new THREE.MeshLambertMaterial({
      color: 0x0a252a,
    }),
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.set(0, -5.05, -12);
  world.add(ground);

  const sunMaterial = new THREE.MeshBasicMaterial({
    color: 0xf4dfa1,
    fog: false,
  });
  const sun = new THREE.Mesh(
    new THREE.IcosahedronGeometry(3.3, 1),
    sunMaterial,
  );
  sun.position.set(9.5, 7.8, -24);
  world.add(sun);

  const haloMaterial = new THREE.MeshBasicMaterial({
    color: 0xf4dfa1,
    transparent: true,
    opacity: 0.08,
    side: THREE.DoubleSide,
    depthWrite: false,
    fog: false,
  });
  const halo = new THREE.Mesh(new THREE.RingGeometry(4, 6.6, 32), haloMaterial);
  halo.position.copy(sun.position);
  world.add(halo);

  const mountainPalette = [0x164643, 0x1a554c, 0x216254, 0x0f3639, 0x0a2c32];
  const mountainLayout = [
    [-17, -0.5, -26, 10, 15],
    [-10, -1.8, -19, 8, 11],
    [-4, 0.2, -28, 12, 17],
    [3, -1.2, -21, 9, 13],
    [10, 0.1, -29, 13, 18],
    [17, -1.6, -22, 9, 12],
    [23, -0.2, -30, 12, 17],
  ];

  mountainLayout.forEach(([x, y, z, radius, height], index) => {
    const geometry = new THREE.ConeGeometry(radius, height, 5, 1, false);
    geometry.rotateY((index % 2) * 0.32);
    const material = new THREE.MeshLambertMaterial({
      color: mountainPalette[index % mountainPalette.length],
      flatShading: true,
    });
    const mountain = new THREE.Mesh(geometry, material);
    mountain.position.set(x, y - 5 + height / 2, z);
    mountain.rotation.y = random() * Math.PI;
    mountains.add(mountain);
  });
  world.add(mountains);

  const ridgeMaterial = new THREE.MeshBasicMaterial({
    color: 0x4a8e79,
    transparent: true,
    opacity: 0.16,
    wireframe: true,
  });
  const ridge = new THREE.Mesh(
    new THREE.ConeGeometry(17, 22, 6, 3),
    ridgeMaterial,
  );
  ridge.position.set(-3, 2.4, -33);
  ridge.rotation.y = 0.4;
  world.add(ridge);

  const contourMaterial = new THREE.MeshBasicMaterial({
    color: 0x9fe8c7,
    transparent: true,
    opacity: 0.13,
    depthWrite: false,
  });
  const contourLayout = [
    [-11, 4, -13, 2.6],
    [13, 1, -19, 4.2],
    [-7, 8, -27, 3.4],
    [8, 10, -35, 5.2],
  ];

  contourLayout.forEach(([x, y, z, radius], index) => {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(radius, 0.018, 4, 48),
      contourMaterial,
    );
    ring.position.set(x, y, z);
    ring.rotation.set(0.55 + index * 0.2, index * 0.7, index * 0.35);
    ring.userData = { baseX: x, baseY: y, baseZ: z, phase: index * 1.3 };
    contourRings.add(ring);
  });
  world.add(contourRings);

  const treeCount = 28;
  const trunkGeometry = new THREE.CylinderGeometry(0.08, 0.13, 0.8, 5);
  const crownGeometry = new THREE.ConeGeometry(0.7, 2.2, 6);
  const trunkMaterial = new THREE.MeshLambertMaterial({
    color: 0x16302b,
  });
  const crownMaterial = new THREE.MeshLambertMaterial({
    flatShading: true,
  });
  const trunkMesh = new THREE.InstancedMesh(
    trunkGeometry,
    trunkMaterial,
    treeCount,
  );
  const crownMesh = new THREE.InstancedMesh(
    crownGeometry,
    crownMaterial,
    treeCount,
  );
  const crownColors = [0x2c7562, 0x38826c, 0x1f6559];
  const color = new THREE.Color();

  for (let index = 0; index < treeCount; index += 1) {
    const scale = 0.55 + random() * 1.1;
    const side = random() > 0.5 ? 1 : -1;
    const x = side * (5 + random() * 18);
    const z = -5 - random() * 23;
    const rotationY = random() * Math.PI;

    dummy.position.set(x, -5 + 0.4 * scale, z);
    dummy.rotation.set(0, rotationY, 0);
    dummy.scale.setScalar(scale);
    dummy.updateMatrix();
    trunkMesh.setMatrixAt(index, dummy.matrix);

    dummy.position.set(x, -5 + 1.65 * scale, z);
    dummy.updateMatrix();
    crownMesh.setMatrixAt(index, dummy.matrix);
    crownMesh.setColorAt(index, color.setHex(crownColors[index % 3]));
  }

  trunkMesh.instanceMatrix.needsUpdate = true;
  crownMesh.instanceMatrix.needsUpdate = true;
  if (crownMesh.instanceColor) crownMesh.instanceColor.needsUpdate = true;
  trees.add(trunkMesh, crownMesh);
  world.add(trees);

  const starCount = 160;
  const starPositions = new Float32Array(starCount * 3);
  for (let index = 0; index < starCount; index += 1) {
    starPositions[index * 3] = (random() - 0.5) * 65;
    starPositions[index * 3 + 1] = random() * 28 - 2;
    starPositions[index * 3 + 2] = -15 - random() * 35;
  }
  const starGeometry = new THREE.BufferGeometry();
  starGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(starPositions, 3),
  );
  const stars = new THREE.Points(
    starGeometry,
    new THREE.PointsMaterial({
      color: 0xb9e9d6,
      size: 0.04,
      transparent: true,
      opacity: 0.48,
      sizeAttenuation: true,
    }),
  );
  world.add(stars);

  const birdMaterial = new THREE.MeshBasicMaterial({
    color: 0xb9e9d6,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.72,
  });

  function makeWing(direction) {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(
        [0, 0, 0, direction * 0.85, 0.12, 0, direction * 0.42, -0.15, 0.08],
        3,
      ),
    );
    geometry.computeVertexNormals();
    return new THREE.Mesh(geometry, birdMaterial);
  }

  for (let index = 0; index < 5; index += 1) {
    const bird = new THREE.Group();
    bird.add(makeWing(-1), makeWing(1));
    bird.position.set(
      -9 + index * 3.2,
      5.5 + (index % 2) * 1.2,
      -12 - index * 1.8,
    );
    bird.scale.setScalar(0.45 + index * 0.05);
    bird.userData = {
      originX: bird.position.x,
      originY: bird.position.y,
      phase: index * 0.9,
      speed: 0.22 + index * 0.018,
    };
    birds.push(bird);
    world.add(bird);
  }

  const pointer = new THREE.Vector2();
  const pointerTarget = new THREE.Vector2();
  let scrollTarget = 0;
  let scrollCurrent = 0;
  let running = true;
  let frameId;
  let lastFrame = 0;
  const minFrameMs = 1000 / 45;

  function onPointerMove(event) {
    pointerTarget.x = (event.clientX / window.innerWidth - 0.5) * 2;
    pointerTarget.y = (event.clientY / window.innerHeight - 0.5) * 2;
  }

  function onScroll() {
    const maxScroll = Math.max(
      document.documentElement.scrollHeight - window.innerHeight,
      1,
    );
    scrollTarget = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
  }

  function resize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    camera.aspect = width / height;
    camera.fov = width < 720 ? 48 : 38;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.35));
    renderer.setSize(width, height, false);
    renderer.render(scene, camera);
  }

  function render(time = 0) {
    if (!running) return;

    frameId = requestAnimationFrame(render);
    if (time - lastFrame < minFrameMs) return;
    lastFrame = time;

    const seconds = time * 0.001;
    pointer.lerp(pointerTarget, 0.035);
    scrollCurrent += (scrollTarget - scrollCurrent) * 0.035;

    const journey = scrollCurrent;
    const wave = Math.sin(journey * Math.PI * 2);
    const cameraTargetX = wave * 3.4 + pointer.x * 1.1;
    const cameraTargetY =
      5.4 + journey * 2.4 + Math.sin(journey * Math.PI * 4) * 0.75;
    const cameraTargetZ = 22 - journey * 10.5;

    camera.position.x += (cameraTargetX - camera.position.x) * 0.026;
    camera.position.y +=
      (cameraTargetY - pointer.y * 0.5 - camera.position.y) * 0.026;
    camera.position.z += (cameraTargetZ - camera.position.z) * 0.026;
    camera.lookAt(
      wave * -1.4 + pointer.x * 0.6,
      -journey * 1.5,
      -7 - journey * 10,
    );

    world.rotation.y = pointer.x * 0.025 + wave * 0.018;
    mountains.position.x = pointer.x * -0.65 - wave * 1.8;
    mountains.rotation.y = journey * 0.11;
    trees.position.x = pointer.x * -1.15 + wave * 1.25;
    trees.rotation.y = -journey * 0.16;
    stars.rotation.y = seconds * 0.006 + journey * 0.22;
    stars.position.y = journey * 3.5;
    ridge.rotation.y = 0.4 + journey * 0.7;
    ridge.rotation.z = wave * 0.06;

    sun.position.x = 9.5 - journey * 17;
    sun.position.y = 7.8 + Math.sin(journey * Math.PI) * 7 - journey * 2.5;
    sun.rotation.y = seconds * 0.035 + journey * Math.PI;
    halo.position.copy(sun.position);
    halo.quaternion.copy(camera.quaternion);
    halo.rotation.z += seconds * 0.0001;
    halo.scale.setScalar(1 + Math.sin(journey * Math.PI) * 0.45);

    scene.fog.density = 0.027 + Math.sin(journey * Math.PI) * 0.009;
    keyLight.intensity = 3.8 + Math.sin(journey * Math.PI) * 2.2;

    contourRings.children.forEach((ring, index) => {
      const data = ring.userData;
      const passage = (journey * 42 + index * 11) % 48;
      ring.position.x = data.baseX + wave * (index % 2 ? -2 : 2);
      ring.position.y =
        data.baseY + Math.sin(seconds * 0.35 + data.phase) * 0.8;
      ring.position.z = data.baseZ + passage;
      ring.rotation.x += 0.0007 + journey * 0.001;
      ring.rotation.y += 0.0012;
      ring.scale.setScalar(0.75 + passage / 60);
    });

    birds.forEach((bird, index) => {
      const data = bird.userData;
      bird.position.x =
        data.originX +
        ((seconds * data.speed * 4 + index + journey * 14) % 20) -
        10;
      bird.position.y =
        data.originY +
        Math.sin(seconds * 1.2 + data.phase) * 0.32 +
        journey * 2.5;
      bird.position.z = -12 - index * 1.8 + journey * 7;
      bird.children[0].rotation.z = Math.sin(seconds * 5 + data.phase) * 0.24;
      bird.children[1].rotation.z = -Math.sin(seconds * 5 + data.phase) * 0.24;
    });

    renderer.render(scene, camera);
  }

  function handleVisibility() {
    running = !document.hidden;
    if (running && !reducedMotion.matches) {
      cancelAnimationFrame(frameId);
      lastFrame = 0;
      frameId = requestAnimationFrame(render);
    }
  }

  resize();
  onScroll();
  window.addEventListener("resize", resize, { passive: true });

  if (reducedMotion.matches) {
    renderer.render(scene, camera);
  } else {
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);
    frameId = requestAnimationFrame(render);
  }

  return true;
}
