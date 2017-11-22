import Typography from 'typography'
import deYoungTheme from 'typography-theme-de-young'
import CodePlugin from 'typography-plugin-code'

const typography = new Typography(deYoungTheme)

deYoungTheme.plugins = [new CodePlugin()]
deYoungTheme.baseLineHeight = 1.4
deYoungTheme.blockMarginBottom = 0.75
deYoungTheme.overrideThemeStyles = ({ rhythm }) => ({
  "blockquote > h1, blockquote > h2, blockquote > h3, blockquote > h4": {
    marginTop: 0,
  },
  "li > p": {
    marginBottom: rhythm(1 / 2),
  },
  "p code": {
    fontSize: "75%",
  },
  "tt,code": {
    fontSize: "85%",
  },
  pre: {
    lineHeight: 1.22,
  },
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
