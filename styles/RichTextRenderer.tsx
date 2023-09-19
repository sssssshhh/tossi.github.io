import React from 'react';

interface RichTextRendererProps {
  richTextData: any;
}

const RichTextRenderer: React.FC<RichTextRendererProps> = ({ richTextData }) => {
  const convertRichTextToHTML = (richText: string[]):{
    text: string,
    className: string;
  } => {
    let richData = {"text": "", "className": ""};

    if(richTextData.numbered_list_item){
      let text = richTextData.numbered_list_item.rich_text[0].text.content;
      
      richData = {"text": text, "className": ""};
    } else if(richTextData.paragraph.rich_text.length > 0) {
      let text = richTextData.paragraph.rich_text[0].text.content;
      let className = "break-keep";
  
      richData = {"text": text, "className": className};
    } 
    return richData;
  };

  const richData = convertRichTextToHTML(richTextData);

  return richData.text ? 
  <p className={richData.className}  dangerouslySetInnerHTML={{ __html: richData.text }} /> 
  : <br></br>
};

export default RichTextRenderer;
