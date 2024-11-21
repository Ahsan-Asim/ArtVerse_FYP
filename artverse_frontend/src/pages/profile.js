import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [roleData, setRoleData] = useState(null);
  const [editableData, setEditableData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // useEffect(() => {
  //   const token = sessionStorage.getItem('token');
  //   if (token) {
  //     axios
  //       .get('http://localhost:4000/api/users/home', {
  //         headers: { Authorization: `Bearer ${token}` },
  //       })
  //       .then((response) => {
  //         const user = response.data.user;
  //         setUserData(user);

  //         // Fetch additional data based on role and email
  //         if (user.email) {
  //           axios
  //             .get(`http://localhost:4000/api/users/getUserByEmail/${user.email}`)
  //             .then((res) => {
  //               // if (res.data.role == "artist"){
  //               //   setRoleData(res.data);
  //               // setEditableData(res.data); // Make data editable
  //               // }
  //               setRoleData(res.data);
  //               setEditableData(res.data); // Make data editable
  //             })
  //             .catch((error) => {
  //               console.error('Error fetching role data:', error);
  //             });
  //         }
  //       })
  //       .catch((error) => {
  //         console.error('Error fetching user data:', error);
  //       });
  //   }
  // }, []);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      axios
        .get('http://localhost:4000/api/users/home', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          const user = response.data.user;
          setUserData(user);
  
          // Fetch user details including artist data
          if (user.email) {
            axios
              .get(`http://localhost:4000/api/users/getUserByEmail/${user.email}`)
              .then((res) => {
                const fullData = res.data;
                setRoleData(fullData);
                setEditableData({
                  ...fullData,
                  ...fullData.artistDetails, // Include artist-specific fields
                });
              })
              .catch((error) => {
                console.error('Error fetching role data:', error);
              });
          }
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    }
  }, []);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableData({ ...editableData, [name]: value });
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `http://localhost:4000/api/users/updateUserByEmail/${editableData.email}`,
        editableData
      );
      setRoleData(editableData); // Save changes
      setIsEditing(false);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error saving profile:', error);
      alert('Error updating profile. Please try again.');
    }
  };

  const handleCancel = () => {
    setEditableData(roleData); // Revert changes
    setIsEditing(false);
  };

  if (!userData || !roleData) {
    return <div>Loading...</div>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>
        {userData.role === 'artist' ? `${roleData.name}'s` : 'User'} Profile
      </h2>
      <form style={styles.form}>
        <div style={styles.fieldContainer}>
          <label style={styles.label}>Name:</label>
          <input
            type="text"
            name="name"
            value={editableData?.name || ''}
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
            value={editableData?.email || ''}
            onChange={handleChange}
            disabled
            style={styles.input}
          />
        </div>
        {userData.role === 'artist' && (
          <>
            <div style={styles.fieldContainer}>
              <label style={styles.label}>Country:</label>
              <input
                type="text"
                name="country"
                value={editableData?.country || ''}
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
                value={editableData?.state || ''}
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
                value={editableData?.city || ''}
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
                value={editableData?.address || ''}
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
                value={editableData?.education || ''}
                onChange={handleChange}
                disabled={!isEditing}
                style={styles.input}
              />
            </div>
            <div style={styles.fieldContainer}>
              <label style={styles.label}>About:</label>
              <textarea
                name="about"
                value={editableData?.about || ''}
                onChange={handleChange}
                disabled={!isEditing}
                style={{ ...styles.input, height: '80px' }}
              />
            </div>
          </>
        )}
        {isEditing ? (
          <>
            <button type="button" onClick={handleSave} style={styles.button}>
              Save
            </button>
            <button type="button" onClick={handleCancel} style={styles.button}>
              Cancel
            </button>
          </>
        ) : (
          <button type="button" onClick={() => setIsEditing(true)} style={styles.button}>
            Edit Profile
          </button>
        )}
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
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
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '14px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  button: {
    padding: '10px 20px',
    fontSize: '14px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default Profile;
