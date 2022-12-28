import React,{ useState }  from 'react';
import AddUserForm from './form/adduserform';
import EditUserForm from './form/edituserform';
import UserTable from './table/usertable';

export default function CustomApp() {
    const userData = [
        { id: 1, name: "jack", username: "Jack_abc" },
        { id: 2, name: "mar", username: "mar_abc" },
        { id: 3, name: "kerr", username: "kerr_abc" }
      ];
      const [users, setUsers] = useState(userData);
    
      const addUser = (user) => {
        user.id = users.length + 1;
        setUsers([...users, user]);
      };
      const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id));
      };
    
      const initialForm = { id: null, name: "", username: "" };
      const [currentUser, setCurrentUser] = useState(initialForm);
      const [editing, setEditing] = useState(false);
      const updateUser = (id, updateUser) => {
        setEditing(false);
        setUsers(users.map((user) => (user.id === id ? updateUser : user)));
      };
      const editRow = (user) => {
        setEditing(true);
        setCurrentUser({ id: user.id, name: user.name, username: user.username });
      };
      return (
        <div className="App">
          <h1> CRUD Application </h1>
          <div>
            <div>
              {editing ? (
                <div>
                  <h5>Edit</h5>
                  <EditUserForm
                    editing={editing}
                    setEditing={setEditing}
                    currentUser={currentUser}
                    updateUser={updateUser}
                  />
                </div>
              ) : (
                <div>
                  <h5>Add</h5>
                  <AddUserForm addUser={addUser} />
                </div>
              )}
            </div>
            <div>
              <h3> View User </h3>
              <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
            </div>
          </div>
        </div>
      );
}
