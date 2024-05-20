import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://codeforces.com/api/problemset.problems');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
