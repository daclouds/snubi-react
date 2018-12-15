import React, { Component } from 'react';
import './Timeline.css';
import Story from './Story';

class Timeline extends Component {
  render() {
    const stories = [
      {
        id: 1,
        imageUrl: 'https://scontent-icn1-1.cdninstagram.com/vp/90693e7bfbefae8041dac17dbcf016c4/5CA1E7D7/t51.2885-15/e35/47126934_2284234258262304_7575766989013149296_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com',
        tags: 'coffee',
        heartRate: 136,
      },
      {
        id: 2,
        imageUrl: 'https://scontent-icn1-1.cdninstagram.com/vp/6655a54436f544fb99e8e0bfb2be8df2/5CA36FA9/t51.2885-15/e35/47583453_2259458517634482_7132744740381343929_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com',
        tags: 'beer',
        heartRate: 154,
      },
    ];
    return (
      <div className="container">
        <ul>
          {stories.map((story) => (
            <li key={story.id}>
              <Story info={story} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Timeline;
