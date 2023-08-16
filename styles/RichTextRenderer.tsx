
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
    let text = '';

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
    text = 'tessssst';

    return {"text": text, "className": "py-6 text-3xl text-amber-700"};
  };

  const richData = convertRichTextToHTML(richTextData.rich_text);
  console.log('richData:', richData.text)
  const testss = "py-6 text-3xl text-amber-700";
  return <div className={richData.className} dangerouslySetInnerHTML={{ __html: richData.text }} />;
};

export default RichTextRenderer;
