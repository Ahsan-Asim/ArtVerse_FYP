import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [artistData, setArtistData] = useState(null);
  const [editableData, setEditableData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const artistEmail = localStorage.getItem('artistEmail');
    if (artistEmail) {
      // Fetch artist data using the email (updated to email-based lookup)
      axios.get(`http://localhost:4000/api/artists/${artistEmail}`)
        .then((response) => {
          setArtistData(response.data);
          setEditableData(response.data); // Store editable copy
        })
        .catch((error) => {
          console.error('Error fetching artist data:', error);
        });
    }
  }, []);

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableData({ ...editableData, [name]: value });
  };

  // Handle save button click
  const handleSave = async () => {
    try {
      const response = await axios.put(
        `http://localhost:4000/api/artists/${editableData.email}`,
        editableData
      );
      setArtistData(editableData); // Update with the saved data
      setIsEditing(false); // Switch back to view mode
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error saving profile:', error);
      alert('Error updating profile. Please try again.');
    }
  };

  // Handle cancel button click
  const handleCancel = () => {
    setEditableData(artistData); // Revert changes to original data
    setIsEditing(false); // Switch back to view mode
  };

  if (!artistData) {
    return <div>Loading...</div>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>{artistData.name}'s Profile</h2>
      <form style={styles.form}>
        <div style={styles.fieldContainer}>
          <label style={styles.label}>Name:</label>
          <input
            type="text"
            name="name"
            value={editableData.name}
            onChange={handleChange}
            disabled={!isEditing}
            style={styles.input}
          />
        </div>
        <div style={styles.fieldContainer}>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            name="email"
            value={editableData.email}
            onChange={handleChange}
            disabled
            style={styles.input}
          />
        </div>
        <div style={styles.fieldContainer}>
          <label style={styles.label}>Country:</label>
          <input
            type="text"
            name="country"
            value={editableData.country}
            onChange={handleChange}
            disabled={!isEditing}
            style={styles.input}
          />
        </div>
        <div style={styles.fieldContainer}>
          <label style={styles.label}>State:</label>
          <input
            type="text"
            name="state"
            value={editableData.state}
            onChange={handleChange}
            disabled={!isEditing}
            style={styles.input}
          />
        </div>
        <div style={styles.fieldContainer}>
          <label style={styles.label}>City:</label>
          <input
            type="text"
            name="city"
            value={editableData.city}
            onChange={handleChange}
            disabled={!isEditing}
            style={styles.input}
          />
        </div>
        <div style={styles.fieldContainer}>
          <label style={styles.label}>Address:</label>
          <input
            type="text"
            name="address"
            value={editableData.address}
            onChange={handleChange}
            disabled={!isEditing}
            style={styles.input}
          />
        </div>
        <div style={styles.fieldContainer}>
          <label style={styles.label}>Education:</label>
          <input
            type="text"
            name="education"
            value={editableData.education}
            onChange={handleChange}
            disabled={!isEditing}
            style={styles.input}
          />
        </div>
        <div style={styles.fieldContainer}>
          <label style={styles.label}>About:</label>
          <textarea
            name="about"
            value={editableData.about}
            onChange={handleChange}
            disabled={!isEditing}
            style={{ ...styles.input, height: '80px' }}
          />
        </div>
      </form>

      <div style={styles.buttonContainer}>
        {isEditing ? (
          <>
            <button onClick={handleSave} style={styles.button}>Save</button>
            <button onClick={handleCancel} style={styles.button}>Cancel</button>
          </>
        ) : (
          <button onClick={() => setIsEditing(true)} style={styles.button}>Edit</button>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  fieldContainer: {
    marginBottom: '15px',
  },
  label: {
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginTop: '5px',
    width: '100%',
  },
  button: {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '10px',
  },
  buttonContainer: {
    textAlign: 'center',
  },
};

export default Profile;
