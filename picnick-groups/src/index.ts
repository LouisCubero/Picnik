import 'project-name-generator';
import generate from 'project-name-generator';

export interface Env {}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		return new Response(generate().dashed, { headers: { 'Access-Control-Allow-Origin': '*' } });
	},
};
