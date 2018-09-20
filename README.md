# OMG colors!

[![Build Status](https://travis-ci.org/garbados/omgcolors.svg?branch=master)](https://travis-ci.org/garbados/omgcolors)

A simple CSS demonstration which uses [@keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes) and [animation](https://developer.mozilla.org/en-US/docs/Web/CSS/animation) to create a page whose background color gently shifts across the spectrum.

You can see it in action [here](http://garbados.github.io/omgcolors/).

## Development

To hack on omgcolors yourself, fork the repository and then download the source using [git](https://git-scm.com/). You'll need [npm](https://www.npmjs.com/) to install its dependencies.

```bash
$ git clone git@github.com:garbados/omgcolors.git
$ cd omgcolors
$ npm install
$ npm start
...
   ┌───────────────────────────────────────────────┐
   │                                               │
   │   Serving!                                    │
   │                                               │
   │   - Local:            http://localhost:5000   │
   │   - On Your Network:  http://127.0.1.1:5000   │
   │                                               │
   │   Copied local address to clipboard!          │
   │                                               │
   └───────────────────────────────────────────────┘
```

The project stores its uncompiled assets under the `src/` directory, which looks like this:

- `css/`: Stylesheets. No special language, just yer ol' fren CSS.
- `mustache/`: [Mustache](https://github.com/janl/mustache.js#mustachejs---logic-less-mustache-templates-with-javascript) templates, which by default populate their variables using `package.json`.
- `static/`: Files like favicons which are not modified in any way before being moved to the build directory.

When you run a command that builds the website, like `npm start` or `npm run build`, the contents of `src/` are made ready for the web and then placed into the `public/` directory. So, `src/mustache/index.mustache` becomes `public/index.html`.

To build the website and then re-build it whenever anything in `src/` changes, use `npm run dev`:

```bash
$ npm run dev
...
   ┌───────────────────────────────────────────────┐
   │                                               │
   │   Serving!                                    │
   │                                               │
   │   - Local:            http://localhost:5000   │
   │   - On Your Network:  http://127.0.1.1:5000   │
   │                                               │
   │   Copied local address to clipboard!          │
   │                                               │
   └───────────────────────────────────────────────┘
```

## License

[GPL-3.0](https://opensource.org/licenses/GPL-3.0).
