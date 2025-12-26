import "./index.css";
import Layout from "./components/layout/Layout";
import Editor from "./components/layout/editor/Editor";
import Sidebar from "./components/layout/sidebar/Sidebar";
import FilePath from "./components/layout/editor/FilePath";
import { useState } from "react";
import { folders, type FileNode } from "./data/folders";

function App() {
  const [currentFolder, setCurrentFolder] = useState<FileNode | null>(null);

  const handleFileSelect = (file: FileNode) => {
    setCurrentFolder(file);
  };
  return (
    <Layout sidebar={<Sidebar onFileSelect={handleFileSelect} />}>
      <FilePath target={currentFolder} folders={folders[0]} />
      <Editor content={currentFolder} />
    </Layout>
  );
}

export default App;
