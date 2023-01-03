import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-shell-session'

const Prism = (window as any).Prism
export const highLightCode = (sourceCode: string, languageType = 'html') => {
  if (sourceCode) {
    return Prism.highlight(sourceCode, Prism.languages[languageType], languageType)
  }
  return ''
}
