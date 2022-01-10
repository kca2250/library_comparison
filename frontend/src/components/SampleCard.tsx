import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Collapse,
  IconButton,
  IconButtonProps,
  Link,
  styled,
  Typography,
} from "@mui/material";
import { Favorite, MoreVert, Share } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { USER } from "./CardList";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const SampleCard: React.FC<USER> = (props) => {
  const { name, username, email, company, address, website, phone } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardHeader
        avatar={<Avatar sizes={username} />}
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={name}
        subheader={email}
      />
      <CardContent>
        <Typography variant="body1">{company.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {company.catchPhrase}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {company.bs}
        </Typography>
        <Chip label={phone} />
        <Link href={website}>{website}</Link>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>ADDRESS</Typography>
          <Chip label={address.zipcode} />
          <Typography variant="body2">
            {address.geo.lat}:{address.geo.lng}
          </Typography>
          <Typography paragraph>{address.city}</Typography>
          <Typography paragraph>{address.street}</Typography>
          <Typography>{address.suite}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default SampleCard;
