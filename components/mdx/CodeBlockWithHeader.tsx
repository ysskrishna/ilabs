import { BsFiletypeJson } from "react-icons/bs"
import { FaRegFile } from "react-icons/fa6"
import { PiTerminalBold } from "react-icons/pi"
import { SiJavascript, SiTypescript } from "react-icons/si"

import { FileType } from "@/types/mdxDocument"

import CopyButton from "@/components/mdx/CopyButton"
import LanguageSelector from "@/components/mdx/LanguageSelector"

const getIcon = (language: string) => {
  switch (language) {
    case "tsx":
      return <SiTypescript />
    case "jsx":
      return <SiJavascript />
    case "json":
      return <BsFiletypeJson />
    case "bash":
    case "txt":
      return <PiTerminalBold />
    default:
      return <FaRegFile />
  }
}

const extractTextFromNode = (node: any): string => {
  if (typeof node === "string") return node
  if (Array.isArray(node)) return node.map(extractTextFromNode).join("")
  if (node && typeof node === "object" && node.props && node.props.children) {
    return extractTextFromNode(node.props.children)
  }
  return ""
}

const CodeBlockWithHeader = (props: any) => {
  const language = props["data-language"]

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
      <div className="code-block_header">
        <div className="code-block_filename">
          <div className="code-block_fileIcon">{getIcon(language)}</div>
          <span className="code-block_filenamePath">{props.filename}</span>
        </div>
        <div className="code-block_action">
          {(language === FileType.JSX || language === FileType.TSX) &&
            props.meta.includes("switcher") && <LanguageSelector />}
          <CopyButton className="code-block_copyButton" text={codeText} />
        </div>
      </div>
      <pre className="code-block_pre___OLfy" {...props} />
    </div>
  )
}

export default CodeBlockWithHeader
