export function photoIndexAfterAdd(length){return Math.max(0,length-1)}
export function movePhotoIndex(index,delta,length){if(length<=0)return 0;return (index+delta%length+length)%length}
export function validatePhotoDataUrl(src){return typeof src==='string'&&/^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/]+=*$/.test(src)}
export function makePhoto({id,name,src,createdAt=new Date().toISOString()}){if(!validatePhotoDataUrl(src))throw new Error('请选择有效的图片文件');return {id,name:String(name||'照片'),src,createdAt}}
export const MAX_PHOTO_BYTES=20*1024*1024;
