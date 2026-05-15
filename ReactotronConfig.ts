import Reactotron from 'reactotron-react-native';

if (__DEV__) {
    Reactotron
        .configure({
            name: 'MyDeviceApp',
            host: 'localhost', // Crucial para que el bridge de Android lo detecte
            port: 9090
        })
        .useReactNative() // Agrega todos los plugins integrados de React Native
        .connect(); // ¡Inicia la conexión!

    // Opcional: Limpia la consola de Reactotron cada vez que recargas la app
    Reactotron.clear?.();
}