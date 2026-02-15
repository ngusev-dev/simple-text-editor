export function CodeBlock(props: { attributes: any; children: any }) {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
}
