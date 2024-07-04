import { d as defineEventHandler, r as readBody } from '../../runtime.mjs';
import { j as jobUpdate } from '../../_/marvinStateHandler.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const jobUpdate_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  jobUpdate(body.id, body.state);
});

export { jobUpdate_post as default };
//# sourceMappingURL=jobUpdate.post.mjs.map
