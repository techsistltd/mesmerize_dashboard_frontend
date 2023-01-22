import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Breadcrumbs, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useMatches } from "react-router-dom";

const PageHeader = ({ pageTitle = "Notun Asha" }) => {
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const { pathname } = useLocation();
  let matches = useMatches();

  useEffect(() => {
    let crumbs = matches
      .filter((match) => Boolean(match.handle?.crumb))
      .map((data) => data.handle.crumb);

    const crumbsComponents = crumbs.map(({ to = "", title = "" }) => {
      return (
        <Typography
          key={`route-for=${to}`}
          component={Link}
          to={to}
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            textDecoration: "none",
            color: "textBlack",
            textTransform: "capitalize",
            "&:hover": {
              textDecoration: "underline",
            },
            "&:visited": {
              color: "primary.main",
            },
          }}
        >
          {title}
        </Typography>
      );
    });

    setBreadcrumbs(crumbsComponents);

    return () => {
      setBreadcrumbs([]);
    };
  }, [pathname]);

  return (
    <Paper
      sx={{
        my: "40px",
        padding: "16px 22px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0px 3px 1px -2px rgba(76, 78, 100, 0.2)",
        borderRadius: "3px",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontSize: "20px",
          fontWeight: 700,
          color: "textblack",
          textTransform: "capitalize",
        }}
      >
        {pageTitle}
      </Typography>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Paper>
  );
};

export default PageHeader;
