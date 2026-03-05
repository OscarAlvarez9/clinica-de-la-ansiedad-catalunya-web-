import { useEffect, useState } from "react";
import { animate } from "framer-motion";

export function useAnimatedNumber(
    targetValue: number,
    duration: number = 2,
    inView: boolean = true
) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (inView) {
            const controls = animate(0, targetValue, {
                duration,
                onUpdate: (val) => setValue(Math.round(val)),
            });
            return () => controls.stop();
        }
    }, [targetValue, duration, inView]);

    return value;
}
