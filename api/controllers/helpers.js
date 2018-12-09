const deleteFile = (path) => {
  if (fs.existsSync(`./${path}`)) {
    fs.unlink(`./${path}`, (error) => {
      if (error) {
        throw error;
      }
    })
  }
}