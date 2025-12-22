import { useState, useRef, useEffect, useEffectEvent } from "react";

const Editor = ({ content }: { content: string }) => {
  const refNode = useRef<HTMLDivElement>(null);
  const [lineCount, setLineCount] = useState(0);

  useEffect(() => {
    const ref = refNode.current;
    if (!ref) return;

    const calculateLines = () => {
      const style = window.getComputedStyle(ref);
      const lineHeight = parseInt(style.lineHeight);
      const nodeHeight = ref.scrollHeight;
      const lines = Math.ceil(nodeHeight / lineHeight);
      setLineCount(lines);
    };

    calculateLines();

    const observer = new ResizeObserver(() => {
      calculateLines();
    });

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, []);

  return <div>Editor</div>;
};

export default Editor;
