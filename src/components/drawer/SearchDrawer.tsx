import { Button, Drawer } from "antd";
import { useState } from "react";

export default function SearchDrawer() {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Drawer
      closable
      destroyOnHidden
      title={<p>Loading Drawer</p>}
      placement="right"
      open={open}
      loading={loading}
      onClose={() => setOpen(false)}
    >
      <Button type="primary" style={{ marginBottom: 16 }} onClick={showLoading}>
        Reload
      </Button>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
}
