"use client"

import React from "react"

import { FileType } from "@/types/mdxDocument"

import { useLanguage } from "@/components/mdx/LanguageSelector/LanguageContext"

interface CodeBlockWrapperProps {
  language: string
  children: React.ReactNode
}

const CodeBlockWrapper: React.FC<CodeBlockWrapperProps> = ({
  language,
  children,
}) => {
  const { globalLanguage } = useLanguage()
  if (
    (language === FileType.TSX || language === FileType.JSX) &&
    globalLanguage !== language
  ) {
    return null
  }

  return <>{children}</>
}

export default CodeBlockWrapper
