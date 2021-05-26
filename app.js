const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const blog = {
    id: 1,
    name: 'Blog Name',
    description: 'Blog Description',
  };
  res.send(blog);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}.`);
});
