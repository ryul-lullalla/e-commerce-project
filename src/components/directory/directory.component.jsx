import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';

const Directory = ({ sections }) => {
  console.log(sections);
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...sectionProps }) => (
        <MenuItem
          key={id}
          // title={title}
          // imageUrl={imageUrl}
          // size={size}
          // linkUrl={linkUrl}
          {...sectionProps}
        />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
