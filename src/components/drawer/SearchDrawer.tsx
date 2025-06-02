"use client";

import { Drawer } from "antd";
import { useSearchDrawer } from "@/context/SearchDrawerContext";
import { useState } from "react";
import DrawerSearch from "./DrawerSearch/DrawerSearch";


export default function SearchDrawer() {
  const [loading, setLoading] = useState<boolean>(false);
  const { isOpen, closeDrawer } = useSearchDrawer();

  return (
    <Drawer
      closable
      destroyOnHidden
      title={<p>Search people</p>}
      placement="right"
      open={isOpen}
      loading={loading}
      onClose={() => closeDrawer()}
      mask={false}
      getContainer={false}
    >
      <DrawerSearch/>
    </Drawer>
  );
}
