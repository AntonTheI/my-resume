import type { Node } from "../data/folders";

export const findPath = (
  node: Node,
  target: string,
  currentPath: string[] = []
): string[] | null => {
  const name = node.type === "folder" ? node.folderName : node.fileName;
  const newPath = [...currentPath, name];

  if (name === target) return newPath;

  if (node.type !== "folder") return null;

  for (const child of node.children) {
    const recursion = findPath(child, target, newPath);

    if (recursion) return recursion;
  }

  return null;
};
