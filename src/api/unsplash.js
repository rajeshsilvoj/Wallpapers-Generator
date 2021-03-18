import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization:
          'Client-ID WInBZZWH18vVnzYe-Yj7FWECXnbCKIl0QOFd9jiG5dY',
      },
});
