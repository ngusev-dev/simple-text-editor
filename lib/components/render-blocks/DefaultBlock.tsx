export function DefaultBlock(props: { attributes: any; children: any }) {
  return <p {...props.attributes}>{props.children}</p>;
}
