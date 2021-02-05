export const getBasename = (path: string): string => {
  const withExtension = path.substring(path.lastIndexOf('/') + 1)

  let basename = withExtension
  if (withExtension.lastIndexOf('.') != -1) {
    basename = withExtension.substring(0, withExtension.lastIndexOf('.'))
  }
  return basename
}
