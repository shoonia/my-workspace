// See https://hyper.is#cfg for all currently supported options.

module.exports = {
  config: {

    // Seamless Hyper integration
    // https://github.com/cmderdev/cmder/wiki/Seamless-Hyper-integration
    shell: 'cmd.exe',
    shellArgs: ['/k', 'C:\\Program Files\\cmder\\vendor\\init.bat'],
    env: { 'TERM': 'cygwin' },
    // cmder end

    updateChannel: 'stable',
    fontSize: 16,
    fontFamily: 'Consolas, Menlo, "DejaVu Sans Mono", "Lucida Console", monospace',
    fontWeight: 'normal',
    fontWeightBold: 'bold',
    lineHeight: 1,
    letterSpacing: 0,
    cursorColor: 'rgba(248,28,229,0.8)',
    cursorAccentColor: '#000',
    cursorShape: 'BLOCK',
    cursorBlink: false,
    foregroundColor: '#fff',
    backgroundColor: '#000',
    selectionColor: 'rgba(248,28,229,0.3)',
    borderColor: '#333',
    css: '',
    termCSS: '',
    showHamburgerMenu: '',
    showWindowControls: '',
    padding: '12px 14px',
    colors: {
      black: '#000000',
      red: '#C51E14',
      green: '#1DC121',
      yellow: '#C7C329',
      blue: '#0A2FC4',
      magenta: '#C839C5',
      cyan: '#20C5C6',
      white: '#C7C7C7',
      lightBlack: '#686868',
      lightRed: '#FD6F6B',
      lightGreen: '#67F86F',
      lightYellow: '#FFFA72',
      lightBlue: '#6A76FB',
      lightMagenta: '#FD7CFC',
      lightCyan: '#68FDFE',
      lightWhite: '#FFFFFF',
    },
    bell: 'SOUND',
    copyOnSelect: false,
    defaultSSHApp: true,
    quickEdit: false,
    macOptionSelectionMode: 'vertical',
    webGLRenderer: true,
  },

  plugins: ["hyperpower", "hyper-material-theme", "hyper-opacity"],
  localPlugins: [],
  keymaps: {},
};
