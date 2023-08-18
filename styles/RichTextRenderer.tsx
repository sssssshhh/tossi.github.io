
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
    if(richTextData.numbered_list_item){
      let text = richTextData.numbered_list_item.rich_text[0].text.content;
      return {"text": text, "className": ""};
    }

    if(richTextData.paragraph.rich_text.length > 0) {
      let text = richTextData.paragraph.rich_text[0].text.content;
      let className = "";
  
      return {"text": text, "className": className};
    } else {
      return {"text": "", "className": ""};
    }

  };

  const richData = convertRichTextToHTML(richTextData);
  return <p className={richData.className} dangerouslySetInnerHTML={{ __html: richData.text }} />;
};

export default RichTextRenderer;
