import React from 'react'

interface Props {
    content: string;
    className?: string;
}
const  HeaderText: React.FC<Props> = ({ content,className }) => {
  return (
    <div>
        <span className={`border-b-[4px] border-[#ffbd01] pb-1 ${className ?? ''}`}>
            {content}
        </span>
    </div>
  )
}

export default HeaderText
