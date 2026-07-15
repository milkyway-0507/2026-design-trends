(function () {
  try {
    var STORAGE_KEY = 'theme-preference';
    var stored = localStorage.getItem(STORAGE_KEY);
    var resolved =
      stored === 'light' || stored === 'dark'
        ? stored
        : matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light';

    document.documentElement.setAttribute('data-theme', resolved);
    document.documentElement.style.colorScheme = resolved;

    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.setAttribute('data-reduced-motion', 'true');
    }
  } catch (e) {
    /* localStorage unavailable — fall through to CSS defaults */
  }
})();
