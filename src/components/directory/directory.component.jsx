import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'fiction',
          imageUrl:
            'https://cdn.pixabay.com/photo/2019/04/07/08/47/books-4109214__480.png',
          id: 1,
          linkUrl: 'shop/fiction',
        },
        {
          title: 'sci-fi',
          imageUrl:
            'https://cdn.pixabay.com/photo/2014/05/10/18/10/saturn-341379__480.jpg',
          id: 2,
          linkUrl: 'shop/sci-fi',
        },
        {
          title: 'FOREIGN LANGUAGE',
          imageUrl:
            'https://cdn.pixabay.com/photo/2016/07/28/20/34/book-1549589__480.jpg',
          id: 3,
          linkUrl: 'shop/sneakers',
        },
        {
          title: 'philosophy',
          imageUrl:
            'https://cdn.pixabay.com/photo/2015/11/19/21/11/knowledge-1052011_1280.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/philosophy',
        },
        {
          title: 'theatre and film',
          imageUrl:
            'https://cdn.pixabay.com/photo/2015/07/02/10/07/audience-828584__480.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/theatreAndFilm',
        },
      ],
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
