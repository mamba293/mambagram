"use client";

import { useSearchDrawer } from "@/context/SearchDrawerContext";
import { Drawer, Input } from "antd";
import { useState } from "react";
import type { GetProps } from "antd";

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const data = [
  "",
]



const mockUsers = {};

export default function SearchDrawer() {
  const [loading, setLoading] = useState<boolean>(false);
  const { isOpen, closeDrawer } = useSearchDrawer();

  const [searcValue, setSearchValue] = useState<string>('');
  const [userList, setUserList] = useState(data)

  const onSearch: SearchProps["onSearch"] = (value) =>{
    setSearchValue(value)
  };

  return (
    <Drawer
      closable
      destroyOnHidden
      title={<p>Loading Drawer</p>}
      placement="right"
      open={isOpen}
      loading={loading}
      onClose={() => closeDrawer()}
      mask={false}
      getContainer={false}
    >
      <Search
        placeholder="input search text"
        onSearch={onSearch}
        enterButton="Search"
        // loading = {true}
      />
    </Drawer>
  );
}
