import { motion } from "framer-motion";
import { useState } from "react";
const test = () => {


    const [open, setOpen] = useState(false)

const variants = {
    visible: {
        opacity:1,
         x:1000,
          transition:{delay:i * 0.3},
        },
    hidden:{opacity: 0 },
};

const items = ["item1", "item2", "item3", "item4"];

    return (
        <div className='course'>
            <motion.ul initial="hidden" animate="visible"  variants={variants}> 
             {items.map((item) => (
                <motion.li variants={variants} key={item} custom={i}>
                    {item}
                </motion.li>
             ))}
             </motion.ul>
        </div>
    )
}



export default test;