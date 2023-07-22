// 这段代码用于注册 Service Worker
// 在默认情况下，不会调用 register() 方法。

// 这样做可以让应用在生产环境中更快地加载，并提供离线功能。
// 但是，这也意味着开发者（以及用户）只有在访问页面时才会看到部署的更新，
// 在页面的所有已打开标签页被关闭后，之前缓存的资源才会在后台更新。

// 若要了解更多这种模型的好处和如何选择加入，请阅读 https://bit.ly/CRA-PWA

// 判断当前页面是否在本地运行（localhost 或者 127.0.0.0/8）
const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);

// 注册一个有效的 Service Worker
function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      // 当 Service Worker 更新时触发
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // 在这个时候，已更新的预缓存内容已经被获取，
              // 但是之前的 Service Worker 仍然会提供旧的内容，
              // 直到所有客户端标签页都被关闭。
              console.log('新内容已可用，将在关闭此页面的所有标签页后生效。请参阅 https://bit.ly/CRA-PWA.');

              // 执行回调函数
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              // 在这个时候，所有内容都已经预缓存。
              // 此时可以显示一个 "内容已缓存，可供离线使用。" 的提示消息。
              console.log('内容已缓存，可供离线使用。');

              // 执行回调函数
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch((error) => {
      console.error('Service Worker 注册时发生错误:', error);
    });
}

// 检查有效的 Service Worker
function checkValidServiceWorker(swUrl, config) {
  // 检查 Service Worker 是否存在。如果不存在，则重新加载页面。
  fetch(swUrl, {
    headers: { 'Service-Worker': 'script' }
  })
    .then((response) => {
      // 确保 Service Worker 存在，并且我们确实获取到一个 JS 文件。
      const contentType = response.headers.get('content-type');
      if (response.status === 404 || (contentType != null && contentType.indexOf('javascript') === -1)) {
        // 没有找到 Service Worker。可能是另一个应用程序。重新加载页面。
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // 找到 Service Worker。继续正常操作。
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log('未找到互联网连接。应用正在离线模式下运行。');
    });
}

// 导出 register 函数，用于注册 Service Worker
export function register(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // URL 构造函数在支持 SW 的所有浏览器中可用。
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      // 如果 PUBLIC_URL 和页面所在的 origin 不同，我们的 Service Worker 将无法工作。
      // 这可能会发生在使用 CDN 服务提供资产的情况下。
      // 参见 https://github.com/facebook/create-react-app/issues/2374
      return;
    }

    // 监听页面加载事件
    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // 如果当前页面在本地运行（localhost），则检查 Service Worker 是否仍然存在。
        checkValidServiceWorker(swUrl, config);

        // 在本地环境下添加额外的日志，引导开发者去了解 Service Worker / PWA 文档。
        navigator.serviceWorker.ready.then(() => {
          console.log('此 Web 应用正在通过 Service Worker 实现缓存优先。欲了解更多，请访问 https://bit.ly/CRA-PWA');
        });
      } else {
        // 如果不是本地运行，则仅注册 Service Worker。
        registerValidSW(swUrl, config);
      }
    });
  }
}

// 导出 unregister 函数，用于取消注册 Service Worker
export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}
