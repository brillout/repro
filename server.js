const Koa = require('koa');
const Router = require('koa-router');
const Static = require('koa-static');
const {getApiResponse} = require('wildcard-api');
const WildcardApiRouter = require('./endpoints');

const app = new Koa();

app.use(WildcardApiRouter.routes());

app.use(Static('client/dist', {extensions: ['.html']}));

app.listen(3000);

console.log('Server is running. Go to http://localhost:3000')

