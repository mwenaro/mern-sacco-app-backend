export function trim(str:string, chars:string) {
	return ltrim(rtrim(str, chars), chars);
}
 
export function ltrim(str:string, chars:string) {
	chars = chars || "\s";
	return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
}
 
export function rtrim(str:string, chars:string) {
	chars = chars || "\s";
	return str.replace(new RegExp("[" + chars + "]+$", "g"), "");
}