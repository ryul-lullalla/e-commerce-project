import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size ? size + ' menu-item' : 'menu-item'}`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
    // className={`${size} menu-item`} from udemy-course
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
