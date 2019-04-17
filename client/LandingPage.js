import {endpoints} from 'wildcard-api/client';
import "babel-polyfill";

console.log('code running');

(async () => {
  const resp_okay = await endpoints.okay();
  console.log('okay resp: '+resp_okay);

  const resp_fail = await endpoints.fail();
  console.log('fail resp: ', resp_fail);
})();
