import BaseLink from './BaseLink';
import createWithRouter from './createWithRouter';
import defaultWithRouter from './withRouter';

export default function createConnectedLink(options) {
  const withRouter = options ? createWithRouter(options) : defaultWithRouter;
  return withRouter(BaseLink);
}
