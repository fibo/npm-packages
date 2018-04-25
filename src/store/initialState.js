import randomColor from 'randomcolor'

export default {
  packs: [
    'algebra',
    'dflow',
    'dot-editorconfig',
    'flow-view',
    'games-of-life',
    'npm-start-command',
    'react-clipboard-icon',
    'standa',
    'strict-mode',
    'three-orbitcontrols'
  ].map(name => ({
    name,
    color: randomColor(),
    selected: true,
    downloads: []
  })),
  timeRange: 'last-year'
}
