import type { Node } from "../data/folders";

interface FolderViewProps {
  node: Node;
}

const FolderView: React.FC<FolderViewProps> = ({ node }) => {
  //base case
  if (node.type === "file") {
    return <div key={node.fileName}>{node.fileName}</div>;
  }
  //recursive case
  return (
    <div>
      <div>{node.folderName}</div>
      {node.children && node.children.length > 0 && (
        <div className="ml-8">
          {node.children.map((child) => (
            <FolderView
              key={
                child.type === "file"
                  ? `${child.fileName}`
                  : `${child.folderName}`
              }
              node={child}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FolderView;
