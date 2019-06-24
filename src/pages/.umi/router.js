import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import _dvaDynamic from 'dva/dynamic'

const Router = require('dva/router').routerRedux.ConnectedRouter;

const routes = [
  {
    "path": "/",
    "component": __IS_BROWSER
    ? _dvaDynamic({
      
      component: () => import(/* webpackChunkName: "layouts__index" */'../../layouts/index.jsx'),
      
    })
    : require('../../layouts/index.jsx').default,
    "routes": [
      {
        "path": "/",
        "exact": true,
        "component": __IS_BROWSER
    ? _dvaDynamic({
      
      component: () => import(/* webpackChunkName: "p__index" */'../index.js'),
      
    })
    : require('../index.js').default,
        "_title": "33tc",
        "_title_default": "33tc"
      },
      {
        "path": "/knowledge",
        "exact": true,
        "component": __IS_BROWSER
    ? _dvaDynamic({
      
      component: () => import(/* webpackChunkName: "p__knowledge__index" */'../knowledge/index.js'),
      
    })
    : require('../knowledge/index.js').default,
        "_title": "33tc",
        "_title_default": "33tc"
      },
      {
        "path": "/paas",
        "exact": true,
        "component": __IS_BROWSER
    ? _dvaDynamic({
      
      component: () => import(/* webpackChunkName: "p__paas__index" */'../paas/index.js'),
      
    })
    : require('../paas/index.js').default,
        "_title": "33tc",
        "_title_default": "33tc"
      },
      {
        "path": "/proj",
        "exact": true,
        "component": __IS_BROWSER
    ? _dvaDynamic({
      
      component: () => import(/* webpackChunkName: "p__proj__index" */'../proj/index.js'),
      
    })
    : require('../proj/index.js').default,
        "_title": "33tc",
        "_title_default": "33tc"
      },
      {
        "path": "/software",
        "exact": true,
        "component": __IS_BROWSER
    ? _dvaDynamic({
      
      component: () => import(/* webpackChunkName: "p__software__index" */'../software/index.js'),
      
    })
    : require('../software/index.js').default,
        "_title": "33tc",
        "_title_default": "33tc"
      },
      {
        "path": "/tools",
        "exact": true,
        "component": __IS_BROWSER
    ? _dvaDynamic({
      
      component: () => import(/* webpackChunkName: "p__tools__index" */'../tools/index.js'),
      
    })
    : require('../tools/index.js').default,
        "_title": "33tc",
        "_title_default": "33tc"
      },
      {
        "path": "/iaas",
        "exact": false,
        "component": __IS_BROWSER
    ? _dvaDynamic({
      
      component: () => import(/* webpackChunkName: "p__iaas___layout" */'../iaas/_layout.js'),
      
    })
    : require('../iaas/_layout.js').default,
        "routes": [
          {
            "path": "/iaas",
            "exact": true,
            "component": __IS_BROWSER
    ? _dvaDynamic({
      
      component: () => import(/* webpackChunkName: "p__iaas___layout" */'../iaas/index.js'),
      
    })
    : require('../iaas/index.js').default,
            "_title": "33tc",
            "_title_default": "33tc"
          },
          {
            "component": () => React.createElement(require('/root/Desktop/33tc/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false }),
            "_title": "33tc",
            "_title_default": "33tc"
          }
        ],
        "_title": "33tc",
        "_title_default": "33tc"
      },
      {
        "component": () => React.createElement(require('/root/Desktop/33tc/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false }),
        "_title": "33tc",
        "_title_default": "33tc"
      }
    ],
    "_title": "33tc",
    "_title_default": "33tc"
  },
  {
    "component": () => React.createElement(require('/root/Desktop/33tc/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false }),
    "_title": "33tc",
    "_title_default": "33tc"
  }
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
history.listen(routeChangeHandler);
routeChangeHandler(history.location);

export { routes };

export default function RouterWrapper(props = {}) {
  return (
<Router history={history}>
      { renderRoutes(routes, props) }
    </Router>
  );
}
