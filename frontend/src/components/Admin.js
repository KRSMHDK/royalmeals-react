import React, { useEffect, useState } from 'react';
import userService from '../services/users';
import { AvatarGenerator } from 'random-avatar-generator';

const generator = new AvatarGenerator();

function Admin() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    userService.getAllUsers().then((data) => setUserList(data));
  }, []);
  return (
    <div className="container mx-auto px-20">
      <table className="table-auto">
        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
          <tr>
            <th className="font-semibold text-left">No</th>
            <th className="font-semibold text-left">Username</th>
            <th className="font-semibold text-left">Admin</th>
          </tr>
        </thead>
        <tbody className=" divide-y divide-gray-100">
          {userList.map((data) => (
            <>
              <tr>
                <td className="font-medium text-gray-800">
                  <img
                    className="h-16 "
                    alt="avatar"
                    src={generator.generateRandomAvatar(data._id)}
                  />
                </td>
                <td className="font-medium text-gray-800">{data.username}</td>
                <td className="font-medium text-gray-800">
                  {data.isAdmin.toString()}
                </td>
                <td className="font-medium border-2 text-gray-800">delete</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
