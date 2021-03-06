# gatsby-starter-default-intl

The default Gatsby starter using `gatsby-plugin-intl` for i18n.

## Features

- Turn your gatsby site into an internationalization-framework out of the box powered by [react-intl](https://github.com/yahoo/react-intl).

- Support automatic redirection based on the user's preferred language in browser provided by [browser-lang](https://github.com/wiziple/browser-lang).

- Support multi-language url routes in a single page component. This means you don't have to create separate pages such as `pages/en/index.js` or `pages/ko/index.js`.

- Based on [gatsby-starter-default](https://github.com/gatsbyjs/gatsby-starter-default) with least modification.

## Demo

[http://gatsby-starter-default-intl.netlify.com](http://gatsby-starter-default-intl.netlify.com)

## How it works

Please visit [https://github.com/wiziple/gatsby-plugin-intl](https://github.com/wiziple/gatsby-plugin-intl) for more details.

## License

MIT &copy; [Daewoong Moon](https://github.com/wiziple)

<script>
  function initFreshChat() {
    window.fcWidget.init({
      token: "83dd2e66-e289-4709-9ba2-d2762377d3e9",
      host: "https://wchat.freshchat.com"
    });
  }
  function initialize(i,t){var e;i.getElementById(t)?initFreshChat():((e=i.createElement("script")).id=t,e.async=!0,e.src="https://wchat.freshchat.com/js/widget.js",e.onload=initFreshChat,i.head.appendChild(e))}function initiateCall(){initialize(document,"freshchat-js-sdk")}window.addEventListener?window.addEventListener("load",initiateCall,!1):window.attachEvent("load",initiateCall,!1);
</script>
