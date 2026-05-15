package com.mydeviceapp.bridge

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import com.mydeviceapp.services.BatteryService // Importamos el servicio anterior

class BatteryModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    // Instanciamos el servicio pasándole el contexto de la app
    private val batteryService = BatteryService(reactContext)

    // Este es el nombre que usarás en JS: NativeModules.BatteryModule
    override fun getName(): String = "BatteryModule"

    @ReactMethod
    fun getBatteryLevel(promise: Promise) {
        val level = batteryService.getLevel()

        if (level >= 0) {
            promise.resolve(level)
        } else {
            promise.reject("BATTERY_ERROR", "No se pudo obtener el nivel de batería")
        }
    }
}