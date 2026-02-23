import { useCallback } from "react";
import { CodeBlock } from "../components/render-blocks/CodeBlock";
import { DefaultBlock } from "../components/render-blocks/DefaultBlock";
import { LeafBlock } from "../components/render-blocks/LeafBlock";
import { QuoteBlock } from "../components/render-blocks";
import { OrderList } from "../components/render-blocks/order-list/OrderList";
import { ListItem } from "../components/render-blocks/list-item/ListItem";
import { UnorderList } from "../components/render-blocks/unorder-list/UnorderList";
import { LinkBlock } from "../components/render-blocks/link-block/LinkBlock";

export const useRenderBlocks = () => {
  const renderBlocks = useCallback((props: any) => {
    switch (props.element.type) {
      case "code":
        return <CodeBlock {...props} />;
      case "quote":
        return <QuoteBlock {...props} />;
      case "ol":
        return <OrderList {...props} />;
      case "li":
        return <ListItem {...props} />;
      case "ul":
        return <UnorderList {...props} />;
      case "link":
        return <LinkBlock {...props} />;
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
