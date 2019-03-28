import createRouter from 'router5'
import browserPlugin from 'router5/plugins/browser'
import listenersPlugin from 'router5/plugins/listeners'

export type Route = {
  name: string,
  params: Object,
  path: string,
  meta: Object
}

export type TransitionSuccessPayload = {
  route: Route,
  previousRoute: ?Route,
}

const createRoute = (name, path, children) => ({
  name, path, children
})

const routes = [
  createRoute('init', '/init'),
  createRoute('home', '/home'),
  createRoute('create-homework', '/create-homework'),
  createRoute('group', '/group?id'),
  createRoute('create-group-homework', '/group?id/create-group-homework'),
  createRoute('sign-in', '/sign-in'),
  createRoute('sign-up', '/sign-up'),
]

const options = {
  defaultRoute: 'init'
}

export const router = createRouter(routes, options)
.usePlugin(listenersPlugin())
.usePlugin(browserPlugin({
  useHash: true
}))
