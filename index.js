'use strict'

const foregroundColor = '#f8f8f2'
const backgroundColor = '#282a36'
const black = backgroundColor
const red = '#ff5555'
const green = '#50fa7b'
const yellow = '#f1fa8c'
const blue = '#6272a4'
const magenta = '#ff79c6'
const cyan = '#8be9fd'
const gray = '#666666'
const brightBlack = '#999999'
const brightWhite = '#ffffff'

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor: '#44475a',
    cursorColor: '#999999',
    colors: [
      black,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      gray,

      // bright
      brightBlack,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      brightWhite
    ],
    css: `
			${config.css || ''}
			.tabs_list .tab_tab.tab_active .tab_text  {
				background: ${backgroundColor};
			}

			.tab_active:before {
				border-color: rgb(68, 71, 90);
			}
		`
  })
}
