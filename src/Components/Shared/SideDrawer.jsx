import CircleIcon from "@mui/icons-material/Circle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Drawer,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsNewspaper } from "react-icons/bs";
import { FaBloggerB } from "react-icons/fa";
import { MdNotifications, MdSettingsSuggest } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import BrandLogo from "../../Assets/BrandLogo.svg";

const drawerMenus = [
  {
    title: "Dashboards",
    icon: AiOutlineHome,
    path: "",
  },
  {
    title: "Manage News",
    icon: FaBloggerB,
    path: "news",
    children: [
      {
        title: "View All News",
        path: "",
      },
      {
        title: "Add News",
        path: "add",
      },
      {
        title: "View All Videos",
        path: "videos",
      },
      {
        title: "Add Video",
        path: "add-videos",
      },
    ],
  },
  {
    title: "E-Paper",
    icon: BsNewspaper,
    path: "e-paper",
  },
  {
    title: "Notification",
    icon: MdNotifications,
    path: "notification",
  },
  {
    title: "Settings",
    icon: MdSettingsSuggest,
    path: "settings",
  },
];

const SideDrawer = ({ drawerWidth }) => {
  const [expanded, setExpanded] = useState(null);
  const navigate = useNavigate();

  const handleExpandedMenu = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : null);
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          bgcolor: "primary.main",
          color: "white",
          width: drawerWidth,
          boxSizing: "border-box",
        },
        "& svg": {
          color: "white",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar
        sx={{
          justifyContent: "center",
        }}
      >
        <Link to="/">
          <Box component="img" src={BrandLogo} />
        </Link>
      </Toolbar>
      <Box
        sx={{
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",

          // child styles
          "& .MuiButtonBase-root": {
            p: "0px 12px !important",
            fontSize: "14px",
            color: "white",
            gap: "12px",
            height: "42px",
            borderRadius: "2px",
            justifyContent: "flex-start",

            "&:hover": {
              bgcolor: "white",
              color: "black",
              "& path": {
                color: "black",
              },
            },
          },
          "& .MuiPaper-root": {
            color: "inherit",
            bgcolor: "inherit",
          },
          "& .MuiAccordionSummary-root": {
            minHeight: "unset !important",
            gap: "12px",

            "& .MuiAccordionSummary-content": {
              gap: "12px",
            },
            "& .MuiAccordionSummary-expandIconWrapper": {
              transform: "rotate(270deg)",
            },
            "& .Mui-expanded.MuiAccordionSummary-expandIconWrapper": {
              transform: "rotate(0deg)",
            },
          },
          "& .MuiAccordionDetails-root": {
            padding: "5px 0 0 2px !important",
          },
        }}
      >
        <Typography variant="body5" fontWeight={500}>
          APPLICATION
        </Typography>
        {drawerMenus?.map(
          ({ title, icon: Icon, path = "", children = "" }, idx) => {
            return (
              <Box key={`drawer-menu-${idx}`}>
                {Boolean(children?.length) ? (
                  <Accordion
                    expanded={expanded === `panel${idx}`}
                    onChange={handleExpandedMenu(`panel${idx}`)}
                    elevation={0}
                  >
                    <AccordionSummary
                      aria-controls={`panel${idx}d-content`}
                      id={`panel${idx}d-header`}
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <Icon
                        style={{
                          fontSize: "18px",
                        }}
                      />
                      <Box component="span">{title}</Box>
                    </AccordionSummary>
                    <AccordionDetails>
                      {children.map(
                        ({ title: childTitle, path: childPath }, idx) => {
                          return (
                            <Button
                              key={`drawer-sub-menu-${idx}`}
                              size="small"
                              onClick={() =>
                                navigate(
                                  `/${path}${childPath ? `/${childPath}` : ""}`
                                )
                              }
                              fullWidth
                              variant="text"
                            >
                              <CircleIcon
                                sx={{
                                  height: "8px",
                                  width: "8px",
                                  ml: "7px",
                                  mr: "3px",
                                }}
                              />
                              <Box component="span">{childTitle}</Box>
                            </Button>
                          );
                        }
                      )}
                    </AccordionDetails>
                  </Accordion>
                ) : (
                  <Button
                    onClick={() => navigate(`/${path}`)}
                    fullWidth
                    variant="text"
                  >
                    <Icon
                      style={{
                        fontSize: "18px",
                      }}
                    />
                    <Box component="span">{title}</Box>
                  </Button>
                )}
              </Box>
            );
          }
        )}
      </Box>
    </Drawer>
  );
};

export default SideDrawer;
