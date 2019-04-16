export default class BookstoreService {
  data = [
    {
      id: 1,
      title: 'Neuromancer',
      author: 'William Gibson',
      price: 89,
      cover: 'https://images-na.ssl-images-amazon.com/images/I/91yXdjXLTjL.jpg'
    },
    {
      id: 2,
      title: 'Mona Lisa Overdrive',
      author: 'William Gibson',
      price: 88,
      cover: 'https://images-na.ssl-images-amazon.com/images/I/61S0fEjVhOL.jpg'
    },
    {
      id: 3,
      title: 'Count Zero',
      author: 'William Gibson',
      price: 87,
      cover: 'https://images-na.ssl-images-amazon.com/images/I/91nhk-aO7lL.jpg'
    }
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error('Not real error, generated to test error handling'));
        } else {
          resolve(this.data);
        }
      }, 700);
    });
  }
}
