"use client";

import { Avatar, Input } from "antd";
import type { GetProps } from "antd";
import { useState } from "react";

type User = {
  id: number;
  img: string;
  name: string;
  chatId?: string;
};

const usersList: User[] = [
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Jf7L1uLyKL81OhzN2fk-x0OSKXABNLEZYg&s",
    name: "Vanya",
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Jf7L1uLyKL81OhzN2fk-x0OSKXABNLEZYg&s",
    name: "Ibragim",
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Jf7L1uLyKL81OhzN2fk-x0OSKXABNLEZYg&s",
    name: "Kostya",
  },
  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Jf7L1uLyKL81OhzN2fk-x0OSKXABNLEZYg&s",
    name: "Igor",
  },
];

export default function DrawerSearch() {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value.trim().toLowerCase());
  };

  const filteredUsers = usersList.filter((user) =>
    user.name.toLowerCase().includes(searchValue)
  );

  return (
    <div className="flex flex-col p-4">
      <Input
        onChange={handleChange}
        placeholder="Search"
        className="max-w-md mx-auto"
        allowClear
        size="large"
      />

      {/* Показываем список только если что-то введено */}
      {searchValue && (
        <ul className="mt-6 space-y-4">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <li
                key={user.id}
                className="flex items-center gap-4 p-3 bg-white dark:bg-neutral-800 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-xl"
              >
                <Avatar src={user.img} size="large" />
                <p className="text-lg font-medium text-gray-800 dark:text-white">
                  {user.name}
                </p>
              </li>
            ))
          ) : (
            <li className="text-center text-gray-500 dark:text-gray-400">
              Пользователи не найдены
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
