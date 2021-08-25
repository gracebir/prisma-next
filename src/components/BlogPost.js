import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    spacing: {
      margin: "15px 0",
    },
  });

function BlogPost({id, text, onDelete,openModal}) {
    const classes = useStyles();
    return (
        <Card className={classes.spacing}>
        <CardContent>
          <Typography>{text}</Typography>
        </CardContent>
  
        <CardActions>
          <Button onClick={() => openModal(id)} size="small" color="primary">
            Edit
          </Button>
          <Button onClick={() => onDelete(id)} size="small" color="primary">
            Delete
          </Button>
        </CardActions>
      </Card>
    )
}

export default BlogPost
