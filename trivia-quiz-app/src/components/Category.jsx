import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animated, useSpring } from "@react-spring/web";
import classNames from 'classnames'

const Category = ({ category, size, setCurrentCategory }) => {
  const [hovering, setHovering] = useState(false);

  const styles = useSpring({
    transform: hovering ? "rotate(3deg)" : "rotate(0deg)",
  });

  return (
    <animated.div
      style={styles}
      onMouseOver={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <Card
        className={`card--bg-${category.color}`}
        onClick={() => setCurrentCategory(category)}
      >
        <Card.Body className={classNames("text-center", {"d-flex align-items-center justify-content-center p-2" : size === 'sm'})}>
        {/* <Card.Body className= {size === 'sm' ? "text-center d-flex align-items-center justify-content-center p-2" : "text-center"}> */}
          <FontAwesomeIcon icon={category.icon} size="3x" />
          <h3 className={classNames("mt-2 mb-0", {'ms-3' : size === 'sm'})}>{category.name}</h3>
        </Card.Body>
      </Card>
    </animated.div>
  );
};

export default Category;
