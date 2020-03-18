export default (api, opts) => {
  if (process.env.NODE_ENV !== "production" || !opts) {
    return false;
  }
  if (opts.judge && !opts.judge()) {
    return false;
  }
  api.log.success("insert google analytics");
  const gaTpl = function(code) {
    return `
    (function(){ 
      var script = document.createElement('script');
      script.src = 'https://www.googletagmanager.com/gtag/js?id=${code}';
      script.async = true;
      script.onload = function() {
        window.dataLayer = window.dataLayer || [];
        window.gtag = () => {
          window.dataLayer.push(arguments);
        };
        window.gtag('js', new Date());
        window.gtag('config', '${code}');
      };
      document.getElementsByTagName('head')[0].appendChild(script);
    })();
  `;
  };
  api.addHTMLScript({
    content: gaTpl(opts.code)
  });
};
