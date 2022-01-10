import React, { useEffect, useState } from 'react';
import userService from '../services/users';

type StateProperties = { username: string; isAdmin: boolean };

const Admin = () => {
  const [userList, setUserList] = useState<Array<StateProperties>>();

  useEffect(() => {
    userService.getAllUsers().then((data) => setUserList(data));
  }, []);

  return (
    <div className="container px-20 mx-auto">
      <table className="table-auto">
        <thead className="text-xs font-semibold text-gray-400 uppercase bg-gray-50">
          <tr>
            <th className="font-semibold text-left">No</th>
            <th className="font-semibold text-left">Username</th>
            <th className="font-semibold text-left">Admin</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 ">
          {userList?.map((data) => (
            <tr>
              <td className="font-medium text-gray-800">
                <img className="h-16 " alt="avatar" src="" />
              </td>
              <td className="font-medium text-gray-800">{data.username}</td>
              <td className="font-medium text-gray-800">
                {data.isAdmin.toString()}
              </td>
              <td className="font-medium text-gray-800 border-2">delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
