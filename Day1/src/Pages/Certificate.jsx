import React, { useState } from 'react';

const Certificate = () => {
  // State variables
  const [completedItems, setCompletedItems] = useState([]);

  // Function to handle adding completed items
  const handleAddCompletedItem = (itemName) => {
    setCompletedItems([...completedItems, itemName]);
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src="https://images.pexels.com/photos/2035066/pexels-photo-2035066.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Your Image" style={styles.image} />
      </div>
      <div style={styles.textContainer}>
        <h2 style={styles.heading}>Certificate Details</h2>
        <p style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget consequat velit. Phasellus non felis vel mi sodales pretium.</p>
        <p style={styles.paragraph}>Nulla facilisi. Nullam nec convallis metus. Integer ut metus consequat, tempus mi ac, finibus risus.</p>
        <p style={styles.paragraph}>Donec sit amet fringilla quam. Sed vestibulum euismod magna, et scelerisque sem sollicitudin nec.</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  imageContainer: {
    flex: 1,
    paddingRight: '20px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  textContainer: {
    flex: 1,
    paddingLeft: '20px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '16px',
    marginBottom: '10px',
  },
};

export default Certificate;
