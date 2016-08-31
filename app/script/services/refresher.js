import 'whatwg-fetch';

function getVersion() {
  return fetch('version.txt').then((data) => data.text())
}

export default function refresher(interval) {
  getVersion()
    .then((time) => {
      setInterval(() => {
        getVersion().then((newTime) => {
          if (newTime !== time) {
            window.location.reload();
          }
        });
      }, interval);
    });
}
