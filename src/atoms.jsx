import { atom, selector } from 'recoil';
import axios from 'axios';

// Define the problemAtom
export const problemsAtom = atom({
  key: 'problemAtom',
  default: selector({
    key: 'problemAtom/default',
    get: async () => {
      try {
        const response = await axios.get('/api/codeforces');
        return response.data.result.problems;
      } catch (error) {
        throw error;
      }
    },
  }),
});