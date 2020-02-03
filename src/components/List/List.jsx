import React from 'react';

const List = ({ items }) => {
	return items.map((item, ind) => (
    <ul className="todo__list">
      <li key={ind} className={item.active ? " active" : ""}>
        {item.icon ? (
          <div>{item.icon}</div>
        ) : (
          <div className={`badge badge--${item.color}`}></div>
        )}
        <span>{item.name}</span>
      </li>
    </ul>
  ));
};

export default List;
// export {one_funct, two_futnct,...};