import axios from 'axios';

export default async function handler(req, res) {
  try {
    console.log('Fetching data from Codeforces API');
    const response = await axios.get('https://codeforces.com/api/problemset.problems');
    console.log('Data fetched successfully:', response.data);

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching data from Codeforces:', error.message);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}