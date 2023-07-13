
import Delete from './delete.js';
import Rating from './rating.js';
import {Space} from './header.js';



export default function MovieRow(props) {
  return (
    <>
      <div className="Movie_row">
      
        <div className="Movie_img">
          <img src="img.png" alt="img" />
        </div>
        
        <div className="Movie_details">
        
          <h1>{props.item.title}</h1>
          <br />
          
          <p>
            {props.item.Year + ' .  ' + props.item.Duration + '   |   ' + props.item.Gener}
          </p>
          <br />
          
          <h3>Description</h3>
          <p>{props.item.Description}</p>
        </div>
        
        
        <div className="action_ui">
          <Rating />
          
          <Delete handleDelete={props.handleDelete} />
        </div>
        
      </div>
      
      <div className="black_line"></div>
      
      <Space />
    </>
  );
}

