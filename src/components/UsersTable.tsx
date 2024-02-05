const UsersTable = ({ users }) => {
  if (users.length === 0) {
    return null; 
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Name</th>
          <th>E-mail</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.date}>
            <td>{user.date}</td>
            <td>{`${user.firstName} ${user.lastName}`}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;