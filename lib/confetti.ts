const COLORS = [
  '#c1442e',
  '#8a2a1a',
  '#f4a261',
  '#f6c453',
  '#e76f51',
  '#2a9d8f',
  '#4cc9f0',
  '#aa96da',
  '#f38181',
  '#fff3b0',
];

type Shape = 'square' | 'circle' | 'triangle' | 'ribbon';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  rotation: number;
  rotationSpeed: number;
  shape: Shape;
  life: number;
  maxLife: number;
  opacity: number;
};

type Burst = {
  particles: Particle[];
  startedAt: number;
  duration: number;
  done: boolean;
  originX: number;
  originY: number;
};

const bursts: Burst[] = [];
let canvas: HTMLCanvasElement | null = null;
let ctx: CanvasRenderingContext2D | null = null;
let rafId: number | null = null;
let dpr = 1;
let width = 0;
let height = 0;

function ensureCanvas(): boolean {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return false;
  }
  if (canvas && ctx) {
    return true;
  }
  const c = document.createElement('canvas');
  c.setAttribute('aria-hidden', 'true');
  c.style.position = 'fixed';
  c.style.inset = '0';
  c.style.width = '100%';
  c.style.height = '100%';
  c.style.pointerEvents = 'none';
  c.style.zIndex = '9999';
  document.body.appendChild(c);
  const g = c.getContext('2d');
  if (!g) {
    document.body.removeChild(c);
    return false;
  }
  canvas = c;
  ctx = g;
  resize();
  window.addEventListener('resize', resize);
  return true;
}

function resize(): void {
  if (!canvas || !ctx) return;
  dpr = window.devicePixelRatio || 1;
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function makeParticle(originX: number, originY: number, dir: 1 | -1): Particle {
  const angle = (Math.random() * Math.PI) / 3 - Math.PI / 6;
  const speed = 6 + Math.random() * 9;
  const shapeRoll = Math.random();
  const shape: Shape =
    shapeRoll < 0.3
      ? 'square'
      : shapeRoll < 0.55
        ? 'circle'
        : shapeRoll < 0.8
          ? 'triangle'
          : 'ribbon';
  const maxLife = 90 + Math.floor(Math.random() * 80);
  return {
    x: originX,
    y: originY,
    vx: Math.cos(angle) * speed * dir,
    vy: Math.sin(angle) * speed - 4 - Math.random() * 4,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    size: 6 + Math.random() * 9,
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 18,
    shape,
    life: 0,
    maxLife,
    opacity: 1,
  };
}

function drawParticle(p: Particle): void {
  if (!ctx) return;
  ctx.save();
  ctx.translate(p.x, p.y);
  ctx.rotate((p.rotation * Math.PI) / 180);
  ctx.globalAlpha = p.opacity;
  ctx.fillStyle = p.color;

  switch (p.shape) {
    case 'square':
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      break;
    case 'circle':
      ctx.beginPath();
      ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
      ctx.fill();
      break;
    case 'triangle': {
      ctx.beginPath();
      ctx.moveTo(0, -p.size / 2);
      ctx.lineTo(p.size / 2, p.size / 2);
      ctx.lineTo(-p.size / 2, p.size / 2);
      ctx.closePath();
      ctx.fill();
      break;
    }
    case 'ribbon': {
      ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      break;
    }
  }
  ctx.restore();
}

function tick(): void {
  if (!ctx) return;
  ctx.clearRect(0, 0, width, height);

  let anyAlive = false;
  for (const burst of bursts) {
    if (burst.done) continue;
    const elapsed = performance.now() - burst.startedAt;
    for (const p of burst.particles) {
      if (p.life >= p.maxLife) continue;
      p.life += 1;
      p.vy += 0.28;
      p.vx *= 0.992;
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.rotationSpeed;
      const t = p.life / p.maxLife;
      p.opacity = t < 0.85 ? 1 : 1 - (t - 0.85) / 0.15;
      drawParticle(p);
      anyAlive = true;
    }
    if (elapsed > burst.duration) {
      burst.done = true;
    } else {
      anyAlive = true;
    }
  }

  if (anyAlive) {
    rafId = requestAnimationFrame(tick);
  } else {
    cleanup();
  }
}

function cleanup(): void {
  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
  if (canvas) {
    canvas.remove();
    canvas = null;
  }
  ctx = null;
  bursts.length = 0;
  window.removeEventListener('resize', resize);
}

function spawnBurst(originX: number, originY: number, dir: 1 | -1, count: number): void {
  if (!ensureCanvas()) return;
  const particles: Particle[] = [];
  for (let i = 0; i < count; i++) {
    particles.push(makeParticle(originX, originY, dir));
  }
  bursts.push({
    particles,
    startedAt: performance.now(),
    duration: 2400 + Math.random() * 600,
    done: false,
    originX,
    originY,
  });
  if (rafId === null) {
    rafId = requestAnimationFrame(tick);
  }
}

function centerPoint(): { x: number; y: number } {
  return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
}

export function fireConfetti(options?: { originX?: number; originY?: number }): void {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  if (!ensureCanvas()) return;
  const cx = options?.originX ?? window.innerWidth / 2;
  const cy = options?.originY ?? window.innerHeight / 2;
  spawnBurst(cx, cy, 1, 60);
  spawnBurst(cx, cy, -1, 60);
  spawnBurst(cx, cy - 60, 1, 30);
  spawnBurst(cx, cy - 60, -1, 30);
  spawnBurst(cx, cy, 1, 40);
  spawnBurst(cx, cy, -1, 40);
}

export function fireMiniConfetti(originX: number, originY: number): void {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  if (!ensureCanvas()) return;
  spawnBurst(originX, originY, 1, 18);
  spawnBurst(originX, originY, -1, 18);
  spawnBurst(originX, originY - 30, 1, 10);
  spawnBurst(originX, originY - 30, -1, 10);
}

export function fireBigConfetti(): void {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  if (!ensureCanvas()) return;
  const { x, y } = centerPoint();
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      spawnBurst(x, y, 1, 80);
      spawnBurst(x, y, -1, 80);
    }, i * 300);
  }
}
