import React from 'react';

import Search from './Home';

export default function AllItems(props) {

  return (
    <div>
      <div>
      {
        props.items.map((item, index) => <Search key={index} {...item} />)
      }
      </div>
    </div>
  )
}