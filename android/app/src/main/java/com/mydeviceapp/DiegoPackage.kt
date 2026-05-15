package com.mydeviceapp

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager
// Importaciones de tus módulos independientes
import com.mydeviceapp.bridge.BatteryModule 

class DiegoPackage : ReactPackage {
    override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {
        return emptyList()
    }

    override fun createNativeModules(reactContext: ReactApplicationContext): List<NativeModule> {
        val modules = mutableListOf<NativeModule>()

        modules.add(DiegoModule(reactContext))
        modules.add(BatteryModule(reactContext))

        return modules
    }
}