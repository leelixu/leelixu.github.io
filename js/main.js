// 锚链接平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// 阅读进度条（可选）
// 在 header 中添加 <div id="progress"></div> 即可启用
const progress = document.getElementById('progress');
if (progress) {
  Object.assign(progress.style, {
    position: 'fixed', top: 0, left: 0, height: '2px',
    background: 'var(--text)', zIndex: 1000, width: '0', opacity: '0.4',
    transition: 'width 0.1s linear'
  });
  document.addEventListener('scroll', () => {
    const h = document.documentElement;
    const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    progress.style.width = pct + '%';
  });
}