import { useState, useEffect, useRef } from "react";
import {Box, Button, List, ListItem} from '@mui/material'
import Dropdown from "./Dropdown";

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
      document.addEventListener("mousedown", handler);
      document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  return (
    <List
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* if item has url and submenu, we make the button clickable to visit 
      the url while still showing dropdown on hover. If no url, we only show 
      hover without linking the button. Else, we render a simple <a> element. 
      Be aware that they are internal links, so we will use the <Link> component from react-router. Here, we are using the <a> for simplicity. */}
      {items?.url && items?.items ? (
        <Box>
          <Button
            Button="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            // onClick={() => setDropdown((prev) => !prev)}
          >
            <a href={items.url}>{items.title}</a>
            {/* {items.title}{" "} */}
            {depthLevel > 0 ? (
              <span>&raquo;</span>
            ) : (
              <span
                className={`arrow${
                  items.url && items.items ? " custom" : ""
                }`}
              />
            )}
          </Button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.items}
            dropdown={dropdown}
          />
        </Box>
      ) : !items?.url && items?.items ? (
        <Box>
          <Button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {/* <a href="/#">{items.title}</a> */}
            {items.title}{" "}
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </Button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.items}
            dropdown={dropdown}
          />
        </Box>
      ) : (
        <Box>
          <Button>
           <a href={items?.url}>{items?.title}</a>
          </Button>
        </Box>
      )}
    </List>
  );
};

export default MenuItems;