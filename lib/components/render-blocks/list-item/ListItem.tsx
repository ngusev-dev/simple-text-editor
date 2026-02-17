export function ListItem(props: { attributes: any; children: any }) {
  return <li {...props.attributes}>{props.children}</li>;
}
