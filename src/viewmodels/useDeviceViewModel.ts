import { useState, useCallback } from 'react';
import { DeviceBridge } from '../native/DeviceBridge';

export const useDeviceViewModel = () => {
    const [battery, setBattery] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const loadBatteryInfo = useCallback(async () => {
        setLoading(true);
        try {
            const level = await DeviceBridge.getBattery();
            setBattery(level);
        } catch (error) {
            console.error("Error en el Bridge:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    const handleCalendarPress = () => {
        DeviceBridge.openCalendar();
    };

    return {
        battery,
        loading,
        loadBatteryInfo,
        handleCalendarPress
    };
};