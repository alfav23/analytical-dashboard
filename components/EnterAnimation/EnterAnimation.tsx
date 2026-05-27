import * as motion from "motion/react-client"

export default function EnterAnimation({children}: any) {
    return (
        <motion.div
            initial={{ x: -400, opacity: 0, scale: 1 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ 
                duration: 0.8,
                scale: { type: "tween" },
            }}
            viewport={{ once: true }} 
        >
            {children}
        </motion.div>
    )
}