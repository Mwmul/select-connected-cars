import { StateHook } from "../global.types";
import React, {useState} from 'react';

interface ContainerSize {
    width: number,
    height: number
}
export default function (containerRef: any): ContainerSize {


    const getContainerSize = (): ContainerSize => {
        if(containerRef.current) {
            const containerRect = containerRef.current.getBoundingClientRect();
            return {
                width: containerRect.width,
                height: containerRect.height
            }
        }
        return {
            width: 0,
            height: 0
        };
    }

    const [containerSize, setContainerSize]: StateHook<ContainerSize> = useState(getContainerSize());


    React.useEffect(() => {
        const handleResize = () => setContainerSize(getContainerSize());

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);

    }, []);

    return containerSize;

}