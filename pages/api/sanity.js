// pages/api/sanity.js

// export default async function handler(req, res) {
//     const url = 'https://jnqvatdi.api.sanity.io/v2024-02-11/data/query/production' + req.url;
//     const response = await fetch(url);
//     const data = await response.json();
//     res.json(data);
//   }
  


export default async function handler(req, res) {
  const url = 'https://vdzzonmk.api.sanity.io/v2024-11-06/data/query/production' + req.url;
  const response = await fetch(url);
  const data = await response.json();
  res.json(data);
}