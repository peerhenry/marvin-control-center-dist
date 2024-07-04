import { d as defineEventHandler } from '../../runtime.mjs';
import { g as getJobs$1 } from '../../_/marvinStateHandler.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const getJobs = defineEventHandler((event) => {
  return getJobs$1();
});

export { getJobs as default };
//# sourceMappingURL=getJobs.mjs.map
