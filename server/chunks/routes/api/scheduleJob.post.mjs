import { d as defineEventHandler, r as readBody } from '../../runtime.mjs';
import { a as addJob } from '../../_/marvinStateHandler.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const scheduleJob_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  return addJob(body);
});

export { scheduleJob_post as default };
//# sourceMappingURL=scheduleJob.post.mjs.map
