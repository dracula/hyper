'use strict';

const backgroundColor = '#282a36';
const foregroundColor = '#f8f8f2';
const borderColor = '#44475a';
const cursorColor = '#f8f8f2';
const colors = {
  black: '#000000',
  red: '#ff5555',
  green: '#50fa7b',
  yellow: '#f1fa8c',
  blue: '#bd93f9',
  magenta: '#ff79c6',
  cyan: '#8be9fd',
  white: '#bfbfbf',
  lightBlack: '#4d4d4d',
  lightRed: '#ff6e67',
  lightGreen: '#5af78e',
  lightYellow: '#f4f99d',
  lightBlue: '#caa9fa',
  lightMagenta: '#ff92d0',
  lightCyan: '#9aedfe',
  lightWhite: '#e6e6e6',
};

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
    `,
    css: `
      ${config.css || ''}
      .tabs_list .tab_tab.tab_active .tab_text  {
        background: ${backgroundColor};
      }

      .tab_active:before {
        border-color: ${borderColor};
      }
    `,
  });
};
