import React, { useEffect, useState } from "react";
import { Button, SideBarContainer, Header } from "./side-bar.styles";

export const SideBar = React.memo(props => {
  const [open, setOpen] = useState(true);
  const [style, setStyle] = useState({});
  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setStyle({ width: "350px" });
    }, 5000);
    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <>
      <Header>
        <Button onClick={handleToggle}>></Button>
      </Header>
      <SideBarContainer style={style} open={open}>
        <Button onClick={handleToggle}>></Button>
      </SideBarContainer>
    </>
  );
});
