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
const brightBlack = backgroundColor
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
      .tabs_list .tab_tab.tab_active:after {
				content: " ";
				background: #6272a4;
		    display: inline-block;
		    width: 8px;
		    height: 8px;
		    position: absolute;
		    top: 50%;
		    left: 5px;
		    border-radius: 100%;
		    transform: translateY(-50%);
		    -webkit-transform: translateY(-50%);
			}

			.tab_active:before {
				border-color: rgb(68, 71, 90);
			}
		`
  })
}
