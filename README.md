# npm-packages

> displays stats about my npm packages

## Data source

See [npm/downloads-count]: get downloads for a package

`GET https://api.npmjs.org/downloads/range/{period}/{package}`

For example: `GET https://api.npmjs.org/downloads/range/last-week/strict-mode`
will produce an output like

```
{"start":"2017-09-22","end":"2017-09-28","package":"strict-mode","downloads":[{"downloads":35,"day":"2017-09-22"},{"downloads":32,"day":"2017-09-23"},{"downloads":5,"day":"2017-09-24"},{"downloads":41,"day":"2017-09-25"},{"downloads":44,"day":"2017-09-26"},{"downloads":25,"day":"2017-09-27"},{"downloads":36,"day":"2017-09-28"}]}
```

## License

[MIT](http://g14n.info/mit-license)

[npm/downloads-count]: https://github.com/npm/download-counts
