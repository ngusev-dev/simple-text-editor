import { useCallback } from "react";
import { CodeBlock } from "../components/render-blocks/CodeBlock";
import { DefaultBlock } from "../components/render-blocks/DefaultBlock";
import { LeafBlock } from "../components/render-blocks/LeafBlock";

export const useRenderBlocks = () => {
  const renderBlocks = useCallback((props: any) => {
    switch (props.element.type) {
      case "code":
        return <CodeBlock {...props} />;
      default:
        return <DefaultBlock {...props} />;
    }
  }, []);

  const renderLeaf = useCallback((props: any) => <LeafBlock {...props} />, []);

  return {
    renderBlocks,
    renderLeaf,
  };
};
