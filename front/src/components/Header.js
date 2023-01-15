// MUIパーツ読み込み
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import ForestIcon from "@mui/icons-material/Forest";

// import ForestIcon from "@mui/icons-material/Forest";

const HeaderStyle = styled(Typography)(() => ({
  flex: 1,
}));

function Header() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <HeaderStyle>JP-Camping Map</HeaderStyle>
        <ForestIcon />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
