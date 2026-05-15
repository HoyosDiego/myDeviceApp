import { NativeModules } from 'react-native';

const { DiegoModule, BatteryModule } = NativeModules;

/**
 * Aplicamos el patrón Facade para centralizar el acceso al Bridge.
 * Esto facilita el testing y el mantenimiento.
 */
export const DeviceBridge = {
    getBattery: async (): Promise<number> => {
        if (!BatteryModule) {
            throw new Error("El módulo nativo no está vinculado");
        }
        return await BatteryModule.getBatteryLevel();
    },
    openCalendar: (): void => DiegoModule.openNativeCalendar(),
};