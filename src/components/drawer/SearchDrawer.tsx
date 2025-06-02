"use client";

import { useSearchDrawer } from "@/context/SearchDrawerContext";
import { Button, Drawer } from "antd";
import { useEffect, useState } from "react";
import useGetPosts from "../post/useGetPost";

export default function SearchDrawer() {
  const [loading, setLoading] = useState<boolean>(false);
  const { isOpen, closeDrawer } = useSearchDrawer();

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
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
}
