import CopyButton from "./CopyButton"

const extractTextFromNode = (node: any): string => {
  if (typeof node === "string") return node
  if (Array.isArray(node)) return node.map(extractTextFromNode).join("")
  if (node && typeof node === "object" && node.props && node.props.children) {
    return extractTextFromNode(node.props.children)
  }
  return ""
}

const CodeBlock = (props: any) => {
  let codeArray = props.children.props?.children
  if (!Array.isArray(codeArray)) {
    codeArray = [codeArray]
  }

  const codeText = codeArray
    .map((node: any) => {
      return extractTextFromNode(node)
    })
    .join("")
    .trim()

  return (
    <div className="code-block_wrapper not-prose">
      <CopyButton
        className="code-block_copyButton code-block_copyFloatingButton"
        text={codeText}
      />
      <pre className="code-block_pre___OLfy" {...props} />
    </div>
  )
}

export default CodeBlock
