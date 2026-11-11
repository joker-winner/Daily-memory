import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
const root = process.cwd();
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.jpg':'image/jpeg','.svg':'image/svg+xml; charset=utf-8'};
export function createAppServer(port=4173) { return createServer(async (req,res)=>{ try { let path=decodeURIComponent((req.url||'/').split('?')[0]); if(path==='/') path='/index.html'; const file=normalize(join(root,path)); if(!file.startsWith(root)) throw new Error('bad path'); const body=await readFile(file); res.writeHead(200,{'content-type':types[extname(file)]||'application/octet-stream'});res.end(body); } catch {res.writeHead(404);res.end('Not found');} }).listen(port,'127.0.0.1'); }
if(import.meta.url===`file://${process.argv[1]}`) createAppServer(Number(process.env.PORT)||4173);
