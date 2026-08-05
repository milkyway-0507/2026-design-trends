export function showToast(msg: string) {
  const el = document.createElement('div');
  el.textContent = msg;
  el.style.cssText = `
    position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
    background: #1a1a1a; color: #F2F2F2; font-size: 13px; font-weight: 500;
    padding: 10px 18px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);
    z-index: 9999; pointer-events: none;
    animation: toast-in 0.2s ease-out;
  `;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 3000);
}
