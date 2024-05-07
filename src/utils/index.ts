// 将驼峰改为'-'连接。例如：MyButton -> my-button
export const toLine = (value: string) => {
  // TODO: 正则忘记了
  return value.replace(/(A-Z)g/, '-$1').toLowerCase()
}
