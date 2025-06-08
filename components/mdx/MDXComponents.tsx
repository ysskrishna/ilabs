import { Aside } from "@/components/mdx/Aside";
import { Callout } from "@/components/mdx/Callout";
import CodeBlockWrapper from "@/components/mdx/LanguageSelector/CodeBlockWrapper";
import { MdxCard } from "@/components/mdx/MdxCard";
import { ThemeAwareImage } from "@/components/mdx/ThemeAwareImage";
import { FileType } from "@/types/mdxDocument";
import React, { JSX, ReactNode } from "react";
import { CiCircleCheck } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

import CodeBlock from "@/components/mdx/CodeBlock";
import CodeBlockWithHeader from "@/components/mdx/CodeBlockWithHeader";
interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className: string;
  children: ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ level, children, ...props }) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <HeadingTag data-docs-heading {...props}>
      {children}
    </HeadingTag>
  );
};

interface MDXComponentsProps {
  [key: string]: React.FC<any>;
}

const extractTextFromNode = (node: any): string => {
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(extractTextFromNode).join("");
  if (node && typeof node === "object" && node.props && node.props.children) {
    return extractTextFromNode(node.props.children);
  }
  return "";
};

const MDXComponents: MDXComponentsProps = {
  h1: (props) => <Heading level={1} {...props} />,
  h2: (props) => <Heading level={2} {...props} />,
  h3: (props) => (
    <Heading
      level={3}
      className="text-2xl font-semibold mt-6 mb-4"
      {...props}
    />
  ),
  h4: (props) => (
    <Heading level={4} className="text-xl font-semibold mt-6 mb-4" {...props} />
  ),
  h5: (props) => (
    <Heading level={5} className="text-lg font-semibold mt-6 mb-4" {...props} />
  ),
  h6: (props) => (
    <Heading
      level={6}
      className="text-base font-semibold mt-6 mb-4"
      {...props}
    />
  ),
  hr: (props) => (
    <hr className="h-0 my-12 border-t border-[#ebebeb]" {...props} />
  ),
  p: (props) => <p {...props} />,
  a: (props) => (
    <a className="text-[#006bff] hover:text-[#68b5fb]" {...props} />
  ),
  ul: (props) => <ul className="list-disc pl-5 mt-0 mb-4" {...props} />,
  ol: (props) => <ol className="list-decimal pl-5 mt-0 mb-4" {...props} />,
  li: (props) => <li className="mb-2" {...props} />,
  pre: (props) => {
    const language = props["data-language"];

    let codeArray = props.children.props?.children;
    if (!Array.isArray(codeArray)) {
      codeArray = [codeArray];
    }

    if (!props.filename) {
      return <CodeBlock {...props} />;
    }
    if (props.filename) {
      if (
        (language === FileType.JSX || language === FileType.TSX) &&
        props.meta.includes("switcher")
      ) {
        return (
          <CodeBlockWrapper language={language}>
            <CodeBlockWithHeader {...props} />
          </CodeBlockWrapper>
        );
      }
      return <CodeBlockWithHeader {...props} />;
    }
  },
  blockquote: (props) => <blockquote className="p-3 text-sm" {...props} />,
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} {...props} />
  ),
  strong: (props) => <strong className="font-bold" {...props} />,
  table: (props) => (
    <div className="overflow-x-auto">
      <table className="w-full table-auto" {...props} />
    </div>
  ),
  tr: (props) => <tr {...props} />,
  th: (props) => <th {...props} />,
  td: (props) => <td {...props} />,
  Aside,
  Callout,
  Card: MdxCard,
  Image: ThemeAwareImage,
  Check: (props) => (
    <CiCircleCheck className="inline-flex text-green-600" {...props} />
  ),
  Cross: (props) => (
    <RxCross2 className="inline-flex text-gray-900" {...props} />
  ),
};

export default MDXComponents;
