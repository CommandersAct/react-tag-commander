import { useEffect } from "react";
import TC_Wrapper from "react-tag-commander";
import { markedHighlight } from "marked-highlight";
import { Marked } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/stackoverflow-dark.css";
import Readme from "../../../../README.md?raw"

const Home = () => {
  function getMarkdownText() {
    const marked = new Marked(
      markedHighlight({
        langPrefix: "hljs language-",
        highlight(code, lang) {
              const language = hljs.getLanguage(lang) ? lang : "plaintext";
              return hljs.highlight(code, { language }).value;
        },
      })
    );
    return { __html: marked.parse(Readme)};
  }

  useEffect(() => {
    const wrapper = TC_Wrapper.getInstance();
    wrapper.trackPageLoad({tcReloadOnly: [
        {ids :'4056', idc: '12'}
      ]})
  }, []);

  return (
    <main>
      <div dangerouslySetInnerHTML={getMarkdownText()}/>
    </main>
  );
}


export default Home;
