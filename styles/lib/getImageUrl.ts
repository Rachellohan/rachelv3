export default function getImageUrl(path: string) {
  if (path[0] === '/') {
    return `https://rachellohan.github.io/{path}`;
  } else {
    return path;
  }
}