
import React from 'react';
import styles from './YourComponentStyles.module.css';

interface RichTextRendererProps {
  richTextData: any;
}

const RichTextRenderer: React.FC<RichTextRendererProps> = ({ richTextData }) => {
  const convertRichTextToHTML = (richText: string[]):{
    text: string,
    className: string;
  } => {
    let text = richTextData.paragraph.rich_text[0].text.content;
    let className = "";

    // richText.forEach((element: any) => {
    //   if (element.type === 'text') {
    //     let textStyle = '';
    //     if (element.annotations.bold) {
    //       textStyle += 'font-weight: bold;';
    //     }
    //     // Add styles for italic, strikethrough, underline, etc.

    //     const textContent = element.text.content;
    //     html += `<span style="${textStyle}">${textContent}</span>`;
    //   }
    // });

    return {"text": text, "className": className};
  };

  const richData = convertRichTextToHTML(richTextData);
  // const testss = "py-6 text-3xl text-amber-700";
  console.log(richData.text)
  return <p className={richData.className} dangerouslySetInnerHTML={{ __html: richData.text }} />;
};

export default RichTextRenderer;
