import { motion } from 'framer-motion';
import angular from "../../assets/angular.png"
import php from "../../assets/php.png"
import java from "../../assets/Java.png"
import net from "../../assets/net.png"
import sql from "../../assets/sql.png"
import firebase from "../../assets/firebase.png"


const Example = () => {
  const replies = [
    {
      id: '1',
      photo: angular,
    },
    {
      id: '2',
      photo: php,
    },
    {
      id: '3',
      photo: net,
    },
    {
      id: '4',
      photo: sql,
    },
    {
      id: '5',
      photo: java,
    },
    {
      id: '6',
      photo: firebase,
    }
  ];

  const list = {
    visible: {
      opacity: 1,
      transition: {
        // delayChildren: 1.5,
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -10 },
  };

  return (
    <>
      {/* <h4>Already {replies.length} furry friends liked this post!</h4> */}
      <motion.ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          marginLeft: '0px',
          marginBottom: '8px',
          marginTop: '15px',
          paddingLeft: '0px',
        }}
        initial="hidden"
        animate="visible"
        variants={list}
      >
        {replies.map((reply) => (
          <motion.li
            style={{
              listStyle: 'none',
              marginRight: '-10px',
            }}
            key={reply.id}
            data-testid={reply.id}
            variants={item}
            whileHover={{
              // scale: 1.2,
              marginRight: '5px',
              transition: { ease: 'easeOut' },
            }}
          >
            <div
              style={{
                height: '50px',
                width: '50px',
                borderRadius: '50%',
                border: '3px solid #4C79DF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '38px',
              }}
            >
              <img src={reply.photo} alt='language' className='skills-icon'/>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
};

export default Example;