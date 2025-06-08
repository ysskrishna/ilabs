"use client"

import { IoChevronDownOutline } from "react-icons/io5"

import { useLanguage } from "@/components/mdx/LanguageSelector/LanguageContext"

const labelMap = {
  jsx: "JavaScript",
  tsx: "TypeScript",
}

const LanguageSelector = () => {
  const { globalLanguage, setGlobalLanguage } = useLanguage()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGlobalLanguage(e.target.value)
  }

  return (
    <div className="switcher_container">
      <div className="switcher_visible">
        <span>{labelMap[globalLanguage as keyof typeof labelMap]}</span>
        <IoChevronDownOutline style={{ fontSize: "16px" }} />
      </div>
      <select
        value={globalLanguage}
        onChange={handleChange}
        className="switcher_select"
      >
        <option value="tsx">TypeScript</option>
        <option value="jsx">JavaScript</option>
      </select>
    </div>
  )
}

export default LanguageSelector
