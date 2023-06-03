# Dracula for [Hyper](https://hyper.is)

> A dark theme for [Hyper](https://hyper.is).

![Screenshot](./screenshot.png)

## Install

All instructions can be found at [draculatheme.com/hyper](https://draculatheme.com/hyper).

## Tips

The screenshot shown is a combination of the following additional software:

- [Oh My Zsh](https://github.com/robbyrussell/oh-my-zsh)
- [Prezto](https://github.com/sorin-ionescu/prezto)
- [Powerlevel9k](https://github.com/Powerlevel9k/powerlevel9k#rbenv)
- [Fast syntax highlighting](https://github.com/zdharma/fast-syntax-highlighting)
- [Hack Nerd Font](https://github.com/ryanoasis/nerd-fonts/tree/master/patched-fonts/Hack)

## Vim and Hyper

If you have issues Vim and Hyper theme colour mismatch. Open `.vimrc` or `init.vim` adding these lines before the line with `colorscheme dracula`

```
let g:dracula_colorterm = 0
let g:dracula_italic = 0
```

Or issues macOS Big Sur broke italics in Vim

```
let &t_ZH="\e[3m"
let &t_ZR="\e[23m"
g:dracula_italic = 1
```

## Team

This theme is maintained by the following person(s) and a bunch of [awesome contributors](https://github.com/dracula/hyper/graphs/contributors).

| [![Dang Van Thanh](https://avatars2.githubusercontent.com/u/2674850?v=4&s=70)](https://github.com/dangvanthanh) | [![Zeno Rocha](https://avatars1.githubusercontent.com/u/398893?v=4&s=70)](https://github.com/zenorocha) | [<img src="https://avatars3.githubusercontent.com/u/14370645?v=4&s=70" width=70px height=70px>](https://github.com/HaeTheong) | [![Beau Allison](https://avatars1.githubusercontent.com/u/14225594?v=4&s=70)](https://github.com/beauallison) | [![Brandonptucker](https://avatars2.githubusercontent.com/u/1033893?v=4&s=70)](https://github.com/brandonptucker) | [![xmatheus](https://avatars2.githubusercontent.com/u/34286800?v=4&s=70)](https://github.com/xmatheus) |
| --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Dang Van Thanh                                                                                                  | Zeno Rocha                                                                                              | Haeseong Je                                                                                                | Beau Allison                                                                                                  | Brandonptucker                                                                                                    | xmatheus                                                                                               |

## Community

- [Twitter](https://twitter.com/draculatheme) - Best for getting updates about themes and new stuff.
- [GitHub](https://github.com/dracula/dracula-theme/discussions) - Best for asking questions and discussing issues.
- [Discord](https://draculatheme.com/discord-invite) - Best for hanging out with the community.

## License

[MIT License](./LICENSE)
