import React, {
  Component
} from 'react';
import Box from './Box.js';




class BoxContainer extends Component {

  static defaultProps = {
    title: "Box Container",
    color: ['coral', 'gold', 'lavender', 'cadetblue', 'aqua', 'thistle', 'mistyrose', 'seashell',
      'ghostwhite', 'beige', 'darkslategray', 'honeydew', 'lime', 'peru', 'brown', 'purple'
    ]
  }



  constructor(props) {
    super(props);
    this.state = {
      colors: Array.from({
        length: props.color.length
      }).map(c => props.color[Math.floor(Math.random() * props.color.length)])
    };


  }



    render() {
        return ( 
          
          <div>
            {this.state.colors.map(c => <Box color={c}/>)}
          </div>
            )
          }
        }

        export default BoxContainer;