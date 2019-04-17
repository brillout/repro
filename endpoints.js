const wildcard = require("wildcard-api");
const Router = require("koa-router");

const WildcardApiRouter = module.exports = new Router();

WildcardApiRouter.all("/wildcard/*", async ctx => {
  const { body, statusCode, type } = await wildcard.getApiResponse(ctx);
  console.log(body);
  ctx.type = type;
  ctx.body = body;
  ctx.status = statusCode;
});

wildcard.endpoints.fail = function() {
  console.log('fail endpoint called');
  throw new Error(`Something horrible happened here...`);
};

wildcard.endpoints.okay = async function() {
  console.log('okay endpoint called');
  return 'okay rep';
};

wildcard.onNewEndpointResult = function({endpointName, endpointArgs, endpointResult, endpointError}) {
  console.log(`Intercepting endpoint result`);

  if( endpointError ) {
    this.type = "application/json";
    this.statusCode = 401;
    this.body = JSON.stringify({intercepted: 'yep'});
  } else {
    return 'okay rep ++';
  }
};
