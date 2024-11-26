import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [roleData, setRoleData] = useState(null);
  const [editableData, setEditableData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isVerified, setIsVerified] = useState(true);
  const [isBlocked, setIsBlocked] = useState(false);
  const navigate = useNavigate();

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

          if (user.email) {
            axios
              .get(`http://localhost:4000/api/users/getUserByEmail/${user.email}`)
              .then((res) => {
                const fullData = res.data;
                setRoleData(fullData);
                setEditableData({
                  ...fullData,
                  ...fullData.artistDetails,
                });

                setIsVerified(fullData.isVerified);
                setIsBlocked(fullData.isBlocked);
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
        `http://localhost:4000/api/users/updateData/${editableData.email}`,
        editableData
      );
      setRoleData(editableData);
      setIsEditing(false);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error saving profile:', error);
      alert('Error updating profile. Please try again.');
    }
  };

  const handleCancel = () => {
    setEditableData(roleData);
    setIsEditing(false);
  };

  const handleUploadArtworkClick = () => {
    if (!isVerified) {
      alert('Your account is under verification. You cannot upload artwork yet.');
      navigate('/profile');
    } else if (isBlocked) {
      alert('Your account is blocked. You cannot upload artwork.');
      navigate('/profile');
    } else {
      navigate('/artist_studio');
    }
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
  {/* Common Fields for Both User and Artist */}
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
  <div style={styles.fieldContainer}>
    <label style={styles.label}>Role:</label>
    <input
      type="text"
      name="role"
      value={editableData?.role || ''}
      onChange={handleChange}
      disabled
      style={styles.input}
    />
  </div>
  <div style={styles.fieldContainer}>
    <label style={styles.label}>Phone:</label>
    <input
      type="text"
      name="phone"
      value={editableData?.phone || ''}
      onChange={handleChange}
      disabled={!isEditing}
      style={styles.input}
    />
  </div>

  {/* Additional Fields for Artists Only */}
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
      <div style={styles.fieldContainer}>
        <label style={styles.label}>Awards:</label>
        <input
          type="text"
          name="awards"
          value={editableData?.awards || ''}
          onChange={handleChange}
          disabled={!isEditing}
          style={styles.input}
        />
      </div>
      <div style={styles.fieldContainer}>
        <label style={styles.label}>Certificates:</label>
        <input
          type="text"
          name="certificates"
          value={editableData?.certificates || ''}
          onChange={handleChange}
          disabled={!isEditing}
          style={styles.input}
        />
      </div>
    </>
  )}

        <div style={styles.buttonContainer}>
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
            <>
              <button type="button" onClick={() => setIsEditing(true)} style={styles.button}>
                Edit Profile
              </button>
              {userData.role === 'artist' && (
        <button
          type="button"
          onClick={handleUploadArtworkClick}
          style={styles.button}
        >
          Artist Studio
        </button>
      )}
              {/* <button
                type="button"
                onClick={() => alert('View your artwork feature coming soon!')}
                style={styles.button}
              >
                View Work
              </button> */}
            </>
          )}
        </div>
      </form>
    </div>
  );
};

// const styles = {
//   container: {
//     maxWidth: '800px',
//     margin: '30px auto',
//     padding: '20px',
//     backgroundColor: '#ffffff',
//     borderRadius: '15px',
//     boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
//     fontFamily: 'Arial, sans-serif',
//   },
//   header: {
//     textAlign: 'center',
//     marginBottom: '30px',
//     fontSize: '24px',
//     fontWeight: '600',
//     color: '#333',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   fieldContainer: {
//     marginBottom: '20px',
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   label: {
//     fontSize: '16px',
//     fontWeight: 'bold',
//     marginBottom: '8px',
//     color: '#555',
//   },
//   input: {
//     padding: '12px 15px',
//     fontSize: '14px',
//     borderRadius: '8px',
//     border: '1px solid #ccc',
//     outline: 'none',
//     transition: 'border-color 0.3s',
//   },
//   buttonContainer: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     marginTop: '20px',
//   },
//   button: {
//     padding: '10px 20px',
//     fontSize: '16px',
//     backgroundColor: '#4CAF50',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s',
//   },
// };


const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200vh', // Full screen height
    backgroundColor: '#f4f4f4', // Light gray background
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '26px',
    fontWeight: 'bold',
    color: '#333',
  },
  form: {
    backgroundColor: '#ffffff', // White form background
    borderRadius: '15px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
    padding: '30px',
    width: '100%', // Full width
    maxWidth: '600px', // Restrict to a maximum width
  },
  fieldContainer: {
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: '#333',
  },
  input: {
    padding: '12px 15px',
    fontSize: '14px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    outline: 'none',
    transition: 'border-color 0.3s',
    backgroundColor: '#f9f9f9', // Slightly off-white
    color: '#333',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};


export default Profile;
