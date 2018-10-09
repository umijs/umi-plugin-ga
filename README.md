# umi-plugin-ga

Umi plugin to support google analytics

## use

### install

`yarn add umi-plugin-ga`

### config

```js
export default {
  plugins: [
    [
     .....
    ],
    [
      'umi-plugin-ga',
      {
        code: 'google analytics code',
        judge: ()=>true // true or false
      },
    ],
  ],
  .....
}
```
